
/**
Constructor
Do not call Function in Constructor.
*/
function TabView1()
{
	AView.call(this);

	//TODO:edit here

}
afc.extendsClass(TabView1, AView);


TabView1.prototype.init = function(context, evtListener)
{
	AView.prototype.init.call(this, context, evtListener);

	//리스트뷰에 표시할 데이터
	this.listData =
	[
		{img: 'Assets/images/기본프로필.png', name: '이정우', message: '안녕하세요'},
		{img: 'Assets/images/기본프로필.png', name: '김민수', message: '안녕히가세요'}
	];

};

TabView1.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//리스트뷰에 데이터 개수만큼 아이템뷰 추가
	this.friendList.addItem('Source/TabViews/ListViews/ListView.lay', this.listData);

};
