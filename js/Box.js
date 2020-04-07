class Box{
    constructor(index, board, parent, x, y){
        this.x = x
        this.y = y
        this.index = index
        this.board = board
        this.parent = parent
        this.BoxId = null
        this.boxHTML = null
        this.iniatial()
        this.hasbomb = false
        this.clickState = true
    }

iniatial(){
    let HTML  = `<div class="box" id="Nr${this.index}"></div>`
    this.board.insertAdjacentHTML('beforeend', HTML)

    this.BoxId = "#Nr"+''+this.index
    this.boxHTML = this.board.querySelector(this.BoxId)
    this.boxHTML.addEventListener("click", (e)=>{this.action(e)}, {once:true})

}
action(e){
    if(this.parent.playState && this.clickState){
    let targetedBox = e.target
        targetedBox.classList.add("box-pressed")
        console.log(this.index)
        this.parent.clickCount++
        this.clickState = false
        console.log((this.parent.boxCount - this.parent.bombsNumber),this.parent.clickCount)
        if(this.parent.boxCount - this.parent.bombsNumber == this.parent.clickCount){
            this.parent.win()
        }
  
        if(this.parent.clickCount === 1){
            this.parent.firstClickId = this.index
            this.parent.createBomb()
        }
        if(this.hasbomb){
           targetedBox.classList.add("expload")
           this.parent.lost()
           return this.parent.playState = false
        }
        this.parent.checkBombs(targetedBox,this.x,this.y,this.index)
    }     
}
addBomb(){
    this.hasbomb = true
}

autoAction(){
    if(this.parent.playState && this.clickState){
        this.parent.clickCount++

        if(this.parent.boxCount - this.parent.bombsNumber == this.parent.clickCount){
            this.parent.win()
        }

        this.boxHTML.classList.add("box-pressed")
        this.clickState = false
        this.parent.checkBombs(this.boxHTML,this.x,this.y,this.index)
    }
}

}
export default Box