axios.defaults.headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
}
const vv=new Vue({
    el:'#app',
    data:{
        goods:[],
        x:2,
        page_:true
    },
    methods:{
       async get01(){
        let result=  await axios.get('http://127.0.0.1:3000/play/new')
        this.goods= result=result.data;
        
           console.log(result);
        }
    },
    mounted(){
        this.get01();
    },
    computed:{
        // async getData(){
        // let result= await axios.get('http://127.0.0.1:3000/play/new')
        //     this.goods=result.data;
        //     return result.data;
        // }
    }
});

// let ss=axios.get('http://127.0.0.1:3000/play/new');
// console.log(ss);