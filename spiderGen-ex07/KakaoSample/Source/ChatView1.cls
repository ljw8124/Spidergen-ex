
/**
Constructor
Do not call Function in Constructor.
*/
class ChatView1()
{
	super();

	//TODO:edit here

}
extends AView;


function ChatView1*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function ChatView1*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function ChatView1*setData(data)
{
	
	this.content.setText(data.getContent);

};
