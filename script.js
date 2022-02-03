const result = document.querySelector('.result')
const equals = document.querySelector('.equals')

function insert(value){
    result.innerHTML += value;
}

function clean(){
    result.innerHTML = ''
}


function backspace(){
    if(result.textContent){
        let result1 = document.getElementById('results').innerHTML;
        result.innerHTML = result1.substring(0, result1.length -1)
    }
}

function confirm(){
    if(result.textContent != 'Erro'){
        document.getElementById('results').innerHTML = eval(results.innerHTML)
    }
}