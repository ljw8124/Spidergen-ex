
/**
Constructor
Do not call Function in Constructor.
*/
function ChatView2()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(ChatView2, AView);


ChatView2.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

ChatView2.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

ChatView2.prototype.setData = function(data)
{

	this.content.setText(data.sendContent);

};
