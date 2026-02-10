# Cpp Reference - VS Code Extension

This extension is simply modified version of [guyutongxue's cppreference](https://github.com/guyutongxue/VSC_CppReference)

This is a tool to browse [cppreference.com](https://cppreference.com) from within vscode internal simple browser, original extension opened webpage inside webview so it was hard to navigate.

## Usage

Set your cursor position onto the word you want search for, then press <kbd>Ctrl+Shift+A</kbd> on Linux/Windows or <kbd>Command+Shift+A</kbd> on macOS.

You can also search manually by opening Command Palette (<kbd>Ctrl+Shift+P</kbd>, <kbd>Command+Shift+P</kbd>) and execute command `Cpp Reference: Search manually`.

> **Warning**
> Only pages in "C++" part (not "C" part) will be indexed and shown in search results.

## Settings

### `cppref.lang`

Choose the language of online version cppreference.com. For example, use `zh` for Chinese version of [cppreference.com](https://zh.cppreference.com)
