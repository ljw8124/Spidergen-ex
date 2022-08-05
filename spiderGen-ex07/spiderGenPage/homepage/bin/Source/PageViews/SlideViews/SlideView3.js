
/**
Constructor
Do not call Function in Constructor.
*/
function SlideView3()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(SlideView3, AView);


SlideView3.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

SlideView3.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

SlideView3.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

SlideView3.prototype.onTo1BtnClick = function(comp, info, e)
{

	this.owner.slideTo(0);

};

SlideView3.prototype.onTo2BtnClick = function(comp, info, e)
{

	this.owner.slideTo(1);

};
