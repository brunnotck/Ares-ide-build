<div align="center">
  <img src="https://raw.githubusercontent.com/ares-ide-build/main/build/icons/ares-logo.png" width="150" alt="ARES IDE Logo" />
  <h1>ARES IDE</h1>
  <p><strong>Powered by Odysseus & Hermes.</strong></p>
</div>

## ⚡ Overview
ARES IDE is a native, telemetry-free fork of VS Code/VSCodium. It is custom-built to deeply integrate with the ARES Orchestrator (Hermes + Paperclip) as a built-in sidebar extension.

## 🏗️ Architecture
This repository contains the CI/CD pipeline required to build ARES IDE directly in the cloud.
We use **GitHub Actions** to pull the latest VSCodium source code, apply our proprietary branding and extensions (the *ARES Patch*), and compile the native `.exe` installers for Windows.

## 🚀 Downloading ARES IDE
To download the latest compiled version of ARES IDE, navigate to the [Releases](#) tab of this repository and download `ARES-IDE-Setup-x64.exe`.

## 🛠️ Build Process
The build process is fully automated via GitHub Actions (`.github/workflows/build.yml`). 
If you want to build locally, you will need:
- Node.js & Yarn
- Python 3
- Visual Studio Build Tools (C++)
