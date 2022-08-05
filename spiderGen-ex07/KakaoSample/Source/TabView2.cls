
/**
Constructor
Do not call Function in Constructor.
*/
class TabView2()
{
	super();

	//TODO:edit here

}
extends AView;


function TabView2*init(context, evtListener)
{
	super.init(context, evtListener);

	this.listData =
	[
		 {img: 'Assets/images/기본프로필.png', name: '이정우', message: '테스트입니다......'},
		 {img: 'Assets/images/기본프로필.png', name: '김민수', message: '테스트입니다......'}
	];

};

function TabView2*onInitDone()
{
	super.onInitDone();

	this.chatList.addItem('Source/TabViews/ListViews/ListView.lay', this.listData);

};

function TabView2*onChatListSelect(comp, info, e)
{

	var wnd = new AWindow('toChatView');
	wnd.openFull('Source/TabViews/WindowView.lay');
	
};
