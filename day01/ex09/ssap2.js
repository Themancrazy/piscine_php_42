// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   ssap2.js                                           :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: anjansse <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2019/03/25 15:55:23 by anjansse          #+#    #+#             //
//   Updated: 2019/03/27 22:40:39 by anjansse         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

function ft_split(str) {
	var string = str.toString();
	string = string.trim();
	var res = string.split(/\s+/g);
	res = res.sort();
	return (res);
}

var argc = process.argv.length;

if (argc < 3)
	return ;

var res = process.argv.slice(2, argc);
var k = 1;
var tab = ft_split(res[0]);
while (k < argc - 2)
{
	tab = tab.concat(ft_split(res[k]));
	k++;
}

tab = tab.sort(function (a,b) {
	var i = 0;
	while (i < a.length && i < b.length)
	{
		if (a[i] != b[i])
		{
			if (a[i].match(/[a-zA-Z]/) && !b[i].match(/[a-zA-Z]/))
				return (-1);
			if (!a[i].match(/[a-zA-Z]/) && b[i].match(/[a-zA-Z]/))
				return (1);

			if (a[i].match(/[0-9]/) && !b[i].match(/[0-9]/))
				return (-1);
			if (!a[i].match(/[0-9]/) && b[i].match(/[0-9]/))
				return (1);

			if (a[i].toLowerCase() >= b[i].toLowerCase())
				return (1)
			return (-1)
		}
		i++;
	}
	return (0);
});

var j = 0;
while (j < tab.length)
{
	console.log(tab[j]);
	j++;
}
