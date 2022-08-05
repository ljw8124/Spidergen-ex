
/**
Constructor
Do not call Function in Constructor.
*/
class SubView1()
{
	super();

	//TODO:edit here

}
extends AView;


//초기화가 완료되고 최초 한번만 호출되는 함수
function SubView1*onInitDone()
{
	super.onInitDone();
};

//prev 버튼 눌렀을 경우
function SubView1*onPrevBtnClick(comp, info, e)
{
	//1. 컨테이너에 있는 네비게이터를 이용하는 방법
	var navi = this.getContainer().navigator;
	
	//이전페이지로 이동가능한지 체크, 비교하지 않아도 없는 경우는 이동하지 않음(히스토리가 없는 경우)
	if(navi.canGoPrev())
	{
		navi.goPrevPage();
	}
	else
	{
		AToast.show('이전 페이지 히스토리가 존재하지 않습니다.');
	}
};

//next 버튼 눌렀을 경우
function SubView1*onNextBtnClick(comp, info, e)
{
	//2. 이름으로 네비게이터를 찾는 방법
	var navi = ANavigator.find('testNavi');
	
	//다음페이지로 이동가능한지 체크, 비교하지 않아도 없는 경우는 이동하지 않음(히스토리가 없는 경우)
	if(navi.canGoNext())
	{
		navi.goNextPage();
	}
	else
	{
		AToast.show('다음 페이지 히스토리가 존재하지 않습니다.');
	}
};

///SubView2 페이지로 이동
function SubView1*onSubView2BtnClick(comp, info, e)
{
	//입력된 값(Data)을 SubView2로 넘기면서 페이지 이동하는 방법
	//키,값 형식으로 할당
	var data =
	{
		textData: this.TextData.getText()
	};
	
	//마지막으로 이동한 네비게이터를 이용하는 방법
	//var navi = ANavigator.getLastNavigator();
	var navi = this.getContainer().navigator;
	
	//이동하려는 페이지에 데이터를 전달하는 방법
	navi.goPage('SubView2', data);
};

//페이지 히스토리 삭제
function SubView1*onHistClearBtnClick(comp, info, e)
{
	this.getContainer().navigator.clearHistory();
	
	AToast.show('페이지 히스토리 삭제되었습니다.');

};
