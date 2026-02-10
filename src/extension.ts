import * as vscode from "vscode";

import { getWvUri } from "./webview";
import { updateData } from "./data";
import { UserCancelledError } from "./utils";

export function activate(context: vscode.ExtensionContext) {
  async function main(manually: boolean): Promise<void> {
    try {
      let uri = await getWvUri(context, manually);
      vscode.commands.executeCommand('simpleBrowser.show', uri);
    } catch (error) {
      if (error instanceof Error) {
        if (!(error instanceof UserCancelledError))
          vscode.window.showInformationMessage(error.message);
      }
    }
  }
  const open = vscode.commands.registerCommand("cppref.open", () => {
    main(false);
  });
  const search = vscode.commands.registerCommand("cppref.search", () => {
    main(true);
  });
  const updateIndex = vscode.commands.registerCommand(
    "cppref.updateIndex",
    () => {
      vscode.window.withProgress(
        {
          location: vscode.ProgressLocation.Notification,
          title: "Fetching latest index from cdn.jsdelivr.net...",
        },
        async (progress) => {
          try {
            await updateData(context);
          } catch (err) {
            vscode.window.showErrorMessage(err.message);
          }
        }
      );
    }
  );
  context.subscriptions.push(open, search, updateIndex);
}
