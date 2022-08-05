
/**
Constructor
Do not call Function in Constructor.
*/
class ListViewitem()
{
	super();

	//TODO:edit here
	
	this.data = null;

}
extends AView;


function ListViewitem*init(context, evtListener)
{
	super.init(context, evtListener);
};

function ListViewitem*onInitDone()
{
	super.onInitDone();
};


function ListViewitem*setData(data)
{
	this.itemImage.setImage(data.img);
	this.itemTitle.setText(data.title);
	this.itemWriter.setText(data.writer);
	this.itemRegdate.setText(data.regdate);
	this.itemReplyCnt.setText(data.replyCnt);
	this.itemViewCnt.setText(data.viewCnt);
	this.itemRcmCnt.setText(data.rcmCnt);
};


function ListViewitem*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};
