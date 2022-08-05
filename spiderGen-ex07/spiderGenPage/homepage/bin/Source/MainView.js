
/**
Constructor
Do not call Function in Constructor.
*/
function MainView()
{
	AView.call(this);
}
afc.extendsClass(MainView, AView);


MainView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

};

MainView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
	
	//탭 정보 추가
	
	this.tabView.addTab('탭1', 'Source/PageViews/SubView1.lay', 'tab1');
	this.tabView.addTab('탭2', 'Source/PageViews/SubView2.lay', 'tab2');
	this.tabView.addTab('탭3', 'Source/PageViews/SubView3.lay', 'tab3');
	this.tabView.addTab('탭4', 'Source/PageViews/SubView4.lay', 'tab4');
	this.tabView.addTab('탭5', 'Source/PageViews/EmptyView.lay', 'tab5');
	
	//default 세팅
	this.tabView.selectTabById('tab1');
	

};

MainView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);


};

MainView.prototype.onSubView1BtnClick = function(comp, info, e)
{

	this.tabView.selectTabById('tab1');
	
};

MainView.prototype.onSubView2BtnClick = function(comp, info, e)
{

	this.tabView.selectTabById('tab2');

};

MainView.prototype.onSubView3BtnClick = function(comp, info, e)
{

	this.tabView.selectTabById('tab3');

};

MainView.prototype.onSubView4BtnClick = function(comp, info, e)
{

	this.tabView.selectTabById('tab4');

};

MainView.prototype.onSubView5Click = function(comp, info, e)
{

	var wnd = new AWindow('loginPage');
	
	wnd.setWindowOption({
		isModal: true,
		isCenter: true,
		modalBgOption : 'dark'
	});
	
	wnd.setResultListener(this);
	
	wnd.open("Source/PageViews/SubView5.lay", null, 'center', 100, 420, 400);

};

MainView.prototype.onEmptyBtnClick = function(comp, info, e)
{

	this.tabView.selectTabById('tab5');

};
