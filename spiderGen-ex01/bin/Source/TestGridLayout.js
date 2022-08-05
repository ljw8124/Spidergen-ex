
/**
Constructor
Do not call Function in Constructor.
*/
function TestGridLayout()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(TestGridLayout, AView);


TestGridLayout.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

TestGridLayout.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

TestGridLayout.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
