# npx create-react-app frontend
# cd frontend && npm start
npm i -D eslint
echo "Configurações:"
echo " - syntax and problems"
echo " - None of these (module types)"
echo " - React"
echo " - TypeScript No"
echo " - Browser"
echo " - JSON"
echo " - Yes"
echo " - npm"
./node_modules/.bin/eslint --init
echo ".node_modules\nsrc/repostWebVitals.js" > .eslintignore
echo "\n=== Configurações Manuais: ==="
echo "eslintrc.json → rules:{ ... }"
echo "\"react/jsx-filename-extension\": 0,"
echo "\"react/react-in-jsx-scope\": 0"
echo "no vscode: Ctrl+Shift+P → \"Eslint: Restart Eslint Server\""
