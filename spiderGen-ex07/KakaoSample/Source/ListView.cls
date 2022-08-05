
/**
Constructor
Do not call Function in Constructor.
*/
class ListView()
{
	super();

	//TODO:edit here

}
extends AView;


function ListView*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function ListView*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function ListView*setData(data)
{
	this.img.setImage(data.img);
	this.name.setText(data.name);
	this.content.setText(data.message);

};
