
/**
Constructor
Do not call Function in Constructor.
*/
class ChatView2()
{
	super();

	//TODO:edit here

}
extends AView;


function ChatView2*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function ChatView2*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function ChatView2*setData(data)
{

	this.content.setText(data.sendContent);

};
