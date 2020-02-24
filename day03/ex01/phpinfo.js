// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   phpinfo.js                                         :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: anjansse <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2019/03/27 11:08:51 by anjansse          #+#    #+#             //
//   Updated: 2019/03/27 11:17:04 by anjansse         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

var http = require('http');
var ninfo = require('nodejs-info');

var server = http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(ninfo(req));
})

server.listen(8100, '127.0.0.1');
console.log('Waiting for a response of port 8100')
