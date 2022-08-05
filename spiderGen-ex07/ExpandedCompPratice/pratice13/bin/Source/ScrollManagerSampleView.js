
/**
Constructor
Do not call Function in Constructor.
*/
function ScrollManagerSampleView()
{
	AView.call(this);
}
afc.extendsClass(ScrollManagerSampleView, AView);


ScrollManagerSampleView.prototype.onInitDone = function()
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

ScrollManagerSampleView.prototype.onBackBtnClick = function(comp, info, e)
{
	this.getContainer().navigator.goPrevPage();
};

ScrollManagerSampleView.prototype.onListEnableBtnClick = function(comp, info, e)
{
	this.testListView.enableScrlManager();
};

ScrollManagerSampleView.prototype.onGridEnableBtnClick = function(comp, info, e)
{
	this.testGrid.enableScrlManager();
};
