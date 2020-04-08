class Timer{
    constructor(targetHTML){
        this.HTML = null
        this.targetHTML = targetHTML
        this.time = 1
        this.clock = null
        this.initial()
    }
    initial(){
        this.targetHTML.insertAdjacentHTML("beforeend",`<div class="display timer">000</div>`)
  
    }
    start(){
        this.clock = setInterval(()=>{
            this.targetHTML.querySelector(".timer").innerText = this.convert(this.time)
            this.time++
        },1000)
    }
    end(){
        clearInterval(this.clock)
    }
    convert(number){
        if(number>999){
            return 999
        }

        if(number<10){
            return "00"+number
        }

        if(number<100){
            return "0"+number
        } 
        return number
    }
    
}

export default Timer