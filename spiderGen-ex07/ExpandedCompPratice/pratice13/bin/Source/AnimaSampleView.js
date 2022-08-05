
/**
Constructor
Do not call Function in Constructor.
*/
function AnimaSampleView()
{
	AView.call(this);
}
afc.extendsClass(AnimaSampleView, AView);


AnimaSampleView.prototype.onInitDone = function()
{
	//manual site
	//https://github.com/minimit/minimit-anima
};

AnimaSampleView.prototype.onShowBtnClick = function(comp, info, e)
{
	//외부 라이브러리를 쓰는 경우 프로젝트 내 Library에 추가해야함
	//var $ele = $(this.aniTarget.element);
	
	//same with over line
	this.aniTarget.$ele.anima({x: 0}, 400, 'easeOut');
};

AnimaSampleView.prototype.onHideBtnClick = function(comp, info, e)
{
	//var $ele = $(this.aniTarget.element);
	
	//smae with over line
	this.aniTarget.$ele.anima({x:-400}, 400, 'easeIn');
};

AnimaSampleView.prototype.onBackBtnClick = function(comp, info, e)
{
	this.getContainer().navigator.goPrevPage();

};
