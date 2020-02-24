// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   D03.js                                             :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: anjansse <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2019/03/27 11:30:21 by anjansse          #+#    #+#             //
//   Updated: 2019/03/27 13:57:39 by anjansse         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

var http = require('http');
var divideIt;

function outputIt(url) {
	url = url.replace(/\//g, "").split("&");
	for (i = 0;i < url.length;i++) {
		if (url[i]) {
			divideIt = url[i].split("=");
			console.log(`${divideIt[0]}: ${divideIt[1]}`);
		}
	}
}

var server = http.createServer(function(req, res) {
	outputIt(req.url);
	res.writeHeader(200, {'Content-Type': 'text-plain'});
	res.end('Connected to port 8100');
})

server.listen(8100, '127.0.0.1');
