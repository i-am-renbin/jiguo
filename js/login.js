let username = document.getElementById('.username');
let password = document.getElementById('.password');
let rember = document.getElementById('.rember');
if (getCookie('rember')) {
    document.getElementById('.username').value = getCookie('username')
    document.getElementById('.password').value = getCookie('password')
    document.getElementById('.rember').checked = getCookie('rember')
}

// 用户名检测
username.onblur = function () {
    let reg = /^[a-zA-Z0-9\u4E00-\u9FA5]{4,12}$/;

    if (reg.test(username.value)) {
        this.nextElementSibling.className = 'ok'
        this.nextElementSibling.firstChild.nodeValue = '输入正确'
    } else {
        this.nextElementSibling.firstChild.nodeValue = '请正确输入'

        this.nextElementSibling.className = 'error'
    }

}

// 密码检测
password.onblur = function () {
    let reg = /^\w{6,12}$/;

    if (reg.test(password.value)) {
        this.nextElementSibling.className = 'ok'
        this.nextElementSibling.firstChild.nodeValue = '输入正确'
    } else {
        this.nextElementSibling.firstChild.nodeValue = '请正确输入'

        this.nextElementSibling.className = 'error'
    }
}


let loginbut = document.querySelector('.loginput');
loginbut.onclick = () => {
    let reg1 = /^[a-zA-Z0-9\u4E00-\u9FA5]{4,12}$/;
    let reg2 = /^\w{6,12}$/;
    let username = document.querySelector('.username');
    let password = document.querySelector('.password');
    let rember = document.querySelector('.rember');
    if (reg1.test(username.value) && reg2.test(password.value)) {
        if (rember.checked) {
            setCookie('username', username.value, 1)
            setCookie('password', password.value, 1)
            setCookie('rember', rember.checked, 1)
            alert('登录成功')
            window.location.href = './index.html'

        } else {
            alert('登录成功')
            window.location.href = '../index.html'
        }
    }
}