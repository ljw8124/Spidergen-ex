
/**
Constructor
Do not call Function in Constructor.
*/
function TabView2()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(TabView2, AView);


TabView2.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

TabView2.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

TabView2.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
