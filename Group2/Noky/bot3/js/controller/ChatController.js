var ChatController = function (model, view) {
	this.model = model;
	this.view = view;

	this.botTyping;
	this.botSentences = new SentenceService();

	this.botDoneReadingEvent = new Event(this);
	this.botDoneTypingEvent = new Event(this);

	this.init();
};

ChatController.prototype = {

	init: function () {
		this.setupHandlers()
			.enable();
	},

	setupHandlers: function () {
		this.addMessageHandler = this.addMessage.bind(this);
		this.changeTypingHandler = this.changeTyping.bind(this);
		this.makeBotReadHandler = this.makeBotRead.bind(this);
		this.makeBotTypeHandler = this.makeBotType.bind(this);
		this.makeBotAnswerHandler = this.addMessage.bind(this);
		return this;
	},

	enable: function () {
		this.view.addMessageEvent.attach(this.addMessageHandler);
		this.view.changeTypingEvent.attach(this.changeTypingHandler);
		this.model.addMessageEvent.attach(this.makeBotReadHandler);
		this.botDoneReadingEvent.attach(this.makeBotTypeHandler);
		this.botDoneTypingEvent.attach(this.makeBotAnswerHandler);
		return this;
	},

	addMessage: function (sender, args) {
		this.model.addMessage(args.message, args.author);
	},

	changeTyping: function (sender, args) {
		this.model.setUserTyping(args.author, args.isTyping)
	},

	makeBotType: function() {
		clearTimeout(this.botTyping);
		var that = this;
		var user = 'bot';
		var message = this.botSentences.getSentence();
		that.model.setUserTyping(user, true);
		this.botTyping = setTimeout(function() {
			that.botDoneTypingEvent.notify({
				message: message,
				author: user
			});
			that.model.setUserTyping(user, false);
		}, message.split(' ').length * that.model.getBotTypingRate());
	},

	makeBotRead: function() {
		var that = this;
		var latestEntry = this.model.getLatestEntry();
		if (latestEntry.author === 'self') {
			setTimeout(function() {
				that.botDoneReadingEvent.notify();
			}, latestEntry.message.split(' ').length * that.model.getBotReadingRate());
		}
	}

};
