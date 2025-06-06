
import { encrypt_text, decrypt_text } from './js_crypto.js';
import { generateJWT, checkAuth } from './js_jwt_token.js';



function init_logined(){
    if(sessionStorage){
        decrypt_text(); // 복호화 함수  
    }
    else{
        alert("세션 스토리지 지원 x");
    }
}
        document.addEventListener('DOMContentLoaded', () => {
        checkAuth();
        init_logined();
    const logoutBtn = document.getElementById('logout_btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            // 세션, 로컬스토리지 초기화
            sessionStorage.clear(); 
            localStorage.removeItem('jwt_token');

            // 로그인 페이지로 이동
            window.location.href = "./login.html";
        });
    }
});



 