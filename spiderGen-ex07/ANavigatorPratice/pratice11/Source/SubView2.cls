
/**
Constructor
Do not call Function in Constructor.
*/
class SubView2()
{
	super();

	//TODO:edit here

}
extends AView;


//초기화가 완료되고 최초 한번만 호출되는 함수
function SubView2*onInitDone()
{
	super.onInitDone();
};

//활성화 시점마다 매번 호출되는 함수
//최초로 호출되는 경우 isFirst가 true
function SubView2*onActiveDone(isFirst)
{
	//페이지 데이터를 저장
	var data = this.getContainer().getData();
	
	if(data)
	{
		AToast.show('data: ' + data.textData);
	}
};

//prew 버튼 누른 경우
function SubView2*onPrevBtnClick(comp, info, e)
{
	//1. 컨테이너에 있는 네비게이터를 찾는 방법
	var navi = this.getContainer().navigator;
	
	if(navi.canGoPrev())
	{
		navi.goPrevPage();
	}
	else
	{
		AToast.show('이전 페이지 히스토리가 존재하지 않습니다.');
	}
};

//next 버튼 누른 경우
function SubView2*onNextBtnClick(comp, info, e)
{
	//2. 이름으로 네비게이터를 찾는 방법
	var navi = ANavigator.find('testNavi');
	
	if(navi.canGoNext())
	{
		navi.goNextPage();
	}
	else
	{
		AToast.show('다음 페이지 히스토리가 존재하지 않습니다.');
	}
};

//SubView3 페이지로 이동
function SubView2*onSubView3BtnClick(comp, info, e)
{
	this.getContainer().navigator.goPage('SubView3');

};
