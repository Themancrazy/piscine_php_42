// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   D03.js                                             :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: anjansse <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2019/03/27 11:30:21 by anjansse          #+#    #+#             //
//   Updated: 2019/03/27 12:09:55 by anjansse         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

var http = require('http');

var server = http.createServer(function(req, res) {
	console.log(`Connection log at ${req.url}.`);
	res.writeHeader(200, {'Content-Type': 'text-plain'});
	res.end('Connected to port 8100');
})

server.listen(8100, '127.0.0.1');
console.log("We're waiting for a response from port 8100.");
