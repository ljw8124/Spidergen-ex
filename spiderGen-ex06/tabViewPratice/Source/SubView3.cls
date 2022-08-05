
/**
Constructor
Do not call Function in Constructor.
*/
class SubView3()
{
	super();

	//TODO:edit here

}
extends AView;


function SubView3*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function SubView3*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function SubView3*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//아래와 같이 변수 뒤에 데이터 형을 지정하면
	//형을 알 수 없는 객체도 자동완성 기능을 이용할 수 있음
	var mainView:MainView = this.getContainer().getView(); //MainView 객체는 컨테이너의 기본 뷰이므로 이와 같이 얻어올 수 있음
	
	mainView.setTitle(this.TitleLabel.getText());

};

function SubView3*onPrevBtnClick(comp, info, e)
{
	//위와 같이 변수 뒤에 데이터 형을 지정하면 자동완성 기능 사용 가능
	var tabView:ATabView = this.owner;
	
	//파라미터는 optional
	tabView.goPrevSelect();

};
