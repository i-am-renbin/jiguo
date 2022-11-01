function guidajax(adress) {
    var result = [];
    $.ajax({
        url: adress,
        type: 'get',
        data: [],
        async: false,
        success: function (data) {
            result = data;
            // console.log(result);
        }
    });
    return result;
}

let guid01 = guidajax('http://127.0.0.1:3000/guid/new');
let guid02 = guidajax('http://127.0.0.1:3000/guid/hot');

// console.log(guid01);
// console.log(guid02);
let guidvue = new Vue({
    el: '.box',
    data: {
        num: 8,
        glist01: guid01,
        glist02: guid02,
        glist: guid01,
        arr: [{ zui: '最新', bol: true }, { zui: '最热', bol: false }]
    },
    methods: {
        dianji() {
            this.num = 15;
        },
        zuibtn(index) {
            for (var i = 0; i < this.arr.length; i++) {
                this.arr[i].bol = false;
            }
            this.arr[index].bol = true;
            if (index == 0) {
                this.glist = this.glist01;
            }
            if (index == 1) {
                this.glist = this.glist02;
            }

        }
    }
});






