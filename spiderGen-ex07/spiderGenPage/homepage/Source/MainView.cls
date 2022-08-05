
/**
Constructor
Do not call Function in Constructor.
*/
class MainView()
{
	super();
}
extends AView;


function MainView*init(context, evtListener)
{
	super.init(context, evtListener);

};

function MainView*onInitDone()
{
	super.onInitDone();
	
	//탭 정보 추가
	
	this.tabView.addTab('탭1', 'Source/PageViews/SubView1.lay', 'tab1');
	this.tabView.addTab('탭2', 'Source/PageViews/SubView2.lay', 'tab2');
	this.tabView.addTab('탭3', 'Source/PageViews/SubView3.lay', 'tab3');
	this.tabView.addTab('탭4', 'Source/PageViews/SubView4.lay', 'tab4');
	this.tabView.addTab('탭5', 'Source/PageViews/EmptyView.lay', 'tab5');
	
	//default 세팅
	this.tabView.selectTabById('tab1');
	

};

function MainView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);


};

function MainView*onSubView1BtnClick(comp, info, e)
{

	this.tabView.selectTabById('tab1');
	
};

function MainView*onSubView2BtnClick(comp, info, e)
{

	this.tabView.selectTabById('tab2');

};

function MainView*onSubView3BtnClick(comp, info, e)
{

	this.tabView.selectTabById('tab3');

};

function MainView*onSubView4BtnClick(comp, info, e)
{

	this.tabView.selectTabById('tab4');

};

function MainView*onSubView5Click(comp, info, e)
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

function MainView*onEmptyBtnClick(comp, info, e)
{

	this.tabView.selectTabById('tab5');

};
