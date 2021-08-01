const app = Vue.createApp({
    data(){
        return{
           newComment:'',
           comments:[
                    "Hello There",
                    'How are you',
                    "it's wonderful"
           ],
           isActive:false,
           like:0
        }
    },
    methods:{
    addComment(){
     if (this.newComment!=''){
        this.comments.push(this.newComment)
        this.newComment=''
       }
    },
    Like(){
        this.like++
    }
},
})

app.mount('#app')