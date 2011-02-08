var fs = require("fs")
var http = require("http")
var jerk = require("./Jerk")
var formidable = require("./formidable")

var listenport = 8199
var number = "+999999999999999"
var path = "/var/http/voicemail/"
var url = "http://your.domain.tld/voicemail/"

var options =
	{	server: "wina.ugent.be",
		nick: "Voicemail",
		channels: ["#zeus"]
	}

var bot = jerk(function(j) {
	j.watch_for(("^!voicemail"), function(message) {
		message.say("Call " + number + " to leave a message.")
	})
}).connect(options)


var httpd = http.createServer(function (req, res) {
	console.log("Req: " + req)
	console.log("URL: " + req.url)
	console.log("headers: " + req.headers)
	var form = new formidable.IncomingForm();
	form.parse(req, function(err, fields, files) {
		console.log(fields)
		console.log(files)

		var voicemail = files["filename"]

		fs.rename(voicemail.path, path + voicemail.name)
		bot.say("#zeus", "New voicemail @ " + url + voicemail.name);

		res.writeHead(200, {'content-type': 'text/plain'});
		res.write('received');
		res.end();
	})
})

httpd.listen(listenport)
