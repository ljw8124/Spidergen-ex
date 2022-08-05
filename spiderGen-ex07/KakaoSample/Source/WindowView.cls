
/**
Constructor
Do not call Function in Constructor.
*/
class WindowView()
{
	super();

	//TODO:edit here

}
extends AView;


function WindowView*init(context, evtListener)
{
	super.init(context, evtListener);

	this.sendData =
	[
		{sendContent: 'hello world'}
	];
	
	this.getData =
	[
		{getContent: 'good bye world'}
	];
	

};

function WindowView*onInitDone()
{
	super.onInitDone();
	
	this.chatView.addItem('Source/TabViews/ListViews/chatView2.lay', this.sendData);
	
	this.chatView.addItem('Source/TabViews/ListViews/chatView1.lay', this.getData);
	
	var newSendData =
	[
		{sendContent: 'welcome world'}
	];
	
	this.chatView.addItem('Source/TabViews/ListViews/chatView2.lay', newSendData);
	
	
	var newGetData =
	[
		{getContent: '잘가라라라랄'}
	];
	
	this.chatView.addItem('Source/TabViews/ListViews/chatView1.lay', newGetData);
	
};

function WindowView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

function WindowView*onToListBtnClick(comp, info, e)
{

	this.getContainer().close();

};

function WindowView*onMsgSendBtnClick(comp, info, e)
{
	var sendMsg = this.sendTextField.getText();
	
	var newData = [ {sendContent: sendMsg} ];
	
	this.chatView.addItem('Source/TabViews/ListViews/chatView2.lay', newData);

};
