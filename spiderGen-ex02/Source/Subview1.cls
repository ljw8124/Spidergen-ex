
/**
Constructor
Do not call Function in Constructor.
*/
class Subview1()
{
	super();

	//TODO:edit here

}
extends AView;


function Subview1*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function Subview1*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

//활성화 시마다 실행
function Subview1*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

 
 	//AToast.show('Hello World!');
	AToast.show('Hello World!');
};

//반대로 비활성화
function Subview1*onDeactiveDone()
{
	super.onDeactiveDone();
	
	this.text.setText('');
	

	

};