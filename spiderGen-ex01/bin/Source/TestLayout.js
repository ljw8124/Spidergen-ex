
/**
Constructor
Do not call Function in Constructor.
*/
function TestLayout()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(TestLayout, AView);


TestLayout.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

TestLayout.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

TestLayout.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
