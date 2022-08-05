
/**
Constructor
Do not call Function in Constructor.
*/
function ChatView1()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(ChatView1, AView);


ChatView1.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

ChatView1.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

ChatView1.prototype.setData = function(data)
{
	
	this.content.setText(data.getContent);

};
