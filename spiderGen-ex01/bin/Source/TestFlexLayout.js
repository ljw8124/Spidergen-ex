
/**
Constructor
Do not call Function in Constructor.
*/
function TestFlexLayout()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(TestFlexLayout, AView);


TestFlexLayout.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

TestFlexLayout.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

TestFlexLayout.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
