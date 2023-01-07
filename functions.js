// function sine(n){
//     // console.log(n)
//     let sineValue = 0;
//     let toggle = 0;
//     for (let i = 1; i < 6; i++) {
//     //   console.log(i)
//         if(i % 2){
//         //    console.log(i)
//             if(toggle == 0){
//                 let index = 1
//                 // sineValue += (euler**i)/factorial(i);
//                 sineValue += (index*((euler**i)/factorial(i)));
//                 console.log(sineValue)
//                 toggle = 1;
//             }
//             else{
//                 let index = -1
//                 sineValue += (index*((euler**i)/factorial(i)));
//                 console.log(index)
//                 toggle = 0;
//             }
//         }
//     }
//     // console.log(sineValue)
// }

/*      Region of Enscapulation Ends Here       */



function factorial(n){
    let factorial = 1;
    if(n > 0){
        for (let i = n; i > 0; i--) {
            factorial *= i
        }
        console.log(factorial)
        return factorial;
    }
    else if(n == 0){
        console.log(factorial)
        return factorial
    }
    else{
        console.log("Invalid Value")
        return;
    }
}
// Good Work...

function sineValue(n){
    const pi = 3.1415926535897932384626433832795;
    const euler = 2.7182818284590452353602874713527;
    if (n < (2*pi)){
        // We assume the value is in deg...go ahead to evaluate the sine.
        // function sine(ni){
            // console.log(n)
            let sineValue = 0;
            let toggle = 0;
            for (let i = 1; i < 6; i++) {
            //   console.log(i)
                if(i % 2){
                //    console.log(i)
                    if(toggle == 0){
                        let index = 1
                        // sineValue += (euler**i)/factorial(i);
                        sineValue += (index*((euler**i)/factorial(i)));
                        // console.log(sineValue)
                        toggle = 1;
                    }
                    else{
                        let index = -1
                        sineValue += (index*((euler**i)/factorial(i)));
                        // console.log(index)
                        toggle = 0;
                    }
                }
            }
            console.log(sineValue)
    }
    else{
        n = (pi * n)/180;
            let sineValue = 0;
            let toggle = 0;
            for (let i = 1; i < 6; i++) {
            //   console.log(i)
                if(i % 2){
                //    console.log(i)
                    if(toggle == 0){
                        let index = 1
                        // sineValue += (euler**i)/factorial(i);
                        sineValue += (index*((euler**i)/factorial(i)));
                        console.log(sineValue)
                        toggle = 1;
                    }
                    else{
                        let index = -1
                        sineValue += (index*((euler**i)/factorial(i)));
                        console.log(index)
                        toggle = 0;
                    }
                }
            }
            console.log(sineValue)
    }
}

sineValue(360)