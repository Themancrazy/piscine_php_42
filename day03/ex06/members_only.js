/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   members_only.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: anjansse <anjansse@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/03/27 19:54:58 by anjansse          #+#    #+#             */
/*   Updated: 2019/03/29 21:39:18 by anjansse         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require('fs');
const express = require('express');
const basicAuth = require('express-basic-auth');
const url = require('url');
const app = express();
const PORT = process.env.PORT || 3000;

// function when receiving an unauthorized request
function getUnauthorizedResponse(req) {
	return req.auth
			? ('<html><body>Cette zone est accessible uniquement aux membres du site</body></html>')
			: 'Please provide your credentials.';
}

// function to encode file data binary to base64 encoded string
function base64_encode(file) {
	var bitmap = fs.readFileSync(file);
	return Buffer.from(bitmap).toString('base64');
}

var msg = `<html><body>
Bonjour Zaz<br />
<img src='data:image/png;base64,` +
base64_encode('../img/42.png') +
	`'>
</body></html>
`;

app.use(basicAuth({
	users: { 'zaz': 'jaimelespetitsponeys' },
	unauthorizedResponse: getUnauthorizedResponse,
	challenge: true,
	realm: '\'Espace membres\'',
}));

app.get('/', function (req, res) {
	console.log(`New request at: ${req.url}`);
	res.send(msg);
});

app.listen(PORT, (err) => {
	if (err)
		throw err;
	console.log(`Server listening on port ${PORT}`);
});
