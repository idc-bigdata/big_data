var EmojiService = function () {
	this.emojis = {
		':)': 'emoji_u1f60a.svg',
		';)': 'emoji_u1f60b.svg',
		':(': 'emoji_u1f61e.svg',
		':o': 'emoji_u1f62e.svg',
		'B)': 'emoji_u1f60e.svg',
		':smug:': 'emoji_u1f60f.svg',
		':*': 'emoji_u1f61a.svg',
		':P': 'emoji_u1f61b.svg',
		':\'(': 'emoji_u1f62d.svg'
	};
};

EmojiService.prototype = {

	getEmojis: function () {
		return this.emojis;
	}

};
