
/**
Constructor
Do not call Function in Constructor.
*/
function RBMSampleView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(RBMSampleView, AView);


RBMSampleView.prototype.onInitDone = function()
{
	this.rbm = new RadioBtnManager(this);
	
	//현재 선택되어져 있는 버튼 얻어오기
	//var btn = this.rbm .getSelectButton();
	
	//두번째 버튼을 선택된 상태로 셋팅
	this.onTabClick(this.tab2);
};

RBMSampleView.prototype.onTabClick = function(comp, info, e)
{
	this.rbm.selectButton(comp);
	
	//this.textTabview.selectTabById(comp.getComponentId());
	this.testTabview.selectTabById(comp.getComponentId());
};

RBMSampleView.prototype.onBackBtnClick = function(comp, info, e)
{
	this.getContainer().navigator.goPrevPage();
};
