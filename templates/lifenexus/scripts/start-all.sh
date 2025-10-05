#!/bin/bash
# LifeNexus starter: spin up 3 MFEs and the shell
set -e

echo "🚀 LifeNexus: starting preview/dev servers"

pushd ../apps/finance-web >/dev/null
yarn build && yarn preview --port 5174 &
popd >/dev/null

pushd ../apps/messages >/dev/null
yarn build && npx serve dist -l 4201 &
popd >/dev/null

pushd ../apps/media-vue >/dev/null
yarn build && yarn preview --port 4202 &
popd >/dev/null

echo "🏠 Start shell:"
echo "  cd ../root-shell && npx serve -l 9001"
echo "Then open http://localhost:9001 and ensure import map URLs match your ports."

