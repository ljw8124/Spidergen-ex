
/**
Constructor
Do not call Function in Constructor.
*/
function Subview1()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(Subview1, AView);


Subview1.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

Subview1.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

//활성화 시마다 실행
Subview1.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

 
 	//AToast.show('Hello World!');
	AToast.show('Hello World!');
};

//반대로 비활성화
Subview1.prototype.onDeactiveDone = function()
{
	AView.prototype.onDeactiveDone.call(this);
	
	this.text.setText('');
	

	

};