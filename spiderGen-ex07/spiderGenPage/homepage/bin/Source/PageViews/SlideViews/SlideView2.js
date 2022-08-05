
/**
Constructor
Do not call Function in Constructor.
*/
function SlideView2()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(SlideView2, AView);


SlideView2.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

SlideView2.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

SlideView2.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

SlideView2.prototype.onPrevBtnClick = function(comp, info, e)
{
	console.log(this.owner);
	//this.owner.slidePrev();
	this.owner.slideTo(0);

};

SlideView2.prototype.onNextBtnClick = function(comp, info, e)
{

	this.owner.slideTo(2);

};
