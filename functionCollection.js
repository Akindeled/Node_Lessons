const factorial = function (n){
    let factorial = 1;
    if(n >= 0){
        if(n == 1 || n == 0){
            return factorial
        }
        for(let i = n; i != 0; i --){
            factorial *= i;
        }

        return factorial;
    }
}

const sinValue = function (n){
    if(n > 2*Math.PI  && n < 90){
        n = (Math.PI * n)/180;
        console.log(Math.sin(n))
        return Math.sin(n)
    }else{
        console.log(Math.sin(n))
        return Math.sin(n)
    }
}


const cosValue = function (n){
    if(n > 2*Math.PI  && n < 90){
        n = (Math.PI * n)/180;
        console.log(Math.cos(n))
        return Math.cos(n)
    }else{
        console.log(Math.cos(n))
    }
}

module.exports = {factorial,sinValue,cosValue};
console.log(module.exports)

// console.log(module.export.sineValue(30))