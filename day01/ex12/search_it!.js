// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   search_it!.js                                      :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: anjansse <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2019/03/27 21:38:51 by anjansse          #+#    #+#             //
//   Updated: 2019/03/27 21:42:11 by anjansse         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

var key = process.argv[2];
var i = 3;
while (i < process.argv.length) {
	var lock = process.argv[i].split(":");
	if (lock[0] === key) {
		console.log(lock[1]);
		break ;
	}
	i++;
}
