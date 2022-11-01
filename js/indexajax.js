

function comajax() {
    var result = [];
    $.ajax({
        url: 'http://127.0.0.1:3000/play/new',
        type: 'get',
        data: [],
        async: false,
        success: function (data) {
            result = data;
            console.log(result);
        }
    });
    return result;
}
let dt = comajax();
let vue_ = new Vue({
    el: '.fplay',
    data: {
        num: 2,
        list: dt
    },
    methods: {
        dianji() {
            this.num = 4;
        }
    }
});
