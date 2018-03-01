var ChatView = function (model) {
	this.model = model;

	this.emojis = new EmojiService();

	this.addMessageEvent = new Event(this);
	this.changeTypingEvent = new Event(this);

	this.init();
};

ChatView.prototype = {
	
	init: function () {
		this.createChildren()
			.setupHandlers()
			.enable();
	},

	createChildren: function () {
		this.$container = $('.js-chat');
		this.$chatBody = this.$container.find('.chat__body');
		this.$chatInner = this.$container.find('.chat__inner');
		this.$addMessageButton = this.$container.find('.js-chat__submit');
		this.$messageInput = this.$container.find('.js-chat__input');
		this.$messagesContainer = this.$container.find('.js-chat__messenger');
		this.$typerContainer = this.$container.find('.js-chat__typer');

		this.$message = '.js-chat__message';

		this.$messageTemplate = $('#chat__message').clone();
		this.$messageTemplateMessage = this.$messageTemplate.find('.js-chat__message');
		this.$messageTemplateBubble = this.$messageTemplate.find('.js-chat__bubble');
		this.$messageTemplateAvatar = this.$messageTemplate.find('.js-chat__avatar');
		this.$messageSelfClass = 'chat__message--right';

		this.$typingTemplate = $('#chat__typing').clone();
		this.$typingTemplateMessage = this.$typingTemplate.find('.js-chat__message');
		this.$typingTemplateBubble = this.$typingTemplate.find('.js-chat__bubble');
		this.$typingTemplateAvatar = this.$typingTemplate.find('.js-chat__avatar');

		this.$emojiTemplate = $('#chat__emoji').clone();
		this.$emojiTemplateEmoji = this.$emojiTemplate.find('.js-chat__emoji');

		return this;
	},

	setupHandlers: function () {
		this.addMessageButtonHandler = this.addMessageButton.bind(this);
		this.handleKeyupsHandler = this.handleKeyups.bind(this);
		this.clearMessageInputHandler = this.clearMessageInput.bind(this);
		this.addMessageHandler = this.show.bind(this);
		this.changeTypingHandler = this.changeTyping.bind(this);
		this.scrollChatHandler = this.scrollChatBody.bind(this);

		return this;
	},

	enable: function () {
		this.$addMessageButton.click(this.addMessageButtonHandler);
		this.$messageInput.keyup(this.handleKeyupsHandler);
		this.model.addMessageEvent.attach(this.addMessageHandler);
		this.model.addMessageEvent.attach(this.scrollChatHandler);
		this.model.changeTypingEvent.attach(this.changeTypingHandler);
		this.model.changeTypingEvent.attach(this.scrollChatHandler);

		return this;
	},

	addMessageButton: function () {
		this.addMessageEvent.notify({
			message: this.$messageInput.val(),
			author: 'self'
		});
		this.clearMessageInput();
	},

	show: function () {
		this.buildMessageList();
		this.buildTypingList();
	},

	buildMessageList: function () {
		var messages = this.model.getMessages();
		var html = '';
		var authorClass = this.$messageSelfClass;
		var authorAvatar = '';

		this.$messagesContainer.html('');

		for (var message in messages) {
			if (messages[message].author === 'self') {
				this.$messageTemplateMessage.addClass(authorClass);
			}
			else {
				this.$messageTemplateMessage.removeClass(authorClass);
			}
			this.$messageTemplateAvatar.find('img').attr('src', 'img/' + this.getAvatar(messages[message].author));
			this.$messageTemplateBubble.html(this.parseEmojis(messages[message].message));
			html += this.$messageTemplate.html();
		}

		this.$messagesContainer.append(html);
	},

	buildTypingList: function () {
		var typing = this.model.getUsers();
		var html = '';
		var authorClass = this.$messageSelfClass;
		var authorAvatar = '';

		this.$typerContainer.html('');
		
		for (var user in typing) {
			if (typing[user].name === 'self') {
				this.$typingTemplateMessage.addClass(authorClass);
			}
			else {
				this.$typingTemplateMessage.removeClass(authorClass);
			}
			if (typing[user].isTyping) {
				var typingDate = typing[user].typingDate;
				var typingId = typingDate.getFullYear().toString() + (typingDate.getMonth() + 1).toString() + typingDate.getDate().toString() + typingDate.getHours().toString() + typingDate.getMinutes().toString() + typingDate.getSeconds().toString() + typingDate.getMilliseconds().toString();
				this.$typingTemplateMessage.attr({
					'data-author': typing[user].name,
					'data-id': typingId
				});
				this.$typingTemplateAvatar.find('img').attr('src', 'img/' + this.getAvatar(typing[user].name));
				html += this.$typingTemplate.html();
			}
			else {
				$(this.$message).filter('[data-author="' + typing[user].name + '"]').remove();
			}
		}

		this.$typerContainer.html(html);

		this.sortListByAttr(this.$typerContainer, this.$message, 'data-id');
	},

	sortListByAttr: function(list, children, attr) {
		var item = list.find(children).remove();
		item.sort(function(a, b) {
			return parseInt($(a).attr(attr)) > parseInt($(b).attr(attr));
		});
		list.append(item);
	},

	getAvatar: function (username) {
		return username === 'self' ? 'avatar2.jpg' : 'avatar.jpg';
	},

	parseEmojis: function (message) {
		var emojis = this.emojis.getEmojis();
		var regex = '';
		var parsedMessage = message;
		for (var emoji in emojis) {
			regex = new RegExp(ChatHelper.escapeRegExp(emoji), 'g');
			this.$emojiTemplateEmoji.attr({
				'src': 'img/emojis/' + emojis[emoji],
				'title': emoji
			});
			parsedMessage = parsedMessage.replace(regex, '&nbsp;' + this.$emojiTemplateEmoji[0].outerHTML);
		}
		return ChatHelper.trimNonBreakableSpaces(parsedMessage);
	},

	clearMessageInput: function () {
		this.$messageInput.val('');
		this.changeTypingEvent.notify({
			author: 'self',
			isTyping: false
		});
	},

	handleKeyups: function (event) {
		if (event.keyCode === 13) {
			this.addMessageButton();
			return;
		}
		if (this.$messageInput.val() !== '') {
			this.changeTypingEvent.notify({
				author: 'self',
				isTyping: true
			});
		}
	},

	changeTyping:  function () {
		this.show();
	},

	scrollChatBody: function () {
		this.$chatBody.animate({
			scrollTop: this.$chatInner.height()
		}, 0);
	}

};
