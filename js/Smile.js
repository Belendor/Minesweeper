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
}

export default Smile