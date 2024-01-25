
document.addEventListener('DOMContentLoaded', () => {
    //id 입력창
    let idInput = document.getElementById('id'); 
    //id 성공 메시지
    let idO = document.getElementsByClassName('successMessage');
    //id 길이 실패 메시지
    let idLength = document.getElementsByClassName('failMessage');
    //id 문자 실패 메시지
    let idspell = document.getElementsByClassName('failMessage2'); 

    // 비밀번호 입력창
    let pwInput = document.getElementById('password');
    // 비밀번호 확인 입력창 
    let pwInputRetype = document.getElementById('passwordRetype'); 
    // 실패 메시지 정보 가져오기 (8글자 이상, 영문, 숫자, 특수문자 미사용)
    let pwLength = document.getElementsByClassName('pwLength'); 
    // 실패 메시지 정보 가져오기 (비밀번호 불일치)
    let pwspell = document.getElementsByClassName('pwSpell'); 

    //console.log(pwspell);

    function idLengthfx(value){ //id길이 판별함수. 4이상 12이하면 true, 아니면 false 리턴 함수
        return value.length >= 4 && value.length <=12;
    }

    function idSpellfx(str){
        //id 내 특수문자 판별함수. 입력된 값 안에 특수문자가 있으면 true 아니면 false 반환
        return /^[A-Za-z0-9][A-Za-z0-9]*$/.test(str);
        //.test() : 문자열에 일치하는 부분이 있는지 확인. true 또는 false를 반환
    }
    function pwFirstfx(str){ //비밀번호 최소 8글자, 알파벳 숫자 특수문자가 하나 이상 포함되면 true
        return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(str);
    }
    function pwMatchfx(password1, password2){
        return password1 === password2 ;
    }

    idInput.addEventListener('keyup', () => { //ID 유효성 검사
        //값을 입력한 경우
        if(idInput.value.length !== 0 ){
            idspell[0].classList.toggle('hidden',idSpellfx(idInput.value));
            /*
            if(idSpellfx(idInput.value) === false){
                //특수문자가 있으면 true, 없으면 false.
                idspell[0].classList.remove('hidden');//영어 또는 숫자만 가능합니다
            } else{
                idspell[0].classList.add('hidden');//영어 또는 숫자만 가능합니다
            }
            */ 

            idLength[0].classList.toggle('hidden',idLengthfx(idInput.value));
            /*
            if(idLengthfx(idInput.value) === false){
                idLength[0].classList.remove('hidden');//아이디는 4~12글자이어야 합니다
            }else{
                idLength[0].classList.add('hidden');//아이디는 4~12글자이어야 합니다
            }
            */

            /*
            이거 넣는순간 오류메시지랑 같이 뜬다. 왜 이런지 알아봐야할 듯
            idO[0].classList.toggle('hidden',idSpellfx(idInput.value) && idLengthfx(idInput.value));
            */
            
            if(idSpellfx(idInput.value) && idLengthfx(idInput.value)){
                idO[0].classList.remove('hidden');//사용할 수 있는 아이디입니다
            }else{
                idO[0].classList.add('hidden');
            }
            
        }else {
            idspell[0].classList.add('hidden');
            idLength[0].classList.add('hidden');
            idO[0].classList.add('hidden');
        }
    }) 

    pwInput.addEventListener('keyup', () => { //PW 유효성 검사
        if(pwInput.value.length !== 0 ){
            pwLength[0].classList.toggle('hidden',pwFirstfx(pwInput.value));
            /*
            if(pwFirstfx(pwInput.value) === false){
                pwLength[0].classList.remove('hidden'); 
                //8글자 이상, 영문, 숫자, 특수문자(@$!%*#?&)를 사용하세요
            }else {
                pwLength[0].classList.add('hidden');
            }*/
        }else{
            pwLength[0].classList.add('hidden');
        }
    })
    
    pwInputRetype.addEventListener('keyup', () => { //pw 확인 일치 검사
        if(pwInputRetype.value.length !== 0){
            pwspell[0].classList.toggle('hidden', pwMatchfx(pwInput.value, pwInputRetype.value));
        }
    })

 })

/*
- true, false 값을 구해야한다면 return 써주기

1. 아이디 유효성검사
2. 비밀번호 유효성검사
3. 비밀번호 일치 확인
4. 조건 미충족시 버튼 비활성화
5. 완료시 웰컴페이지로 이동
*/



