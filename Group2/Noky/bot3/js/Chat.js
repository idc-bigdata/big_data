$(function() {
	var model = new ChatModel(),
		view = new ChatView(model),
		controller = new ChatController(model, view);
});
