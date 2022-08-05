
/**
Constructor
Do not call Function in Constructor.
*/
function ListViewitem()
{
	AView.call(this);

	//TODO:edit here
	
	this.data = null;

}
afc.extendsClass(ListViewitem, AView);


ListViewitem.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);
};

ListViewitem.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
};


ListViewitem.prototype.setData = function(data)
{
	this.itemImage.setImage(data.img);
	this.itemTitle.setText(data.title);
	this.itemWriter.setText(data.writer);
	this.itemRegdate.setText(data.regdate);
	this.itemReplyCnt.setText(data.replyCnt);
	this.itemViewCnt.setText(data.viewCnt);
	this.itemRcmCnt.setText(data.rcmCnt);
};


ListViewitem.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
