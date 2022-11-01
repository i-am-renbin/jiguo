function setCookie(key, val, time) {
    var date = new Date();
    date.setDate(date.getDate() + time);
    document.cookie = `${key}=${val};expires=${date}`;
}

function getCookie(key) {
    var arr = document.cookie.split('; ');
    for (var item of arr) {
        var newArry = item.split('=');
        if (newArry[0] == key) {
            return newArry[1];
        }
    }
}


function delCookie(key) {
    this.setCookie(key, '', -1);
}

function clearCookie() {
    var clearArry = document.cookie.split('; ');
    for (var item of clearArry) {
        var newArry = item.split('=');
        this.delCookie(newArry[0]);
    }
}