function AsciiTableGen(){
    const M = 16
    const N = 16
    let table = document.createElement("table")
    let root =  document.getElementById('tables')
    root.innerHTML =''
    for (let i = 0; i<M; i++){
        let row = document.createElement("tr")
        for(let j = 1; j<= N ; j++){
            let cell = document.createElement('td')
            cell.innerText = String.fromCharCode(i*M+j)
            row.appendChild(cell)
        }
        table.appendChild(row)
    }
    root.appendChild(table)
}
function isPrime(n) {
   if (n < 2){
       return false
   }
   for (let i = 2;i<=Math.floor(n**0.5);i++){
       if(n % i == 0){
           return false
       }
   }
   return true
}
function getFirstNPrimes(n){
    let arr = []
    let num = 2
    while (arr.length< n){
        if(isPrime(num)){
            arr.push(num)
        }
        num+=1;
    }
    return arr
}

function PrimesTableGen(){
    const M = 16
    const N = 16
    let primes = getFirstNPrimes(M*N)
    let root =  document.getElementById('tables')
    root.innerHTML =''
    let table = document.createElement("table")

    for (let i = 0; i<M; i++){
        let row = document.createElement("tr")
        for(let j = 1; j<= N ; j++){
            let cell = document.createElement('td')

            cell.innerText = primes[i*M+j-1]
            row.appendChild(cell)
        }
        table.appendChild(row)
    }
    root.appendChild(table)

}