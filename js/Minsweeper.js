import Box from './Box.js'
import Timer from './Timer.js'
import Counter from './Counter.js'
import Smile from './Smile.js'

class Minesweeper {
    constructor(target, eilutes, stulpeliai, procentaisBombu){
        this.target = target
        this.DOM = null
        this.board = null
        this.header = null
        this.boxCount = null
        this.firstClickId = null
        this.bombsNumber = 0
        this.clickCount = 0
        this.eilutes = eilutes
        this.stulpeliai = stulpeliai
        this.procentaisBombu = procentaisBombu
        this.bombPositions = []
        this.boxes = []
        this.playState = true

        this.timer = null
        this.smile = null
        this.counter = null
        this.initial()
    }
    reset(){
        this.firstClickId = null
        this.bombsNumber = 0
        this.clickCount = 0
        this.boxes = []
        this.playState = true

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

    
    let HTML = `<div class="header"></div>
                <div class="board" style="width: ${boardWidth}px"></div>`
    this.DOM.innerHTML = HTML
    this.board = this.DOM.querySelector(".board")
    this.header = this.DOM.querySelector(".header")

    for(let i =0;i<this.boxCount;i++){
        let y = i%this.eilutes
        let x = Math.floor(i/this.stulpeliai)

       this.boxes.push(new Box(i, this.board, this, y ,x))
        
    }
    this.timer = new Timer(this.header)
    this.smile = new Smile(this.header,this)
    this.counter = new Counter(this.header)
    }

    createBomb(){
        console.log("kuariam boba")

        for(let i=0;i<this.bombsNumber;i++){
            let index =  Math.floor(Math.random() * this.boxCount)
            if(this.bombPositions.indexOf(index) === -1 && index !== this.firstClickId){
             this.bombPositions.push(index)
             this.boxes[index].addBomb()
            }else{
                i--
            }
         }
    }
    checkBombs(box,x,y,index){
        let counter = 0
        
        if(x>0&&y>0&&
            this.boxes[(index - this.eilutes)-1].hasbomb) counter++
        if(y>0&&
            this.boxes[(index - this.eilutes)].hasbomb) counter++
        if(y>0&& x<(this.eilutes-1)&&
            this.boxes[(index - this.eilutes)+1].hasbomb) counter++
        if(x>0 && this.boxes[index-1].hasbomb) counter++
        if(x<(this.eilutes-1) && this.boxes[index+1].hasbomb) counter++
        if(x>0&& y<(this.stulpeliai-1)&&
            this.boxes[(index + this.eilutes)-1].hasbomb) counter++
        if(y<(this.stulpeliai-1)&&
            this.boxes[(index + this.eilutes)].hasbomb) counter++
        if(x<(this.stulpeliai-1)&& y<(this.stulpeliai-1)&&
            this.boxes[(index + this.eilutes)+1].hasbomb) counter++

        if (counter >0){
            box.innerText = counter
        }
        if(counter === 0){
            this.ceckAround(box,x,y,index)
        }    
    }
    ceckAround(box,x,y,index){
        let upLeft = index - this.eilutes -1
        let up = index - this.eilutes
        let upRight = index - this.eilutes + 1
        let Left = index -1
        let Right = index +1
        let bottomLeft = index + this.eilutes -1
        let bottom = index + this.eilutes 
        let bottomRight = index + this.eilutes +1

        if (x>0&&y>0&& upLeft >=0){
            this.boxes[upLeft].autoAction()
        }
        if (y>0&& up >=0){
            this.boxes[up].autoAction()
        }
        if ( y>0 && x<(this.eilutes-1) && upRight >=0){
            this.boxes[upRight].autoAction()
        }
        if (x>0){
            this.boxes[Left].autoAction()
        }
        if (x<(this.eilutes-1)){
            this.boxes[Right].autoAction()
        }
        if (x>0 && y<(this.stulpeliai -1)){
            this.boxes[bottomLeft].autoAction()
        }
        if (y<(this.stulpeliai -1)){
            this.boxes[bottom].autoAction()
        }
        if (x<(this.eilutes-1) && y<(this.stulpeliai -1)){
            this.boxes[bottomRight].autoAction()
        }
   
    }
    lost(){
        this.smile.sad()
    }
    win(){
        this.playState = false 
        this.smile.win()
    }
}

let game = new Minesweeper("game", 10, 10, 5)


