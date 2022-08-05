
/**
Constructor
Do not call Function in Constructor.
*/
function SubView4()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(SubView4, AView);


SubView4.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

SubView4.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

SubView4.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
