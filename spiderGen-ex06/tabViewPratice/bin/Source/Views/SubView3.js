
/**
Constructor
Do not call Function in Constructor.
*/
function SubView3()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(SubView3, AView);


SubView3.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

SubView3.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

SubView3.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//아래와 같이 변수 뒤에 데이터 형을 지정하면
	//형을 알 수 없는 객체도 자동완성 기능을 이용할 수 있음
	var mainView = this.getContainer().getView(); //MainView 객체는 컨테이너의 기본 뷰이므로 이와 같이 얻어올 수 있음
	
	mainView.setTitle(this.TitleLabel.getText());

};

SubView3.prototype.onPrevBtnClick = function(comp, info, e)
{
	//위와 같이 변수 뒤에 데이터 형을 지정하면 자동완성 기능 사용 가능
	var tabView = this.owner;
	
	//파라미터는 optional
	tabView.goPrevSelect();

};
