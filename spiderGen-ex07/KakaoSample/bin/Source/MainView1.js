
/**
Constructor
Do not call Function in Constructor.
*/
function MainView1()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(MainView1, AView);


MainView1.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

MainView1.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//TODO:edit here

};

MainView1.prototype.onLoginBtnClick = function(comp, info, e)
{
	var navi = this.getContainer().navigator;
	
	theApp.qm.sendProcessByName('login001', this.getContainerId(), null,
	
	//inblock function
	function(queryData)
	{
		queryData.printQueryData();
		
		var inputId = queryData.getBlockData('InBlock1');
	},
	
	//outblock function
	function(queryData)
	{
	
		console.log('server conntected................');
	
		queryData.printQueryData();
		
		var outputData = queryData.getBlockData('OutBlock');
	
		var inputId = outputData[0].input_id;
		var inputPw = outputData[0].input_pw;
		var outputId = outputData[0].output_id;
		var outputPw = outputData[0].output_pw;
		
		if(inputId === outputId && inputPw === outputPw)
		{
			
			navi.goPage('MainView2');
		}
		else
		{
			AToast.show("잘못된 회원정보입니다.");	
		}
		
		
	});
	

	

};
