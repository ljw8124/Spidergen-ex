
/**
Constructor
Do not call Function in Constructor.
*/
function Subview3()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(Subview3, AView);


Subview3.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

Subview3.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

Subview3.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

Subview3.prototype.onAButton1Click = function(comp, info, e)
{
	//동적으로  접근 가능
	this.owner.selectTabById('tab1');

};
