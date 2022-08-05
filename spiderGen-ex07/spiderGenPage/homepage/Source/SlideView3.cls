
/**
Constructor
Do not call Function in Constructor.
*/
class SlideView3()
{
	super();

	//TODO:edit here

}
extends AView;


function SlideView3*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function SlideView3*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function SlideView3*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

function SlideView3*onTo1BtnClick(comp, info, e)
{

	this.owner.slideTo(0);

};

function SlideView3*onTo2BtnClick(comp, info, e)
{

	this.owner.slideTo(1);

};
