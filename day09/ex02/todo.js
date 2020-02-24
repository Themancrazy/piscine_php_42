function removeif(elem) {
	var cookie = document.cookie;

	if (confirm("Are you sure ?")) {
		var split = cookie.match("ft_list=(.*);")[1].split("%2C");

		var newCookie = [];
		for (var i = 0; i < split.length; i++) {
			if (split[i] != elem.innerHTML)
				newCookie.push(split[i]);
		}
		document.cookie = "ft_list=" + escape(newCookie) + ";";
		elem.remove();
	}
}

function newStuff(string, ft_list) {
	var elem = document.createElement('div');

	elem.innerHTML = string;
	elem.setAttribute("onclick", "removeif(this)")
	elem.setAttribute("class", "todo")
	ft_list.insertBefore(elem, ft_list.firstChild);
}

function setCookie(value) {
	var cookie = document.cookie;
	var data = cookie.match("ft_list=(.*);");

	if (!data || !data[1])
		document.cookie = "ft_list=" + escape(value) + ";";
	else {
		var split = data[1].split("%2C");
		split.push(value);
	  document.cookie = "ft_list=" + escape(split) + ";";
	}
}

function getCookie() {
	var cookie = document.cookie;
	var data = cookie.match("ft_list=(.*);");

	if (data && data[1]) {
		var split = data.split("%2C");
		for (var i = 0; i < split.length; i++) {
			newStuff(split[i], ft_list);
		}
	}
}

document.addEventListener('DOMContentLoaded', function() {
	newButton = this.getElementById('newButton');
	ft_list = this.getElementById('ft_list');

	getCookie();

	newButton.addEventListener('click', function() {
		var textBox = prompt("What do you want to add ?");

		if (textBox && textBox != "") {
			newStuff(textBox, ft_list);
			setCookie(textBox);
		}
	});
});