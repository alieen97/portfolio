
document.addEventListener('DOMContentLoaded', () => {
    let inputBox = document.getElementById('todoField');  // 할 일 입력창
    let addToDo = document.getElementById('addBtn');      // 버튼
    let toDoList = document.getElementById('listBox');    // 할 일 리스트창
    let deletedBtn; //deletedBtn을 전역변수로 선언
    const ENTER = 13; //엔터키의 키보드 코드 변수 선언
    /*
    let, var 이 내ㅇ이 바뀔 수 있고, const 변경불가
    

    -ul태그 추가
    -수정기능 추가
    */

    const addEvent = () => {
        var list = document.createElement('li');     // 리스트창에 추가될 태그 선언
        var listTxt = document.createElement('div');//list 텍스트가 담길 div 선언

        list.className = 'listCell'; //추가될 li에 클래스 추가
        listTxt.className = 'listCellTxt';//list 텍스트가 담길 div 클래스 추가

        if (!inputBox.value){            // 할 일 입력창에 내용이 입력되지 않으면 alert
            alert('내용을 입력해 주세요!');
        }else {
            //alert(inputBox.value);
            btnWrap = document.createElement('div');//버튼 넣을 div 선언
            btnWrap.className = 'btnWrap';//div 클래스네임 설정

            listTxt.innerText = inputBox.value; //listTxt의 text 내용을 입력창에 추가된 텍스트로 선언

            deletedBtn = document.createElement('button');//제거버튼 선언
            deletedBtn.className = 'deleteBtn'; //버튼 클래스 지정해주기
            deletedBtn.textContent = 'x';//제거버튼 안의 텍스트 지정
            btnWrap.appendChild(deletedBtn);//list가 생성될 때 삭제버튼 생성

            modifyBtn = document.createElement('button');//수정버튼 선언
            modifyBtn.className = 'modifyBtn';//버튼으로 선언된 수정버튼 클래스네임 추가
            modifyBtn.textContent = 'edit';//연필모양 텍스트 추가
            btnWrap.appendChild(modifyBtn); //list가 생성될 때 수정버튼 넣기

            list.appendChild(listTxt);
            list.appendChild(btnWrap);//list에 버튼들 추가
            toDoList.appendChild(list); //위에서 선언된 내용을 자식으로 추가

            inputBox.value = ''; //추가 후 입력창 비우기

        }
        listTxt.addEventListener('click', () => { //리스트 클릭 시
            list.classList.toggle('doneList'); // 밑줄추가
            if(list.classList.contains('doneList')){//class doneList 추가 시
                toDoList.appendChild(list)//listbox 안에서 맨 마지막 순서로 보내기
            }else{
                toDoList.prepend(list)
            }
        })


    }
    addToDo.addEventListener('click', () => {    // 버튼에 클릭 이벤트가 발생하면
        addEvent();
    })
/*
매개변수
이벤트가 일어나는 그 자체
*/
     inputBox.addEventListener('keyup',(a) => {
        
        if (a.keyCode === ENTER) {
            addEvent();
        }
    })
    
    document.addEventListener('click',(event) => {//deletBtn을 전역변수로 설정했으니 
        if(event.target.classList.contains('deleteBtn')){ //클릭한 것이 .deleteBtn 룰 가지고 있으면 
            const delList = event.target.closest(".listCell");// 클릭한 요소에서 근접한 .listcell을 찾아
            delList.remove(); //삭제ㅋ
        }else if(event.target.classList.contains('modifyBtn')){//클릭한 것이 .modifyBtn를 갖고 있으면
            const modiInput = document.createElement('input');//input 선언
            const modiList = event.target.closest(".listCell")//.modifyBtn에 근접하게있는 .listCell 찾기
            const modiTxt = modiList.querySelector('.listCellTxt');//거기에 입력되있는 텍스트 선언
            //const modiList = event.target.closest(".listCell").querySelector('.listCellTxt').innerText;//클릭한 수정버튼이 있는 리스트의 텍스트내용 받아오기(이렇게 했었는데 나중에 .listCell만 받아올 일도 생겨서 분리함)
            //alert(modiTxt);
            modiInput.value = modiTxt.innerText;// modiList 안의 텍스트를 input안의 값으로 넣기
            modiList.insertBefore(modiInput, modiTxt);//modiInput을 modiTxt 앞에 삽입
            modiTxt.style.display = 'none'; //그리고 modiTxt을 display none
            
            modiInput.addEventListener('keyup',(e)=>{
                if(e.keyCode === ENTER){
                    modiTxt.innerText = modiInput.value;
                    modiInput.remove();
                    modiTxt.style.display = 'block'; 
                }
            })
        }
    })
})

/*약간 
document.on("click",function(e)){
    preventeDefault(e)
} 
와 같은 역할을 
document.addEventListener('click', (e) => {
    e.preventDefault();
})
로 이해하면 될 듯.
*/

/*
    list 에서 class doneList 가 있으면 그 앞으로 추가되도록 하는것도 연구해보기
*/



