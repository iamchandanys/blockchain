# Deploying on Github

### Install node package to deploy onto GitHub

```npm i -g angular-cli-ghpages```

### Deploy on Github

- Go to package.json, and add a new script in the scripts section ```"deploy:gh": "ng build --configuration production --base-href='https://username.github.io/app-name/' && ngh"```

- Run command ```npm run deploy:gh```
