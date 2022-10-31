let vue = new Vue({
    el: '#focuscontent',
    data: {
        people: 126,
        stage: 20,
        bol: false,
        mom: '立即申请',
        day: 13,
        hour: 5,
        min: 37,
        timer: ''
    },
    methods: {
        apply() {
            this.people = this.people + 1;
            if (this.stage == 0) {
                this.bol = true;
                this.mom = '已抢完';
                return;
            } else {
                this.stage = this.stage - 1;
            }
        },
        ftime() {
            let nortime = new Date();
            let forward = new Date(2022, 11, 7);
            let cha = forward - nortime;
            let day_ = Math.floor(cha / 1000 / 60 / 60 / 24);
            let hour_ = Math.floor(cha / 1000 / 60 / 60 % 24);
            let min_ = Math.floor(cha / 1000 / 60 % 60);
            this.day = day_;
            this.hour = hour_;
            this.min = min_;

            if (cha == 0) {
                clearInterval(this.timer);
            }
        },
        ftime_() {
            this.timer = setInterval(this.ftime, 1);

        },



    },
    mounted() {
        this.ftime_();
    }
});