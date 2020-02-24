// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   do_op2.js                                          :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: anjansse <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2019/03/25 15:39:28 by anjansse          #+#    #+#             //
//   Updated: 2019/03/25 15:50:32 by anjansse         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

function do_op(v1, op, v2) {
	var res;
	if (op == "+")
		res = v1 + v2;
	else if (op == "-")
		res = v1 - v2;
	else if (op == "/")
		res = v1 / v2;
	else if (op == "*")
		res = v1 * v2;
	else if (op == "%")
		res = v1 % v2;
	console.log(res);
}

if (process.argv.length != 3)
	console.log("Incorrect Parameters");

else {
	var array = process.argv[2].replace(/^\s+|\s+$/g, '').replace(/ {1,}/g," ");
	array = array.split(" ");
	if ((isNaN(array[0]) || isNaN(array[2])) || (array[1] != "+" && array[1] != "-" && array[1] != "*" && array[1] != "/" && array[1] != "%"))
		console.log("Incorrect Parameters");
	else
		do_op(parseInt(array[0]), array[1], parseInt(array[2]));
}
