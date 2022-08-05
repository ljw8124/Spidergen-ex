
/**
Constructor
Do not call Function in Constructor.
*/
class innerView()
{
	super();

	//TODO:edit here

}
extends AView;


function innerView*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function innerView*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function innerView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

function innerView*onAButton1Click(comp, info, e)
{
	AToast.show('클릭1');

};

function innerView*onAButton2Click(comp, info, e)
{
	AToast.show('클릭2');
};
