
/**
Constructor
Do not call Function in Constructor.
*/
function WindowView1()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(WindowView1, AView);


WindowView1.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//TODO:edit here

};

//init 실행 후 호출되는 함수
WindowView1.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
	
	//open 시 셋팅한 컨테이너 데이터를 얻어옴
	var data = this.getContainer().getData();
	
	if(data)
	{
		this.TextId.setText(data.id);
		this.TextPwd.setText(data.pw);
	}
};

WindowView1.prototype.onButtonOkClick = function(comp, info, e)
{
	var uid = this.TextId.getText();
	var upw = this.TextPwd.getText();
	
	//텍스트박스 체크
	if(!uid || !upw)
	{
		AToast.show('정보를 입력해주세요.');
		return;
	}
	
	//뷰의 컨테이너를 찾아서 닫음. 닫을 때 텍스트박스의 데이터를 보냄
	var data = {'uid': uid, 'upw': upw};
	
	this.getContainer().close(0, data);
};

WindowView1.prototype.onButtonCancelClick = function(comp, info, e)
{
	//뷰의 컨테이너를 찾아서 닫음
	this.getContainer().close(1);

};

WindowView1.prototype.onButtonCloseClick = function(comp, info, e)
{
	//뷰의 컨테이너를 찾아서 닫음
	this.getContainer().close(1);
};