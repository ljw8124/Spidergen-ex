
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

	//ListView에 표시할 데이터
	//키,값 형태로 보내 사용
	this.listData = 
	[
		{img: 'Assets/img/door.png', title: 'List Content Title 1'},
		{img: 'Assets/img/page_white_add.png', title: 'List Content Title 2'},
		{img: 'Assets/img/page_white_copy.png', title: 'List Content Title 3'},
		{img: 'Assets/img/page_white_delete.png', title: 'List Content Title 4'},
		{img: 'Assets/img/page_white_edit.png', title: 'List Content Title 5'},
		{img: 'Assets/img/page_white_paste.png', title: 'List Content Title 6'},
	];
};

MainView.prototype.onInitDone = function()
{
	AView.prototype.onInitDone.call(this);

	//ListView에 데이터 개수만큼 ItemView가 추가됨
	//즉 6개의 ListItemView가 로드되어 ListView에 추가
	//ListItemView.cls에 setData 함수가 있으면 순서가 맞는 data 오브젝트를 파라미터로 넘기며 호출해 준다.
	this.listView.addItem('Source/Items/ListItemView.lay', this.listData);

};

/*
function MainView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};
*/

//추가 버튼을 누르면 데이터를 이용하여 하나의 아이템을 추가
MainView.prototype.onAddButtonClick = function(comp, info, e)
{
	var randomIdx = Math.floor(Math.random() * this.listData.length);
	//랜덤으로 출력 추가하는 기능
	var newData = [ this.listData[randomIdx] ];

	//var newData = [ {img: 'Assets/img/door.png', title: 'List Content Title 1'} ];
	
	//ItemView에 newData(Item)을 추가
	this.listView.addItem('Source/Items/ListItemView.lay', newData);
};

//추가된 아이템을 클릭하면 생기는 이벤트
MainView.prototype.onListViewSelect = function(comp, info, e)
{
	console.log(info);
	
	//info에는 선택한 아이템이 감싸고 있는 view 객체가 들어있음
	//즉 info.view는 ListItemView 클래스의 객체
	var data = info.view.data;
	
	var box = new AMessageBox(); //AMessageBox 인스턴스 생성
	box.openBox(null, data.title, AMessageBox.OK);
	
};
