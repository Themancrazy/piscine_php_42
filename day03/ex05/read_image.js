/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   read_image.js                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: anjansse <anjansse@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/03/27 18:26:39 by anjansse          #+#    #+#             */
/*   Updated: 2019/03/29 21:40:52 by anjansse         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
	res.writeHeader(200, {'Content-Type': 'image/png'});
	res.end(fs.readFileSync('../img/42.png'));
})

server.listen(3000, '127.0.0.1');
