
/**
Constructor
Do not call Function in Constructor.
*/
class MainView()
{
	super();

	this.idx = 0;
	//오름차순을 default로 함
	this.isAsc = true;

}
extends AView;


function MainView*init(context, evtListener)
{
	super.init(context, evtListener);

	//grid에 넣을 data 저장
	this.simpleGridData =
	[
		['아수소프트', '40', '20150001'], // 0
		['아수소프트', '30', '20150002'], // 1
		['아수소프트', '20', '20150003']  // 2
	];

};

function MainView*onInitDone()
{
	super.onInitDone();

	//TODO:edit here

};

//심플그리스 셀을 선택했을 때
function MainView*onSimpleGridSelect(comp:AGrid, info, e)
{
	var cell = info[0];
	//console.log(cell);
	
	//헤더를 선택한 경우
	if(cell.isHeader)
	{
		var colIdx = comp.colIndexOfCell(cell); //선택한 cell의 column idx 값을 가져옴
		console.log(colIdx);
		
		//그리드 옵션으로 sort 기능을 활성화 할 수 있지만 기능 구현
		comp.sortColumn(colIdx, this.isAsc);
		
		//한번 누르면 오름차순을 내림차순으로 변경
		this.isAsc = !this.isAsc;
	}
	else
	{
		//파라미터로 넘어온 cell의 row, column 정보를 배열로 리턴함 -> [row, col]
		var pos = comp.indexOfCell(info);
		
		//셀의 텍스트를 가져와 toast 로 출력
		AToast.show(comp.getCellText(pos[0], pos[1]));
	}

	//TODO:edit here

};

//add 버튼을 누르면 data를 받아서 출력
function MainView*onAddBtnClick(comp, info, e)
{
	//해당 grid component 에 data를 추가
	
	this.simpleGrid.addRow(this.simpleGridData[this.idx]);
	
	this.idx++;
	if(this.idx == 3) this.idx = 0; //data를 3개(0, 1, 2)만 넣었기 때문에 idx가 3이되면 다시 0으로 변경

};

function MainView*onDeleteBtnClick(comp, info, e)
{
	//delete를 누르면 맨 위에 줄부터 삭제
	this.simpleGrid.removeRow(0);

};
