
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

	//TODO:edit here

};

function MainView*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

function MainView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

function MainView*onDeviceInfoClick(comp, info, e)
{
	var thisObj = this;
	
	//bridge를 연결한 경우 cordova 함수 사용 가능 (첫번째 값 성공시, 두번째 값 실패시, 세번째 값 플러그인 이름, 네번째 값 호출할 action)
	cordova.exec(
	function(result)
	{
		thisObj.infoBox.setText(JSON.stringify(result));
		
	} 
	, null, "Device" , "getDeviceInfo", []); 
};

function MainView*onPortraitClick(comp, info, e)
{
	cordova.exec( null , null, "AppPlugin" , "setOrientation", [ 1 ]);  

};

function MainView*onLandscapeClick(comp, info, e)
{

	cordova.exec( null , null, "AppPlugin" , "setOrientation", [ 0 ]);  

};