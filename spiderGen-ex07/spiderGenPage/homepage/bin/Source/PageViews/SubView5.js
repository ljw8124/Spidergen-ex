
/**
Constructor
Do not call Function in Constructor.
*/
function SubView5()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(SubView5, AView);


SubView5.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

SubView5.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

SubView5.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

SubView5.prototype.onHideBtnClick = function(comp, info, e)
{

	this.getContainer().close();

};
