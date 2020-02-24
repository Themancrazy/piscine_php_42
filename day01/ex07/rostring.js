// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   rostring.js                                        :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: anjansse <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2019/03/25 11:44:36 by anjansse          #+#    #+#             //
//   Updated: 2019/03/27 21:29:57 by anjansse         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //
/*
var array = process.argv[2];
array = array.push(array[0]);
*/

var array = process.argv[2].split(" ");
var len = array.length;

if (len > 1) {
	for (i = 1; i != len; i++) {
	process.stdout.write(array[i]);
	process.stdout.write(" ");
	}
	process.stdout.write(array[0].replace(/^\s+|\s+$/g, '').replace(/ {1,}/g," "));
	console.log("");
}
/*
else {
	process.stdout.write(array[0].replace(/^\s+|\s+$/g, '').replace(/ {1,}/g," "));
	console.log("");
}
*/
