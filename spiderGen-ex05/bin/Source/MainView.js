
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

	//TODO:edit here

};

MainView.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

MainView.prototype.onDeviceInfoClick = function(comp, info, e)
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

MainView.prototype.onPortraitClick = function(comp, info, e)
{
	cordova.exec( null , null, "AppPlugin" , "setOrientation", [ 1 ]);  

};

MainView.prototype.onLandscapeClick = function(comp, info, e)
{

	cordova.exec( null , null, "AppPlugin" , "setOrientation", [ 0 ]);  

};