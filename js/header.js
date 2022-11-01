let vueheader = new Vue({
    el: '.header',
    data: {
        list: [{ navname: '首页', ads: '../index.html', ac: true }, { navname: '酷玩', ads: '../play/play.html', ac: false }, { navname: '导购', ads: '../guid.html', ac: false }, { navname: '试用', ads: '../use/use.html', ac: false }, { navname: '报告', ads: '../report/report.html', ac: false }]
    },
    methods: {
        navbtn(index) {
            for (var i = 0; i < this.list.length; i++) {
                this.list[i].ac = false;
            }
            this.list[index].ac = true;
        }
    }
});