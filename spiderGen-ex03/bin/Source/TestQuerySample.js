
/**
Constructor
Do not call Function in Constructor.
*/
function TestQuerySample()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(TestQuerySample, AView);


TestQuerySample.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

TestQuerySample.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

TestQuerySample.prototype.onActiveDone = function(isFirst)
{
	AView.prototype.onActiveDone.call(this, isFirst);

	//TODO:edit here

};

TestQuerySample.prototype.onConfirmBtnClick = function(comp, info, e)
{
	theApp.qm.sendProcessByName('ac001', this.getContainerId(), null,
	
	function(queryData)
	{
		queryData.printQueryData();
		
		var blockData = queryData.getBlockData('InBlock1');
		blockData[0].login_id = '7777';
	},
	function(queryData)
	{
		queryData.printQueryData();
		
		var blockData = queryData.getBlockData('OutBlock1');
		blockData[0].uid = 456789;
	});

};

TestQuerySample.prototype.onTestBtnClick = function(comp, info, e)
{

	//qm은 query manager
	theApp.qm.sendProcessByName('ac003', this.getContainerId(), null, 
	
	//inblock function, 서버로 전송되기 바로 전에 호출되는 함수
	function(queryData)
	{
		//var blockData = queryData.getBlockData('Inblock1');
		//blockData[0].input1 = 'hello';
		queryData.printQueryData();
	},
	
	//outblock function, 서버로부터 데이터를 수신한 후 바로 호출되는 함수
	function(queryData)
	{
		queryData.printQueryData();
	});

};
