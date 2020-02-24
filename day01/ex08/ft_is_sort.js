// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   ft_is_sort.js                                            :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: anjansse <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2019/03/25 10:53:45 by anjansse          #+#    #+#             //
//   Updated: 2019/03/25 14:06:33 by anjansse         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

function ft_is_sort(array) {
	var tmp = array.slice(0);
	tmp = tmp.sort();
	for (i = 0; i < tmp.length - 1; i++) {
		if (array[i] != tmp[i])
			return (0);
	}
	return (1);
}

var test = ["aaa", "yyy", "zzz"];

if (ft_is_sort(test))
	console.log("The array is sorted.");
else if (ft_is_sort(test) == 0)
	console.log("The array isn't sorted");
