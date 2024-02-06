
document.addEventListener('DOMContentLoaded', () => {
    const seatWrap = document.querySelector('.seatWrap'); //querySelect('.seat') 으로 가져오면 배열로 불러와져 몇번째 .seat인지 일일히 지정해줘야 함. 그래서 seatWrap에서 event.target.className 으로 가져오기

    const movie = document.getElementById('selecMovie'); //선택된 영화 
    let moviePrice = Number(movie.value); //선택된 영화의 가격

    let count = document.getElementById('count'); //인원수 선언
    let price = document.getElementById('price'); //가격 선언

    const visualSection = document.querySelector('.poster')

    seatWrap.addEventListener('click', (e) => {
        if ( e.target.className === 'seat'){ // 클릭한 요소가 .seat을 가졌을 때 
            e.target.classList.add('selecSeat'); //해당 요소에 .selectSeat을 추가
        }else{//아니면 (여기선 selectSeta을 이미 가진 경우)
            e.target.classList.remove('selecSeat') //클릭한 요소에서 selectSeat을 제거
        }
        countPrice(); //클릭이벤트가 발생할 때 마다 선택한 좌석 수, 가격을 갱신하도록 함수 실행
    })

    function countPrice(){
        const selectedSeat = document.querySelectorAll('.seatWrap .selecSeat').length; //.seatWrap 안의 .selectSeat의 갯수 선언
        
        count.innerHTML = selectedSeat; //#count에 selectSeat 숫자 넣기
        price.innerHTML = numberWithCommas(selectedSeat*moviePrice); //#price에 선택된 좌석(selectSeat) 수와 영화가격(moviePrice)을 곱한 값 ㄴ허기
    }
    movie.addEventListener('change', (e) =>{ //영화 종류가 바뀌는 이벤트를 인식하게 하기
        moviePrice = Number(e.target.value);//바뀐 요소의 value를 문자열에서 Number()로 숫자로 변경
        countPrice();//그리고 바뀔 때 마다 선택된 좌석 수와 가격 정보 업데이트 되는 함수 재실행
        
        visualSection.classList.remove(visualSection.classList[1]);
        visualSection.classList.add(`poster${e.target.selectedIndex}`);
    })
    function numberWithCommas(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }



})





