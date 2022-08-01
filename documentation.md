1. instaliramo react aplikaciju
2. izbrisemo nepotrebne fajlove
3. u src folderu kreiramo data.js fajl
4. u App.js importujemo data.js
5. uredujemo App.js fajl


Dummy data
https://www.mockaroo.com/


Github pages
1. dodajemo homepage u package.json fajlu
    "https://kimamovic21.github.io/(ime projekta)"
2. u terminal kucamo npm i gh-pages --save-dev
3. u package.json fajlu dodajemo predeploy i deploy
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
4. u terminal kucamo npm run deploy