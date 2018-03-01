var ChatHelper = function () {

	var getRandomInt = function(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	var escapeRegExp = function(string) {
		return string.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
	};

	var trimNonBreakableSpaces = function(string) {
		return string.replace(/(?:^(?:&nbsp;)+)|(?:(?:&nbsp;)+$)/g, '');
	};

	var capitalizeSentence = function(string) {
		return string.replace(/.+?[\.\?\!](\s|$)/g, function (text) {
			return string.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
		});
	};

	return {
		getRandomInt: function(min, max) {
			return getRandomInt(min, max);
		},
		escapeRegExp: function(string) {
			return escapeRegExp(string);
		},
		trimNonBreakableSpaces: function(string) {
			return trimNonBreakableSpaces(string);
		},
		capitalizeSentence: function(string) {
			return capitalizeSentence(string);
		}
	}

}()
