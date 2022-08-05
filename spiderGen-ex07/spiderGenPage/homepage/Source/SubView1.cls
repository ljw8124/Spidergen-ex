
/**
Constructor
Do not call Function in Constructor.
*/
class SubView1()
{
	super();

	//TODO:edit here

}
extends AView;


function SubView1*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function SubView1*onInitDone()
{
	super.onInitDone();
	
	//여러종류의 뷰를 하나씩 추가, 배열의 개수만큼 추가되므로 기본세팅 필요
	this.slideView.addItem('Source/PageViews/SlideViews/SlideView1.lay', [1]);
	this.slideView.addItem('Source/PageViews/SlideViews/SlideView2.lay', [2]);
	this.slideView.addItem('Source/PageViews/SlideViews/SlideView3.lay', [3]);
	
};

function SubView1*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

function SubView1*onPrevBtnClick(comp, info, e)
{
	this.slideView.slidePrev();
};

function SubView1*onNextBtnClick(comp, info, e)
{
	this.slideView.slideNext();

};


