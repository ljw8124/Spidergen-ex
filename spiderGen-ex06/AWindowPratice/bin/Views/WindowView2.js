
/**
Constructor
Do not call Function in Constructor.
*/
function WindowView2()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(WindowView2, AView);


WindowView2.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

WindowView2.prototype.onButtonCloseClick = function(comp, info, e)
{
	//뷰의 컨테이너를 찾아서 닫음
	this.getContainer().close();
};
