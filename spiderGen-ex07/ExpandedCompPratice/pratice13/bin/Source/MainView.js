
/**
Constructor
Do not call Function in Constructor.
*/
function MainView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(MainView, AView);


MainView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
};

MainView.prototype.onMenuBtnClick = function(comp, info, e)
{
	//console.log(comp.getComponentId());
	this.getContainer().navigator.goPage(comp.getComponentId());
};
