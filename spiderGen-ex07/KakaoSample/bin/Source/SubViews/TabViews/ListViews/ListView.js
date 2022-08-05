
/**
Constructor
Do not call Function in Constructor.
*/
function ListView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(ListView, AView);


ListView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

ListView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

ListView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
