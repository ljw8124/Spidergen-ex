
/**
Constructor
Do not call Function in Constructor.
*/
class SlideView2()
{
	super();

	//TODO:edit here

}
extends AView;


function SlideView2*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function SlideView2*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function SlideView2*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

function SlideView2*onPrevBtnClick(comp, info, e)
{
	console.log(this.owner);
	//this.owner.slidePrev();
	this.owner.slideTo(0);

};

function SlideView2*onNextBtnClick(comp, info, e)
{

	this.owner.slideTo(2);

};
