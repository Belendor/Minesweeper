class Smile{
    constructor(targetHTML,parent){
        this.parent = parent
        this.targetHTML = targetHTML
        this.initial()
    }
    initial(){ 
        this.targetHTML.insertAdjacentHTML("beforeend",`<div class="smile">:)</div>`)
        this.targetHTML.addEventListener("click", (e)=>{this.reset(e)})
    }
    reset(){
        
        this.parent.reset()  
    }
    sad(){
        let smileHTML = this.targetHTML.querySelector(".smile")
        smileHTML.innerText = ":("
    }
    win(){
        let smileHTML = this.targetHTML.querySelector(".smile")
        smileHTML.innerText = "B)"
    }
}

export default Smile