if (getCookie('rember')) {
    document.getElementById('username').value = getCookie('username');
    document.getElementById('password').value = getCookie('password');
    document.getElementById('rember').checked = getCookie('rember');
}
function login() {
    var user_ = document.getElementById('username').value;
    var psd_ = document.getElementById('password').value;
    var rember_ = document.getElementById('rember').checked;
    if (rember_) {
        setCookie('username', user_);
        setCookie('password', psd_);
        setCookie('rember', rember_);
    } else {
        removeCookie('username');
        removeCookie('password');
        removeCookie('rember');
    }
}

let submit = document.getElementById('submit');
submit.onclick = () => {
    let reg1 = /^[a-zA-Z0-9\u4E00-\u9FA5]{4,12}$/;
    let reg2 = /^\w{6,12}$/;
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    let rember = document.getElementById('rember');
    if (reg1.test(username.value) && reg2.test(password.value)) {
        if (rember.checked) {
            setCookie('username', username.value, 1)
            setCookie('password', password.value, 1)
            setCookie('rember', rember.checked, 1)
            alert('登录成功')
            login();
            window.location.href = 'index.html'

        } else {
            alert('登录成功')
            window.location.href = 'index.html'
        }
    }
}