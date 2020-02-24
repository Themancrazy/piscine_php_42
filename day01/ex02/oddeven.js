// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   oddeven.js                                         :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: anjansse <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2019/03/24 16:29:42 by anjansse          #+#    #+#             //
//   Updated: 2019/03/24 19:45:46 by anjansse         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

var input = process.stdin;

process.stdout.write("Enter a number: ");
input.on('data', function (data) {
	data = data.toString();
	if (isNaN(data))
		console.log("'" + data.replace(/(?:\r\n|\r|\n)/g, '') + "'" + " is not a number.");
	else if (data % 2 == 0)
		console.log("The number " + data.replace(/(?:\r\n|\r|\n)/g, '') + " is even.");
	else if (data % 2 != 0)
		console.log("The number " + data.replace(/(?:\r\n|\r|\n)/g, '') + " is odd.");
	process.stdout.write("Enter a number: ");
});
