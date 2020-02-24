// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   ssap.js                                            :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: anjansse <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2019/03/25 10:53:45 by anjansse          #+#    #+#             //
//   Updated: 2019/03/25 11:27:06 by anjansse         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

var list = "";

for (i = 2; i < process.argv.length; i++) {
	list = list.concat(process.argv[i]);
	list = list.concat(" ");
}

list = list.replace(/^\s+|\s+$/g, '').replace(/ {1,}/g," ");
list = list.split(" ").sort();

for (i = 0; i < list.length; i++) {
	console.log(list[i]);
}
