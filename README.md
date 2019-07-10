this is an app where you can upload pictures
I'm using React/Redux and probably Sagas for the UIs

haven't decided on API/DB yet

The idea of this project is initially to improve my test driving skills in React, functional programming and I might use it later to manipulate/do something with those pictures. 

(these are just my notes to document my steps)
Step 1: Create webpack 4 config
 - set up package.json and webpack4  
 - create some random file in src/index.js because it is the entry point for webpack 
 - npm run dev outputs a bundled main.js to dist/main.js
 - set mode to dev or prod
 - specify output file 
 - setting up babel and react
 
 Step 2: 
 - set up Enzyme and Tests 
 
 Step 3: 
 - build a component based app, datadriven 
 - the data should live in a JSON object 
 - I can easily update the JSON and thereby create new components
 
 Step 4: 
 - mock the API call for now 
 - the API (probably Python will return a POST containing a JSON with the response of my Kotlin compiler)
