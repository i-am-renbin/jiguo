axios.defaults.headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
}
const vv = new Vue({
    el: '#app',
    data: {
        bars: [{ name: '大众试用', value: true }, { name: '体验师试用', value: false }],
        navs: [{ name: '全部', value: true }, { name: '申请中', value: false }, { name: '试用中', value: false }, { name: '已结束', value: false }],
        active: true,
        tabs: [
            { tab: 'content1', value: true },
            { tab: 'content2', value: false },
            { tab: 'content3', value: false },
            { tab: 'content4', value: false }
        ],
        uses: [],
        uses2:[]
    },
    methods: {
        async getData() {
            let result = await axios.get('http://127.0.0.1:3000/useing/public')
            this.uses = result = result.data;

        },
        async getData2() {
            let result = await axios.get('http://127.0.0.1:3000/useing/master')
            this.uses2 = result = result.data;

        },
        changeTab(item, index) {
            for (let i = 0; i < this.bars.length; i++) {
                this.bars[i].value = false;
            }
            this.bars[index].value = true;
        },
        changeNav(item, index) {
            for (let i = 0; i < this.navs.length; i++) {
                this.navs[i].value = false;
                this.tabs[i].value = false;
            }
            this.navs[index].value = true;
            this.tabs[index].value = true;

        }

    },
    mounted() {
        this.getData();
        this.getData2();

    },
});