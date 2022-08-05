
/**
Constructor
Do not call Function in Constructor.
*/
class WindowView2()
{
	super();

	//TODO:edit here

}
extends AView;


function WindowView2:init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function WindowView2:onButtonCloseClick(comp, info, e)
{
	//뷰의 컨테이너를 찾아서 닫음
	this.getContainer().close();
};
