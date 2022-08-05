
/**
Constructor
Do not call Function in Constructor.
*/
class SlideView1()
{
	super();

	//TODO:edit here

}
extends AView;


function SlideView1*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function SlideView1*onInitDone()
{
	super.onInitDone();
	
	//TODO:edit here

};

function SlideView1*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};


function SlideView1*onTo2BtnClick(comp, info, e)
{

	this.owner.slideTo(1);

};

function SlideView1*onTo3BtnClick(comp, info, e)
{

	this.owner.slideTo(2);

};
