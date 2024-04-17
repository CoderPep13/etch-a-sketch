const container = document.querySelector('.container')
const numDivs = document.querySelector('.button')
const resetDivs = document.querySelector('.button2')

function createDiv(input) {
    if(input <= 100) {
        for(i = 0; i < input; i++) {
            const row = document.createElement('div')
            row.classList.add('row')
            container.appendChild(row)
        
        for(j = 0; j < input; j++) {
            const column = document.createElement('div')
            column.classList.add('column')
            row.appendChild(column)
            column.addEventListener('mouseover', function() {
                const randomColor = Math.floor(Math.random()*16777215).toString(16);
                column.style.backgroundColor = '#' + randomColor;
            })
        }}
    } else {
        alert('Too many divs!')
    }
}

function deleteDiv() {
    const grid = document.querySelector('.container')
    const cells = grid.querySelectorAll('div')
    cells.forEach((div) => (div.remove()))
}
        

numDivs.addEventListener('click', () => {
    const input = prompt('How many divs?')
    createDiv(input)
})

resetDivs.addEventListener('click', () => {
    deleteDiv()
})