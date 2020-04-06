class Counter{
    constructor(targetHTML){
        this.targetHTML = targetHTML
        this.initial()
    }
    initial(){
        this.targetHTML.insertAdjacentHTML("beforeend",`<div class="display count">002</div>`)
    }
}

export default Counter