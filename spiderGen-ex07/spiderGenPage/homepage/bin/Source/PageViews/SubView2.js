
/**
Constructor
Do not call Function in Constructor.
*/
function SubView2()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(SubView2, AView);


SubView2.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

SubView2.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

SubView2.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
