class Minesweeper {
    constructor(target, eilutes, stulpeliai, procentaisBombu){
        this.target = target
        this.eilutes = eilutes
        this.stulpeliai = stulpeliai
        this.procentaisBombu = procentaisBombu
        this.initial()
    }

    initial(){
    let DOM = document.getElementById(this.target)
    if (!DOM){
        throw "blogas target"
    }

    this.target = DOM
    let box = ""
    let boardWidth = this.eilutes *30

    let boxCount = this.stulpeliai * this.eilutes
    for(let i =0;i<boxCount;i++){
        box += ` <div class="box">${i}</div>`
    }

    let HTML = `<div class="header">
                    <div class="display timer">001</div>
                    <div class="smile">:)</div>
                    <div class="display count">002</div>
                </div>
                <div class="board" style="width: ${boardWidth}px">${box}</div>`
    DOM.innerHTML = HTML

    let boxesHTML = DOM.querySelectorAll(".box")

    for (let i =0;i<boxesHTML.length;i++){
        let singleBox = boxesHTML[i]
        singleBox.addEventListener("click", (e)=>{return this.evenListeners(e)})
    }
}
   evenListeners(par){
    let targetedBox = par.target
        targetedBox.classList.add("box-pressed")
        console.log(targetedBox);
        
   } 
}

let game = new Minesweeper("game", 20, 20, 20)


