
/**
Constructor
Do not call Function in Constructor.
*/
function TestTamplate()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(TestTamplate, AView);


TestTamplate.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

TestTamplate.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

TestTamplate.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
