let count = 0
let saveText = document.getElementById("save-text")
let counterNumber = document.getElementById("counter-header")

function increment(){
    count += 1
    counterNumber.textContent = count
}

function save() {
    let countString = count + " - "
    saveText.textContent += countString

    // Restart the Counter
    count = 0
    counterNumber.textContent = 0
}

function reset(){
    saveText.textContent = " Previous Counts "
}