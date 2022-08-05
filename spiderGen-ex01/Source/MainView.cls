
/**
Constructor
Do not call Function in Constructor.
*/
class MainView()
{
	super();

	//TODO:edit here

}
extends AView;


function MainView*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function MainView*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function MainView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

function MainView*onAButton1Click(comp, info, e)
{

	//TODO:edit here
	alert('Hello Wolrd!!');

};

function MainView*onAButton2Click(comp, info, e)
{

	//TODO:edit here
	
	//ID 부여 한 경우
	this.testLbl.setText('Hello Label!');
	
	console.log('Hello Label!!')

};
