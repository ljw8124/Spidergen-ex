
/**
Constructor
Do not call Function in Constructor.
*/
function TestAutoSizeView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(TestAutoSizeView, AView);


TestAutoSizeView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

TestAutoSizeView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

TestAutoSizeView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
