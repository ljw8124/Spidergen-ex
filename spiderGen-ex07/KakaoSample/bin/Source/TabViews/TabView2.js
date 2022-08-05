
/**
Constructor
Do not call Function in Constructor.
*/
function TabView2()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(TabView2, AView);


TabView2.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	this.listData =
	[
		 {img: 'Assets/images/기본프로필.png', name: '이정우', message: '테스트입니다......'},
		 {img: 'Assets/images/기본프로필.png', name: '김민수', message: '테스트입니다......'}
	];

};

TabView2.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	this.chatList.addItem('Source/TabViews/ListViews/ListView.lay', this.listData);

};

TabView2.prototype.onChatListSelect = function(comp, info, e)
{

	var wnd = new AWindow('toChatView');
	wnd.openFull('Source/TabViews/WindowView.lay');
	
};
