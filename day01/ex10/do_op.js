// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   do_op.js                                           :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: anjansse <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2019/03/25 14:25:24 by anjansse          #+#    #+#             //
//   Updated: 2019/03/25 15:38:34 by anjansse         ###   ########.fr       //
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

if (process.argv.length != 5)
	console.log("Incorrect Parameters");

else {
	var value1 = process.argv[2].replace(/^\s+|\s+$/g, '').replace(/ {1,}/g," ");
	var value2 = process.argv[4].replace(/^\s+|\s+$/g, '').replace(/ {1,}/g," ");
	var op = process.argv[3];
	if ((isNaN(value1) || isNaN(value2)) || (op != "+" && op != "-" && op != "*" && op != "/" && op != "%"))
		console.log("Incorrect Parameters");
	else
		do_op(parseInt(value1), op, parseInt(value2));
}
