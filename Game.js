const gameButton = document.getElementById("game")
const field = []
for(let i = 0; i < 8; i++){
    const array = []
    for(let j = 0; j < 8; j++){
        array.push({
            canGo: true,
            steps: 0
        })
    }
    field.push(array)
}
field[2][3].canGo = false

gameButton.onclick = function(){
    //console.log(field)
    gameRender() 
}

let table
// let table = document.getElementById("table")

// table.onclick = function(event){
//     const i = Number(event.target.dataset.id[0])
//     const j = Number(event.target.dataset.id[1])
//     field[i][j].canGo = !field[i][j].canGo
//     gameRender()
// }

function gameRender(){
    site.innerHTML = ''
    site.insertAdjacentHTML('beforeend', '<table class="table-secondary" id="table"></table>')
    table = document.getElementById("table")
    console.log(table)
    
    for(let i = 0; i < 8; i++){
        let line = `<tr class="table-secondary" id="line${i}"></tr>`
        table.insertAdjacentHTML('beforeend', line)
        const linei = document.getElementById('line' + i)
        for(let j = 0; j < 8; j++){
            linei.insertAdjacentHTML('beforeend', getCellTemplate(i, j))
        }           
    }

    table.onclick = function(event){
        const i = Number(event.target.dataset.id[0])
        const j = Number(event.target.dataset.id[1])
        field[i][j].canGo = !field[i][j].canGo
        gameRender()
    }
}

function getCellTemplate(i, j){
    return`
    <td>
        <button class="btn btn-lg btn-${field[Number(i)][Number(j)].canGo ? 'success' : 'warning'}" data-id="${String(i) + String(j)}">X</button>
    </td>

    `
}

