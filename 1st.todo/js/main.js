
document.addEventListener('DOMContentLoaded', () => {
    let inputBox = document.getElementById('todoField');  // 할 일 입력창
    let addToDo = document.getElementById('addBtn');      // 버튼
    let toDoList = document.getElementById('listBox');    // 할 일 리스트창
    let deletedBtn; //deletedBtn을 전역변수로 선언

    /*
    let, var 이 내ㅇ이 바뀔 수 있고, const 변경불가
    

    -ul태그 추가
    -수정기능 추가
    */

    const addEvent = () => {
        var list = document.createElement('li');     // 리스트창에 추가될 태그 선언
        list.className = 'listCell'; //추가될 li에 클래스 추가
        if (!inputBox.value){            // 할 일 입력창에 내용이 입력되지 않으면 alert
            alert('내용을 입력해 주세요!');
        }else {
            //alert(inputBox.value);
            list.innerText = inputBox.value; //list의 text 내용을 입력창에 추가된 텍스트로 선언
            deletedBtn = document.createElement('button');//제거버튼 선언
            deletedBtn.className = 'deleteBtn'; //버튼 클래스 지정해주기
            deletedBtn.textContent = 'x';//제거버튼 안의 텍스트 지정
            list.appendChild(deletedBtn);//list가 생성될 때 삭제버튼 생성

            toDoList.appendChild(list); //위에서 선언된 내용을 자식으로 추가

            inputBox.value = ''; //추가 후 입력창 비우기

        }
        list.addEventListener('click', () => { //리스트 클릭 시
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
        const ENTER = 13; //엔터키의 키보드 코드 변수 선언
        if (a.keyCode === ENTER) {
            addEvent();
        }
    })
    
    document.addEventListener('click',(event) => {//deletBtn을 전역변수로 설정했으니 
        if(event.target.classList.contains('deleteBtn')){ //클릭한 것이 .deleteBtn 룰 가지고 있으면 
            const delList = event.target.parentElement; // 클릭한 요소의 부모를 삭제할 리스트로 선언해주고
            delList.remove(); //삭제ㅋ
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



