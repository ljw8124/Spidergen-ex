
/**
Constructor
Do not call Function in Constructor.
*/
class ScrollManagerSampleView()
{
	super();
}
extends AView;


function ScrollManagerSampleView*onInitDone()
{
	var data = [];
	
	//listView 에 추가
	for(var i = 0; i < 40; i++)
	{
		data.push(i);
	}
	this.testListView.addItem('Source/subviews/subview1.lay', data);
	
	//grid에 추가
	for(var j = 0; j < 50; j++)
	{
		this.testGrid.addRow([j + 1, j + 2, j + 3]);
	}
};

function ScrollManagerSampleView*onBackBtnClick(comp, info, e)
{
	this.getContainer().navigator.goPrevPage();
};

function ScrollManagerSampleView*onListEnableBtnClick(comp, info, e)
{
	this.testListView.enableScrlManager();
};

function ScrollManagerSampleView*onGridEnableBtnClick(comp, info, e)
{
	this.testGrid.enableScrlManager();
};
