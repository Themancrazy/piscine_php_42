// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   D03.js                                             :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: anjansse <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2019/03/27 11:30:21 by anjansse          #+#    #+#             //
//   Updated: 2019/03/27 18:08:20 by anjansse         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

const http = require('http');
const Cookies = require('cookies');
const url = require('url');

const server = http.createServer((req, res) => {

	var cookies = new Cookies(req, res);

	var query = require('url').parse(req.url,true).query;
	for (const key in query) {
		if (key === "action")
			var action = query[key];
		if (key === "name")
			var name = query[key];
		if (key === "value")
			var value = query[key];
	}

	if (action === "set")
	{
		cookies.set(name, value);
		console.log("A cookie has been created!");
	}
	else if (action === "get")
	{
		var display = cookies.get(name, { maxAge:5000 });
		console.log(display);
	}
	else if (action === "del")
	{
		cookies.set(name, null);
		console.log("The cookie has been successfully deleted!");
	}

	res.setHeader('Content-Type', 'text/plain')
	if (action === "get")
		res.end('Welcome back! Btw, the value of the cookie is: ' + display);
	else
		res.end('Welcome back!');
}).listen(3000, function() {
	console.log("Server on and listening on port 3000");
});
