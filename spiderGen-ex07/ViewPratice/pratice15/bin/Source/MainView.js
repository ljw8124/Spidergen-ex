
/**
Constructor
Do not call Function in Constructor.
*/
function MainView()
{
	AView.call(this);
}
afc.extendsClass(MainView, AView);


MainView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here
	
	//새로 만들 뷰의 url을 이용하여 뷰 컴포넌트를 만든다.
	var innerView = AView.createView(null, 'Source/InnerView.lay');
	
	innerView.setCompRect(10, 10, 300, 300);
	
	//새로 만든 뷰 객체를 자식으로 추가
	this.blankView1.addComponent(innerView);
	
	//뷰 내부에 외부 모듈뷰를 로드
	this.blankView2.loadView('Source/InnerView.lay');

};

MainView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

MainView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};
