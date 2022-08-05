
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


/*function MainView*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};
*/

MainView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};
/*

function MainView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};
*/

//직접 코딩으로 화면에 정보를 출력하는 방법
MainView.prototype.onTestBtnClick = function(comp, info, e)
{
 	//callback 함수이기 때문에 변수로 선언 필요
	var thisObj = this;
	
	theApp.qm.sendProcessByName('ac003', this.getContainerId(), null,
	
	//inblock function, 서버로 전송되기 바로 전에 호출되는 함수
	function(queryData)
	{
		//호출되는 block은 배열형태
		var blockData = queryData.getBlockData('InBlock1');
		blockData[0].input1 = 'helloooooo';
		
		//console에 출력됨
		queryData.printQueryData();
		
	},
	
	//outblock function, 서버로부터 데이터를 수신한 후 바로 호출되는 함수
	function(queryData)
	{
		queryData.printQueryData();
		
		//var blockData = queryData.getBlockData('OutBlock1');
		
		//console.log(blockData[0]);
		//console.log(blockData[0].output1);
		
		//현재는 자동으로 mapping 설정을 해놓아서 output2만 출력됨
		//=> mapping 설정을 삭제하거나 output2를 원하는 값으로 바꾼 다음 출력한다면 해결
		//thisObj.outLbl.setText(blockData[0]);
		
	});
	
};

MainView.prototype.onConfirmBtnClick = function(comp, info, e)
{
	theApp.qm.sendProcessByName('ac001', this.getContainerId(), null,
	
	//inblock function, 서버로 전송되기 바로 전에 호출되는 함수
	function(queryData)
	{
		queryData.printQueryData();
		
		//client가 송수신된 값을 바꾸는 방법
		
		//var blockData = queryData.getBlockData('InBlock1');
		//blockData[0].login_id = '7777'; //이때 Data를 print(수신) 하기 전에 바꿔주어야 한다.
	},

	//outblock function, 서버로부터 데이터를 수신한 후 바로 호출되는 함수
	function(queryData)
	{
		queryData.printQueryData();
		
		//var blockData = queryData.getBlockData('OutBlock1');
		//blockData[0].uid = 456789;
	});

	

};

MainView.prototype.onSendBtnClick = function(comp, info, e)
{

	theApp.qm.sendProcessByName('ac002', this.getContainerId(), null,
	
	//inblock function, 서버로 전송되기 바로 전에 호출되는 함수
	function(queryData)
	{
		queryData.printQueryData();
	},
	function(queryData)
	{
		queryData.printQueryData();
		
		var blockData = queryData.getBlockData('OutBlock1');
		
		for(i = 0; i < blockData.length; i++) 
		{
			if(blockData[i].sex === 1) blockData[i].sex = '남성';
			else blockData[i].sex = '여성';
		}
		
		
		
	});


};

MainView.prototype.onCallingBtnClick = function(comp, info, e)
{

	theApp.qm.sendProcessByName('tr001', this.getContainerId(), null,
	
	function(queryData)
	{
		queryData.printQueryData();
	},
	function(queryData)
	{
		queryData.printQueryData();
		
		var blockData = queryData.getBlockData('outblock1');
		
	});
	

};
