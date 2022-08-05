
/**
Constructor
Do not call Function in Constructor.
*/
function ResponsiveSampleView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(ResponsiveSampleView, AView);


ResponsiveSampleView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};



ResponsiveSampleView.prototype.onBackBtnClick = function(comp, info, e)
{
	this.getContainer().navigator.goPrevPage();
};
