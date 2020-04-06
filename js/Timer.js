class Timer{
    constructor(targetHTML){
        
        this.targetHTML = targetHTML
        this.initial()
    }
    initial(){
        this.targetHTML.insertAdjacentHTML("beforeend",`<div class="display timer">003</div>`)
        
    }
    
}

export default Timer