
/**
Constructor
Do not call Function in Constructor.
*/
function SubView1()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(SubView1, AView);


SubView1.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

SubView1.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

SubView1.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
