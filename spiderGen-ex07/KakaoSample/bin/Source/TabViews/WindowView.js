
/**
Constructor
Do not call Function in Constructor.
*/
function WindowView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(WindowView, AView);


WindowView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	this.sendData =
	[
		{sendContent: 'hello world'}
	];
	
	this.getData =
	[
		{getContent: 'good bye world'}
	];
	

};

WindowView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
	
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

WindowView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

WindowView.prototype.onToListBtnClick = function(comp, info, e)
{

	this.getContainer().close();

};

WindowView.prototype.onMsgSendBtnClick = function(comp, info, e)
{
	var sendMsg = this.sendTextField.getText();
	
	var newData = [ {sendContent: sendMsg} ];
	
	this.chatView.addItem('Source/TabViews/ListViews/chatView2.lay', newData);

};
