// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   raw_text.js                                        :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: anjansse <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2019/03/27 18:20:01 by anjansse          #+#    #+#             //
//   Updated: 2019/03/27 18:24:06 by anjansse         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

var http = require('http');

var server = http.createServer(function (req, res) {
	res.setHeader('Content-Type', 'text-html');
})

<html><body>Hello</body></html>
