class Box{
    constructor(index, board, parent){
        this.index = index
        this.board = board
        this.parent = parent
        this.BoxId = null
        this.boxHTML = null
        this.iniatial()
    }

iniatial(){
    let HTML  = `<div class="box" id="Nr${this.index}"></div>`
    this.board.insertAdjacentHTML('beforeend', HTML)

    this.BoxId = "#Nr"+''+this.index
    this.boxHTML = this.board.querySelector(this.BoxId)
    this.boxHTML.addEventListener("click", (e)=>{this.action(e)})

}
action(e){
    let targetedBox = e.target
        targetedBox.classList.add("box-pressed")

        this.parent.clickCount++
    
        
        if(this.parent.clickCount === 1){
            this.parent.firstClickId = this.index
            this.parent.createBomb()
        }
        
}

}
export default Box