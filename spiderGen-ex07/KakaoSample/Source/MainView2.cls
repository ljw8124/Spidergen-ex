
/**
Constructor
Do not call Function in Constructor.
*/
class MainView2()
{
	super();

	//TODO:edit here

}
extends AView;


function MainView2*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function MainView2*onInitDone()
{
	super.onInitDone();

	//탭 정보 추가
	this.tabView.addTab('탭1', 'Source/TabViews/TabView1.lay', 'tab1');
	this.tabView.addTab('탭2', 'Source/TabViews/TabView2.lay', 'tab2');
	
	//기본적으로 첫번째 탭이 선택되도록
	this.tabView.selectTabById('tab1');
};


function MainView2*onToFriendBtnClick(comp, info, e)
{

	this.tabView.selectTabById('tab1');

};

function MainView2*onToChatBtnClick(comp, info, e)
{

	this.tabView.selectTabById('tab2');

};
