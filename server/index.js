var express = require('express');
var app = express();
var marked = require('marked');
var fs = require('fs');
var path = require('path');
marked.setOptions({
	renderer: new marked.Renderer(),
	gfm: true,
	tables: true,
	breaks: true,
	pedantic: false,
	sanitize: true,
	smartLists: true,
	smartypants: false
});
app.use(express.static('public',{maxAge:12*60*60*24*30}));
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "X-Requested-With");
    // res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    // res.header("X-Powered-By",' 3.2.1')
    // res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
var formate = require('./dateformate.js');//date format

/********************get blog list********************************/
app.get('/api/blog/posts',function(req,res){
	var posts = [];
	fs.readdir('./public/blog/posts',function(err,files){
		if(err){
			console.error(err);
		}
		for (var i = 0; i < files.length; i++) {
			posts.push({'title':path.basename(files[i],'.md'),'datetime':fs.statSync('./public/blog/posts/'+files[i]).mtime})
		}
		posts.sort(function(a,b){
			return b.datetime - a.datetime
		})
		for (var j = 0; j < posts.length; j++){
			posts[j].datetime = formate(posts[j].datetime)
		}
		res.send(posts);
	})
});

/********************get blog detail********************************/
app.get('/api/blog/post/',function(req,res){
	var post = {'Mtime':'','content':''};
	fs.readFile('./public/blog/posts/'+req.query.file, 'utf-8', function (err, data) {
  	if (err) throw err;
		post.content = marked(data);
		fs.stat('./public/blog/posts/'+req.query.file,function(err,stats){
			if (err) throw err;
			post.Mtime = formate(stats.mtime);
			res.send(post);
		})
  });
});


app.get('/',function(req,res){
	res.sendFile('/index.html',{root: __dirname + '/public/'});
});

app.listen(8080);
console.log('server is running at port 8080');
