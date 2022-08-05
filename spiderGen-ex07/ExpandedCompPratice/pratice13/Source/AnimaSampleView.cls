
/**
Constructor
Do not call Function in Constructor.
*/
class AnimaSampleView()
{
	super();
}
extends AView;


function AnimaSampleView*onInitDone()
{
	//manual site
	//https://github.com/minimit/minimit-anima
};

function AnimaSampleView*onShowBtnClick(comp, info, e)
{
	//외부 라이브러리를 쓰는 경우 프로젝트 내 Library에 추가해야함
	//var $ele = $(this.aniTarget.element);
	
	//same with over line
	this.aniTarget.$ele.anima({x: 0}, 400, 'easeOut');
};

function AnimaSampleView*onHideBtnClick(comp, info, e)
{
	//var $ele = $(this.aniTarget.element);
	
	//smae with over line
	this.aniTarget.$ele.anima({x:-400}, 400, 'easeIn');
};

function AnimaSampleView*onBackBtnClick(comp, info, e)
{
	this.getContainer().navigator.goPrevPage();

};
