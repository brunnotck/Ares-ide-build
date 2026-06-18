#!/bin/bash
# ARES IDE - Branding Patch Script
# Este script é executado pelo GitHub Actions para injetar a marca ARES IDE no código-fonte do VS Code.

echo "========================================="
echo "🛡️ INICIANDO INJEÇÃO DA ARES IDE 🛡️"
echo "========================================="

# 1. Alterar nomes no product.json
echo "-> Modificando product.json (Mudando 'Visual Studio Code' para 'ARES IDE')..."
sed -i 's/"nameShort": "Code"/"nameShort": "ARES IDE"/g' product.json
sed -i 's/"nameLong": "Visual Studio Code"/"nameLong": "ARES IDE"/g' product.json
sed -i 's/"applicationName": "code"/"applicationName": "ares-ide"/g' product.json

# 2. Injeção de Telemetria Zero
echo "-> Desativando rastreamento e telemetria da Microsoft..."
sed -i 's/"enableTelemetry": true/"enableTelemetry": false/g' product.json

# 3. Injeção da Extensão Nativa do Orquestrador
echo "-> Injetando o Orquestrador na pasta de extensões nativas (Built-in)..."
# O GitHub Actions vai copiar a nossa pasta ares-ide para cá
mkdir -p extensions/ares-ide-builtin
cp -r ../ares-build/ares-ide-extension/* extensions/ares-ide-builtin/

echo "========================================="
echo "✅ PATCH APLICADO COM SUCESSO!"
echo "========================================="
# Trigger cloud build
