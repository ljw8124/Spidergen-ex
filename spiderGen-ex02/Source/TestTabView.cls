
/**
Constructor
Do not call Function in Constructor.
*/
class TestTabView()
{
	super();

	//TODO:edit here

}
extends AView;


function TestTabView*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

//Component 접근 위치 
function TestTabView*onInitDone()
{
	super.onInitDone();
	
	this.tabView.addTab('탭1', 'Source/items/Subview1.lay', 'tab1');
	this.tabView.addTab('탭2', 'Source/items/Subview2.lay', 'tab2');
	this.tabView.addTab('탭3', 'Source/items/Subview3.lay', 'tab3');
	
	
	//default 뷰 설정
	this.tabView.selectTabById('tab2');
	

	//TODO:edit here

};

function TestTabView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};
