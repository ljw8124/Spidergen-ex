
/**
Constructor
Do not call Function in Constructor.
*/
class Subview3()
{
	super();

	//TODO:edit here

}
extends AView;


function Subview3*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function Subview3*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function Subview3*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

function Subview3*onAButton1Click(comp, info, e)
{
	//동적으로  접근 가능
	this.owner.selectTabById('tab1');

};
