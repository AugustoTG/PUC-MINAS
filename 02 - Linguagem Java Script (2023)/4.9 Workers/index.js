let wk = new Worker ('soma.js')

wk.postMessage([5, 3])

wk.onmessage = function(e){
    console.log(e.data)
}