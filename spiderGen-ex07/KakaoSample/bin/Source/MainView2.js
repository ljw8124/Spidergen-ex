
/**
Constructor
Do not call Function in Constructor.
*/
function MainView2()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(MainView2, AView);


MainView2.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

MainView2.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//탭 정보 추가
	this.tabView.addTab('탭1', 'Source/TabViews/TabView1.lay', 'tab1');
	this.tabView.addTab('탭2', 'Source/TabViews/TabView2.lay', 'tab2');
	
	//기본적으로 첫번째 탭이 선택되도록
	this.tabView.selectTabById('tab1');
};


MainView2.prototype.onToFriendBtnClick = function(comp, info, e)
{

	this.tabView.selectTabById('tab1');

};

MainView2.prototype.onToChatBtnClick = function(comp, info, e)
{

	this.tabView.selectTabById('tab2');

};
