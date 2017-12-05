# My personal blog

The idea:

 * Front Page: Vue2.0-based responsive SPA
 * Backend: Node.js
 * Article: complete local md-format article, then uploaded to the server, Node.js directly read the md file and converted to html, returned to the frontend,
 * Deploy on AWS, it's free~


Start with the Vue cli

```
# install vue-cli
$ npm install --global vue-cli
# create a project based on webpack
$ vue init webpack blog
# install dependency
$ cd blog
$ npm install
$ npm run dev
```

Then install Vue-router and vue-resource(or axios)

```
$ npm install --save vue-router
$ npm install --save axios
```

Then I start working on the code static page, After the completion of static pages, then compiled

```
$ npm run build
```

Back-end development: create server-side directory structure and install the express framework and marked for the md file into html

```
$ mkdir blog-server && cd blog-server
$ mkdir public
$ npm install --save express
$ npm install --save marked
```

Write interface, there are three main interface.

1. Get article list interface. fs.readdir method read the md file folder, return all the md file names as title, also creation time, article path, sorting according to the creation time 
2. Article contents interface. According to the first interface to return the file name and path, use fs.readFile method to read the contents of the md file, rendered in the article content page.
3. Home content interface. Similar interface 2, read the latest article and return. 

Render static pages, use express built-in middleware to specify the public folder, root directory and cache.

```
# server.js
var express = require('express');
var app = express();
app.use(express.static('public',{maxAge:60*60*24*30}));
app.get('/',function(req,res){
  res.sendFile('/index.html',{root: __dirname + '/public/'});
});
app.listen(8080);
```
Last Step, deploy it on AWS

```
$ npm install -g PM2
$ pm2 start server.js
$ pm2 startup

```
