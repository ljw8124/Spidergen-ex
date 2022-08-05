
/**
Constructor
Do not call Function in Constructor.
*/
function TabView1()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(TabView1, AView);


TabView1.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

TabView1.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

TabView1.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
