
/**
Constructor
Do not call Function in Constructor.
*/
function SubView1()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(SubView1, AView);


SubView1.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

SubView1.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
	
	//여러종류의 뷰를 하나씩 추가, 배열의 개수만큼 추가되므로 기본세팅 필요
	this.slideView.addItem('Source/PageViews/SlideViews/SlideView1.lay', [1]);
	this.slideView.addItem('Source/PageViews/SlideViews/SlideView2.lay', [2]);
	this.slideView.addItem('Source/PageViews/SlideViews/SlideView3.lay', [3]);
	
};

SubView1.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

SubView1.prototype.onPrevBtnClick = function(comp, info, e)
{
	this.slideView.slidePrev();
};

SubView1.prototype.onNextBtnClick = function(comp, info, e)
{
	this.slideView.slideNext();

};


