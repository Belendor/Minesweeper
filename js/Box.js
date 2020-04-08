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
        this.toggle = -1
    }

iniatial(){
    let HTML  = `<div class="box" id="Nr${this.index}"></div>`
    this.board.insertAdjacentHTML('beforeend', HTML)

    this.BoxId = "#Nr"+''+this.index
    this.boxHTML = this.board.querySelector(this.BoxId)
    this.boxHTML.addEventListener("click", (e)=>{this.action(e)}, {once:true})
    this.boxHTML.addEventListener("contextmenu", (e)=>{this.rightClick(e)})
    

}
rightClick(e){
    e.preventDefault()
    if(this.clickState){
        this.boxHTML.classList.toggle("flag")   
        if(this.toggle === 1){
            this.parent.bombCount(1)
            return this.toggle = -1
        }
        if(this.toggle === -1){
            this.parent.bombCount(-1)
            return this.toggle = 1
        }

    }
   
        
    
}
action(e){
    if(this.parent.playState && this.clickState && !this.boxHTML.classList.contains("flag")){
    let targetedBox = e.target

    if(this.boxHTML.classList.contains("flag")){
        this.parent.bombCount(1)
        this.boxHTML.classList.remove("flag")
    }
        targetedBox.classList.add("box-pressed")

        this.parent.clickCount++
        this.clickState = false
        if(this.parent.boxCount - this.parent.bombsNumber == this.parent.clickCount){
            this.parent.win()
        }
  
        if(this.parent.clickCount === 1){
            this.parent.firstClickId = this.index
            this.parent.createBomb()
            this.parent.startTimer()
        }
        if(this.hasbomb){
           targetedBox.classList.add("expload")
           this.parent.lost()
           return this.parent.playState = false
        }
        this.parent.checkBombs(targetedBox,this.x,this.y,this.index)
        
    }else if(this.boxHTML.classList.contains("flag")){
        this.boxHTML.addEventListener("click", (e)=>{this.action(e)}, {once:true})
    }
         
}
addBomb(){
    this.hasbomb = true
}
showMine(){
    this.boxHTML.innerHTML = "B"
}

autoAction(){
    if(this.parent.playState && this.clickState){
        this.parent.clickCount++

        if(this.boxHTML.classList.contains("flag")){
            this.parent.bombCount(1)
            this.boxHTML.classList.remove("flag")
        }

        if(this.parent.boxCount - this.parent.bombsNumber == this.parent.clickCount){
            this.parent.win()
        }
        
        this.boxHTML.classList.add("box-pressed")
        this.clickState = false
        this.parent.checkBombs(this.boxHTML,this.x,this.y,this.index)

        if(this.boxHTML.classList.contains("flag")){
            this.parent.bombCount(1)
            this.boxHTML.classList.remove("flag")
        }
    }
}

}
export default Box