
/**
Constructor
Do not call Function in Constructor.
*/
function MainView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(MainView, AView);


MainView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

MainView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

MainView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

MainView.prototype.onAButton1Click = function(comp, info, e)
{

	//TODO:edit here
	alert('Hello Wolrd!!');

};

MainView.prototype.onAButton2Click = function(comp, info, e)
{

	//TODO:edit here
	
	//ID 부여 한 경우
	this.testLbl.setText('Hello Label!');
	
	console.log('Hello Label!!')

};
