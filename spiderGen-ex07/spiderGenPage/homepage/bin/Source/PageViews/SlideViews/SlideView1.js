
/**
Constructor
Do not call Function in Constructor.
*/
function SlideView1()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(SlideView1, AView);


SlideView1.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

SlideView1.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
	
	//TODO:edit here

};

SlideView1.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};


SlideView1.prototype.onTo2BtnClick = function(comp, info, e)
{

	this.owner.slideTo(1);

};

SlideView1.prototype.onTo3BtnClick = function(comp, info, e)
{

	this.owner.slideTo(2);

};
