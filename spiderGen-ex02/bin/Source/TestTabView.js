
/**
Constructor
Do not call Function in Constructor.
*/
function TestTabView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(TestTabView, AView);


TestTabView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

//Component 접근 위치 
TestTabView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
	
	this.tabView.addTab('탭1', 'Source/items/Subview1.lay', 'tab1');
	this.tabView.addTab('탭2', 'Source/items/Subview2.lay', 'tab2');
	this.tabView.addTab('탭3', 'Source/items/Subview3.lay', 'tab3');
	
	
	//default 뷰 설정
	this.tabView.selectTabById('tab2');
	

	//TODO:edit here

};

TestTabView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
