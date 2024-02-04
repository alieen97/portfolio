
document.addEventListener('DOMContentLoaded', () => {
//function check(){
    let nameInput = document.getElementById('name'); 
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

    let emailInput = document.getElementById('email_id');

    //제출버튼
    let submitBtn= document.getElementById('submit');
    //let submitBtn= document.getElementByClass('submit'); < 처음에는 이렇게 했는데.. class는 여러 요소를 지정할  수 있고, id는 고유한 값이기 떄문에 class로 찾게 하면 여러 값을 뱉기 위해 배열로 표시하게 됨. 그래서 class로 했을 때는 제대로 못찾는거. 이때는 [0] 이렇게 몇번째꺼인지 지정해줘야함.
    let clearBtn= document.getElementById('clear');

    submitBtn.addEventListener('click', () => {
       // alert('a');
       if(nameInput.value.length === 0 ){
            alert("닉네임을 입력해주세요");
            nameInput.focus();
            return false;
       }else if(idInput.value.length === 0){
            alert("아이디을 입력해주세요");
            idInput.focus();
            return false;
       }else if(!idSpellfx(idInput.value) || !idLengthfx(idInput.value)){
            alert('아이디를 다시 한번 확인해주세요.');
            idInput.focus();
            return false;
       }else if (pwInput.value.length === 0) {
        alert('비밀번호를 입력해주세요.');
        pwInput.focus();
        return false;
        } else if (!pwFirstfx(pwInput.value)) {
            alert('비밀번호는 8글자 이상이어야 하며, 영문, 숫자, 특수문자를 포함해야 합니다.');
            pwInput.focus();
            return false;
        } else if (pwInput.value !== pwInputRetype.value) {
            alert('비밀번호와 비밀번호 확인 값이 일치하지 않습니다.');
            pwInputRetype.focus();
            return false;
        } else if (emailInput.value.length === 0 ){
            alert('이메일을 입력해주세요.');
            emailInput.focus();
        } else if (document.getElementById('phone_num_fir').value.length === 0 ) {
            alert('전화번호를 입력해주세요.');
            document.getElementById('phone_num_fir').focus();
        } else if (document.getElementById('phone_num_scd').value.length === 0 ) {
            alert('전화번호를 입력해주세요.');
            document.getElementById('phone_num_scd').focus();
        } else if (document.getElementById('phone_num_thd').value.length === 0 ) {
            alert('전화번호를 입력해주세요.');
            document.getElementById('phone_num_thd').focus();
        } else {
            alert(nameInput.value + '님 환영합니다.');
            nameInput.value = '';
            idInput.value = '';
            pwInput.value = '';
            pwInputRetype.value = '';
            emailInput.value = '';
            document.getElementById('phone_num_fir').value = '';
            document.getElementById('phone_num_scd').value = '';
            document.getElementById('phone_num_thd').value = '';
            window.location.href = "welcome.html";
        }
    });
    clearBtn.addEventListener('click', () => {
        if(confirm("정말 전부 지우시겠습니까?")){
            nameInput.value = '';
            idInput.value = '';
            pwInput.value = '';
            pwInputRetype.value = '';
            emailInput.value = '';
            document.getElementById('phone_num_fir').value = '';
            document.getElementById('phone_num_scd').value = '';
            document.getElementById('phone_num_thd').value = '';
            alert("정상적으로 삭제하었습니다."); //비운 후 알럿창으로 정상삭제 알리기
            window.scrollTo(0,0);
        }else{
            //취소했을 때엔 그냥 아무동작 x
        }
    })
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
    function checkPasswordMatch() {
        // 비밀번호와 비밀번호 확인 값이 일치하는지 확인하여 메시지 표시
        if (pwInput.value !== pwInputRetype.value) {
            pwspell[0].classList.remove('hidden'); // 비밀번호 불일치 메시지 표시
        } else {
            pwspell[0].classList.add('hidden'); // 메시지 숨김
        }
    }
    idInput.addEventListener('keyup', () => { //ID 유효성 검사
        //값을 입력한 경우
        if(idInput.value.length !== 0 ){
            //alert('아이디를 다시 확인해주세요.');
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
                return false;
            }else{
                idO[0].classList.add('hidden');
                return false;
            }
            return false;
            
        }else {
            //alert('아이디를 입력해주세요.');
            idspell[0].classList.add('hidden');
            idLength[0].classList.add('hidden');
            idO[0].classList.add('hidden');
            return false;
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
            if(pwInputRetype.value.length!==0){checkPasswordMatch();}
            return false;
            
        }else{
            pwLength[0].classList.add('hidden');
            pwspell[0].classList.add('hidden');
            return false;
        }
    })
    
    pwInputRetype.addEventListener('keyup', () => { //pw 확인 일치 검사
        if(pwInputRetype.value.length !== 0){
            pwspell[0].classList.toggle('hidden', pwMatchfx(pwInput.value, pwInputRetype.value));
            checkPasswordMatch();
            return false;
        }else{
            pwspell[0].classList.add('hidden');
            return false;
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



