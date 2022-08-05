
/**
Constructor
Do not call Function in Constructor.
*/
class MainView()
{
	super();

	//TODO:edit here

}
extends AView;


function MainView*init(context, evtListener)
{
	super.init(context, evtListener);
};

function MainView*onInitDone()
{
	super.onInitDone();
	
	//--------------------------------------------
	//슬라이드뷰는 기본적으로 리스트뷰와 유사함
	
	//1. 여러 종류의 뷰를 하나씩 추가할 경우, 데이터가 별 의미가 없을 경우라도 배열의 개수만큼 추가되므로 기본적으로 셋팅이 필요함
	
	this.testSlideView.addItem('Source/views/Subview1.lay', [1]);
	this.testSlideView.addItem('Source/views/Subview2.lay', [2]);
	this.testSlideView.addItem('Source/views/Subview3.lay', [3]);
	
	//이 방법도 존재(한번에 넣는 방법)
	//this.testSlideView.addItems(['Source/views/Subview1.lay', 'Source/views/Subview2.lay', 'Source/views/Subview3.lay'], [1, 2, 3]);
	
	//--------------------------------------------
	//2. 같은 종류의 뷰를 여러번 추가하는 경우, lay 경로는 같고 다른 종류의 데이터가 보내지며 그 값을 화면에 셋팅 방식으로 개발함
	//	Subview.cls 에  setData(data) 함수를 구현하면 로드 시점에 자신의 인덱스에 맞는 값이 전달됨
	
	//this.testSlideView.addItem('Source/views/Subview1.lay', ['a', 'b', 'c']);
	
	//슬라이드 페이징 처리를 할 뷰 객체를 지정. 내부에 AButton 을 추가하면 자동으로 매칭된 뷰로 슬라이드 되는 버튼 기능을 생성
	this.testSlideView.setButtonView(this.slidePageView);
	
	//move speed setting
	//this.testSlideView.setSpeed(300);
	
	//--------------------------------------------
	//특정 위치의 아이템의 뷰에 접근하는 방법
	
	//var item = this.testSlideView.getItem(0); //특정 item을 가져옴
	//item.view.cntLable.setText('Hello~'); 	//item에 text를 설정
};

function MainView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);
};



function MainView*onPrevBtnClick(comp, info, e)
{
	this.testSlideView.slidePrev();
};

function MainView*onNextBtnClick(comp, info, e)
{
	this.testSlideView.slideNext();
};

function MainView*onASelectBox1Change(comp, info, e)
{
	console.log('select index : ' + info);
	this.testSlideView.slideTo(info);
};
