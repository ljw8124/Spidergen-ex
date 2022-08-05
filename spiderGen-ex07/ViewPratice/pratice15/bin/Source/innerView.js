
/**
Constructor
Do not call Function in Constructor.
*/
function innerView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(innerView, AView);


innerView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

innerView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

innerView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

innerView.prototype.onAButton1Click = function(comp, info, e)
{
	AToast.show('클릭1');

};

innerView.prototype.onAButton2Click = function(comp, info, e)
{
	AToast.show('클릭2');
};
