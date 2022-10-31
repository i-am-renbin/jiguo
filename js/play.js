axios.defaults.headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
}
const vv = new Vue({
    el: '#app',
    data: {
        bars: [{ name: '最新', value: true }, { name: '最热', value: false }, { name: '分类', value: false }],
        goods: [],
        hotsGoods:[],
        x: 2,
        active: true,
        tabs:[
            {tab:'content1',value:true},
            {tab:'content2',value:false},
            {tab:'content3',value:false}
        ]
    },
    methods: {
        async get01() {
            let result = await axios.get('http://127.0.0.1:3000/play/new')
            this.goods = result = result.data;

        },
        async get02() {
            let result = await axios.get('http://127.0.0.1:3000/play/hot')
            this.hotsGoods = result = result.data;

        },
        change_() {
            this.x = 4;
        },
        changeTab(item,index){
            
            for(let i =0;i<this.bars.length;i++){
                this.bars[i].value=false;
                this.tabs[i].value=false;
            }
            
            item.value=!item.value
            this.tabs[index].value=true;
            if(index==2){
                
                this.x=4;
            }else{
                this.x=2;
            }
        }
    },
    mounted() {
        this.get01();
        this.get02();
    },
    computed: {
        // async getData(){
        // let result= await axios.get('http://127.0.0.1:3000/play/new')
        //     this.goods=result.data;
        //     return result.data;
        // }
    }
});
