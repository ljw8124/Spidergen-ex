
/**
Constructor
Do not call Function in Constructor.
*/
function SubView3()
{
	AView.call(this);
}
afc.extendsClass(SubView3, AView);


//초기화가 완료되고 최초 한번만 호출되는 함수
SubView3.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
};

//prev 버튼 누른 경우
SubView3.prototype.onPrevBtnClick = function(comp, info, e)
{
	//1. 컨테이너에 있는 네비게이터를 이용하는 방법
	var navi = ANavigator.find('testNavi');
	
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
SubView3.prototype.onNextBtnClick = function(comp, info, e)
{
	//2. 이름으로 네비게이터를 찾는 방법
	var navi = ANavigator.find('testNavi');
	
	if(navi.canGoNext)
	{
		navi.goNextPage();
	}
	else
	{
		AToast.show('다음 페이지 히스토리가 존재하지 않습니다.');
	}
};

//SubView3 페이지로 이동
SubView3.prototype.onSubView1BtnClick = function(comp, info, e)
{
	this.getContainer().navigator.goPage('SubView1');
};
