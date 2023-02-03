# Snippets Diversos


- Exemplo de deploy com o Github pages (Para projetos React)

```
npm install gh-pages --save-dev

```

Depois, dentro do package.json: 
```
"homepage" : "https://lucasalvaresa.github.io/expense-tracker"


- in scripts, above "start":

"predeploy":"npm run build"
"deploy":"gh-pages -d build"


npm run build

```
