import vscode from "vscode";

import { getLink, getSearchEnginePath } from "./settings";
import { getPath } from "./data";
import { UserCancelledError } from "./utils";

function getCurrentWord(): string {
  const active = vscode.window.activeTextEditor;
  if (!active) {
    throw new Error("No active text editor");
  }
  const range = active.selection.isEmpty
    ? active.document.getWordRangeAtPosition(active.selection.active)
    : active.selection;
  if (range) {
    const word = active.document.getText(range);
    return word;
  } else {
    throw new Error("No identifier found.");
  }
}

export async function getWvUri(context: vscode.ExtensionContext, manually: boolean): Promise<string> {
  const word = manually ? "" : getCurrentWord();
  const path = await getPath(context, word);
  if (path === null) {
    vscode.env.openExternal(vscode.Uri.parse(getSearchEnginePath(word)));
    throw new UserCancelledError();
  }
  return getLink(path);
}
