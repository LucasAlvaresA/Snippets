# Deploy with Github pages (For React projects)

```
npm install gh-pages --save-dev
```

- In package.json: 

```
"homepage" : "https://youruser.github.io/repository-name"
```

- in scripts, above "start":

```
"predeploy":"npm run build"
"deploy":"gh-pages -d build"
```

- And run:

```
npm run build
```