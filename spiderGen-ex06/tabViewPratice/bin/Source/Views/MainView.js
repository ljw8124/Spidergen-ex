
/**
Constructor
Do not call Function in Constructor.
*/
function MainView()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(MainView, AView);


MainView.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

MainView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//tab 정보 추가
	//정보만 추가하고 화면에는 실제로 출력하지 않음
	//화면은 tab이 선택되는 시점에 로드되어 출력
	this.tabView.addTab('탭1', 'Source/Views/SubView1.lay', 'tab1');
	this.tabView.addTab('탭2', 'Source/Views/SubView2.lay', 'tab2');
	this.tabView.addTab('탭3', 'Source/Views/SubView3.lay', 'tab3');
	
	//default tab은 1
	this.tabView.selectTabById('tab1'); //tab id로 선택
	//this.tabView.selecTabByIndex[0]; //tab의 idx로 선택

};


//탭 영역 보여주는 버튼 
MainView.prototype.onButtonTabShowClick = function(comp, info, e)
{
	this.tabView.showTabArea();
};

//탭 영역 숨기는 버튼
MainView.prototype.onButtonTabHideClick = function(comp, info, e)
{
	this.tabView.hideTabArea();
};

//라벨 변경
MainView.prototype.setTitle = function(title)
{
	this.titleLabel.setText(title);
};
