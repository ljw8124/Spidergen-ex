
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

function MainView*onAButton1Click(comp, info, e)
{

	//TODO:edit here
	//직접 component에 접근하는 방식
	var url = 'http://localhost:3000/users/';
	var param = '?name=' + this.inputTxt.getText(); //layout에서 입력한 inputTxt가 전달됨(ajax get방식으로)
	
	var thisObj = this;
	
	$.ajax(
	{
		type: 'GET',
		url: url + param,
		
		//데이터가 성공적으로 수신된다면
		success: function(result)
		{
			console.log(result);
			//콜백함수에서는 this를 사용하지 못하기 때문에 콜백함수 호출 전 this를 따로 변수로 저장하고 그 변수를 이용하여 접근
			thisObj.outData.setText(result);
			
		},
		//데이터가 성공적으로 수신되지 않는다면
		error: function(error)
		{
			console.error(error);
		}
	
	});
	
};

function MainView*onAButton2Click(comp, info, e)
{

	//TODO:edit here
	//setData와 getData를 이용하여 component를 설정하는 방식
	var url = 'http://localhost:3000/users/';
	
	var thisObj = this;
	
	$.ajax(
	{
		type: 'GET',
		url: url,
		success: function(result) {
			console.log(result);
			
			//json 데이터를 object로 바꾸는 방법 
			//var obj = JSON.parse('{}');
			
			thisObj.dataView.setData(result);
		},
		
		error: function(error) {
			console.log(error);
		}
	
	
	});

};






















