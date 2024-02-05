
document.addEventListener('DOMContentLoaded', () => {
    const seatWrap = document.querySelector('.seatWrap'); //querySelect('.seat') 으로 가져오면 배열로 불러와져 몇번째 .seat인지 일일히 지정해줘야 함. 그래서 seatWrap에서 event.target.className 으로 가져오기

    const movie = document.getElementById('selecMovie'); //선택된 영화 
    let moviePrice = Number(movie.value); //선택된 영화의 가격

    let count = document.getElementById('count'); //인원수 선언
    let price = document.getElementById('price'); //가격 선언

    seatWrap.addEventListener('click', (e) => {
        if ( e.target.className === 'seat'){
            e.target.classList.add('selecSeat');
        }else{
            e.target.classList.remove('selecSeat')
        }
    })
})





