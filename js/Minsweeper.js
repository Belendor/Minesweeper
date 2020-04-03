import Box from './Box.js'

class Minesweeper {
    constructor(target, eilutes, stulpeliai, procentaisBombu){
        this.target = target
        this.DOM = null
        this.board = null
        this.boxCount = null
        this.firstClickId = null
        this.bombsNumber = 0
        this.clickCount = 0
        this.eilutes = eilutes
        this.stulpeliai = stulpeliai
        this.procentaisBombu = procentaisBombu
        this.bombPositions = []
        this.initial()
        
    }

    initial(){

    let DOM = document.getElementById(this.target)
    if (!DOM){
        throw "blogas target"
    }
    this.DOM = DOM
    
    this.boxCount = this.stulpeliai * this.eilutes
    this.bombsNumber =  Math.floor(this.procentaisBombu * this.boxCount / 100)
    let boardWidth = this.eilutes *30

    

    let HTML = `<div class="header">
                    <div class="display timer">001</div>
                    <div class="smile">:)</div>
                    <div class="display count">002</div>
                </div>
                <div class="board" style="width: ${boardWidth}px"></div>`
    this.DOM.innerHTML = HTML
    this.board = this.DOM.querySelector(".board")

    for(let i =0;i<this.boxCount;i++){
        new Box(i, this.board, this)

    }
   

    }
    createBomb(){
        console.log("kuariam bmba")

        for(let i=0;i<this.bombsNumber;i++){
            let index =  Math.floor(Math.random() * this.boxCount)
      
            if(this.bombPositions.indexOf(index) === -1 && index !== this.firstClickId){
            let boxId = "#Nr"+""+index
            let boxWithBomb = this.board.querySelector(boxId)
            boxWithBomb.innerText = "B"
            
             this.bombPositions.push(index)
            }else{
                i--
            }
         }
         console.log(this.bombPositions);
         
    }

}

let game = new Minesweeper("game", 10, 10, 20)


