
/**
Constructor
Do not call Function in Constructor.
*/
function SubView3()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(SubView3, AView);


SubView3.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);
	
	//리스트뷰에 표시할 데이터
	this.listData = 
	[
		{img: 'Assets/images/ic_profile_50.png', title: '개발환경 구성 문의드립니다.', writer: '현호', regdate: '2021/08/11', replyCnt: 1, viewCnt: 28, rcmCnt: 0},
		{img: 'Assets/images/ic_profile_50.png', title: '글씨 크기', writer: 'wjddn8124', regdate: '2021/05/10', replyCnt: 1, viewCnt: 104, rcmCnt: 0},
		{img: 'Assets/images/ic_profile_50.png', title: '리스트뷰에 대해 질문이 있습니다.', writer: '웹위너', regdate: '2020/08/25', replyCnt: 0, viewCnt: 76, rcmCnt: 0},
		{img: 'Assets/images/ic_profile_50.png', title: 'flexLayout 컴포넌트 IE11에서 align Items가 안됩니다.', writer: '웹위너', regdate: '2020/06/22', replyCnt: 3, viewCnt: 239, rcmCnt: 1},
		{img: 'Assets/images/ic_profile_50.png', title: '질문있습니다.', writer: '와이', regdate: '2020/03/02', replyCnt: 2, viewCnt: 377, rcmCnt: 1}
		
	];

};

SubView3.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);
	
	//리스트뷰에 데이터 개수만큼의 아이템뷰를 추가
	//ListViewItem.cls 에 setData 함수가 있다면 순서에 맞는 data 오브젝트를 파라미터로 넘기며 호출
	this.listView.addItem('Source/PageViews/ListViewItems/ListViewItem.lay', this.listData);

};

SubView3.prototype.onRegisterBtnClick = function(comp, info, e)
{
	
	var today = new Date();
	
	var year = today.getFullYear();
	var month = ('0' + (today.getMonth() + 1)).slice(-2);
	var day = ('0' + today.getDate()).slice(-2);
	
	var dateStr = year + '/' + month + '/' + day;
	
	console.log(dateStr);
	
	
	var newData = [ {img: 'Assets/images/ic_profile_50.png', title: 'dummies.', writer: 'dummy', regdate: dateStr, replyCnt: 0, viewCnt: 0, rcmCnt: 0} ];
	
	this.listView.addItem('Source/PageViews/ListViewItems/ListViewItem.lay', newData);

};
