class Counter{
    constructor(targetHTML, numberBombs){
        this.targetHTML = targetHTML
        this.numberBombs = numberBombs
        this.initial()
    }
    initial(){
        if(this.numberBombs<100){
            this.numberBombs = "0"+this.numberBombs
        }
        if(this.numberBombs<10){
            this.numberBombs = "0"+this.numberBombs
        }
        this.targetHTML.insertAdjacentHTML("beforeend",`<div class="display count">${this.numberBombs}</div>`)
    }
    convert(number){
        if(number <-99){
            return -99
        }
        if(number <0){
            return "-0"+Math.abs(number)
        }

        if(number<10){
            return "00"+number
        }

        if(number<100){
            return "0"+number
        }  
    }
    bombCount(number){
        let countHTML = this.targetHTML.querySelector(".count").innerHTML
        let skaiciusHTML = parseInt(countHTML,10) + number
        this.targetHTML.querySelector(".count").innerHTML = this.convert(skaiciusHTML)

    }
}

export default Counter