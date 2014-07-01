var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('<form action="/cerca" method="get"><input name="testo" /><input type="submit" value="cerca" /></form>');
});

app.get('/cerca', function(req, res){
  var testo_cercato=req.query.testo;
  res.send('qui ci vanno i risultati della ricerca per: '+testo_cercato);
});

var server = app.listen(3000, function() {
    console.log('Listening on http://localhost:%d/', server.address().port);
});
