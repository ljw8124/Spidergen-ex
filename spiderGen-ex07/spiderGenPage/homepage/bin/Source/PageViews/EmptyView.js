
/**
Constructor
Do not call Function in Constructor.
*/
function EmptyView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(EmptyView, AView);


EmptyView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

EmptyView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

EmptyView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
