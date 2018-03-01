var ChatModel = function () {
	this.messages = [];
	this.typing = [];
	this.users = {
		self: {
			name: 'self',
			isTyping: false,
			typingDate: null
		},
		bot: {
			name: 'bot',
			isTyping: false,
			typingDate: null,
			typingRate: 500,
			readingRate: 300
		}
	}
	this.addMessageEvent = new Event(this);
	this.changeTypingEvent = new Event(this);
};

ChatModel.prototype = {

	addMessage: function (message, author) {
		if (message.trim() !== '' && author.trim() !== '') {
			this.messages.push({
				message: message,
				author: author
			});
			this.addMessageEvent.notify();
		}
	},

	getTyping: function () {
		return this.typing;
	},

	getMessages: function () {
		return this.messages;
	},

	getUsers: function () {
		return this.users;
	},

	setUserTyping: function (user, isTyping, date) {
		if (isTyping !== this.users[user].isTyping) {
			this.users[user].typingDate = new Date;
		}
		this.users[user].isTyping = isTyping;
		this.changeTypingEvent.notify();
	},

	getBotTypingRate: function () {
		return this.users.bot.typingRate;
	},

	getBotReadingRate: function () {
		return this.users.bot.readingRate;
	},

	getLatestEntry: function () {
		var messages = this.getMessages();
		return messages[messages.length - 1];
	}

};
