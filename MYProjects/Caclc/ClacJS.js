



const numberButtons = document.getElementsByClassName("numbtn")
const operationButtons = document.getElementsByClassName("opr")
const equalsButton = document.getElementById("eval")
const deleteButton = document.getElementById("del")
const allClearButton = document.getElementById("clr")
const previosOperandTextElement = document.getElementsByClassName("pre-opernd")
const currentOperandTextElement = document.getElementsByClassName("current-opernd")


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previosOperandTextElement = document.querySelector('[data-previos-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')