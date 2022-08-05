
/**
Constructor
Do not call Function in Constructor.
*/
class MainView()
{
	super();

	//TODO:edit here

}
extends AView;


function MainView*onInitDone()
{
	super.onInitDone();
};

function MainView*onMenuBtnClick(comp, info, e)
{
	//console.log(comp.getComponentId());
	this.getContainer().navigator.goPage(comp.getComponentId());
};
