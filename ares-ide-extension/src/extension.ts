import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('ARES IDE is now active!');

    const provider = new AresWebviewViewProvider(context.extensionUri);
    context.subscriptions.push(
        vscode.window.registerWebviewViewProvider(AresWebviewViewProvider.viewType, provider)
    );
}

class AresWebviewViewProvider implements vscode.WebviewViewProvider {
    public static readonly viewType = 'ares.dashboardView';

    constructor(
        private readonly _extensionUri: vscode.Uri,
    ) { }

    public resolveWebviewView(
        webviewView: vscode.WebviewView,
        context: vscode.WebviewViewResolveContext,
        _token: vscode.CancellationToken,
    ) {
        webviewView.webview.options = {
            enableScripts: true,
            localResourceRoots: [
                this._extensionUri
            ]
        };

        webviewView.webview.html = this._getHtmlForWebview();
    }

    private _getHtmlForWebview() {
        // Injeta a nossa interface do Orquestrador via iframe!
        // Isso permite o Hot-Reloading perfeito sem precisar rebuildar a extensão a cada mudança visual.
        return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>ARES IDE</title>
                <style>
                    body, html { margin: 0; padding: 0; height: 100vh; overflow: hidden; background-color: #030712; }
                    iframe { width: 100%; height: 100%; border: none; }
                </style>
            </head>
            <body>
                <iframe src="http://localhost:8080" sandbox="allow-scripts allow-forms allow-same-origin allow-popups"></iframe>
            </body>
            </html>`;
    }
}

export function deactivate() {}
