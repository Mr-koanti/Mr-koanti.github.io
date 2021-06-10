class Calculator{
    constructor(previosOperandTextElement,currentOperandTextElement)
    {
        this.previosOperandTextElement=previosOperandTextElement
        this.currentOperandTextElement=currentOperandTextElement
        this.clear()
    }
    clear(){
        this.currentOperand= ''
        this.previosOperand= ''
        this.operation= undefined

    }
    delete(){

    }
    appendNumber(number){
        this.currentOperand=number

    }
    chooseOperation(operation){

    }
    compute(){

    }
    updateDisplay(){
        this.currentOperandTextElement.innerText=this.currentOperand
    }


}

const numberButtons = document.getElementsByClassName("numbtn")
const operationButtons = document.getElementsByClassName("opr")
const equalsButton = document.getElementById("eval")
const deleteButton = document.getElementById("del")
const allClearButton = document.getElementById("clr")
const previosOperandTextElement = document.getElementsByClassName("pre-opernd")
const currentOperandTextElement = document.getElementsByClassName("current-opernd")

const calculator= new Calculator(previosOperandTextElement,currentOperandTextElement)

numberButtons.forEach( button => {
    button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
    })
})                                                                                                          