/* 

            // creat array to find factorial using for loop and function


            let a =6
            function factorial(number){
                let fac = 1
                for (let index = 1; index <= number; index++) {
                    fac = fac * index
                }
                return fac
                
            }
            
            console.log( factorial(a))

*/






/*
            //   new way to creat array

            let a=6

            let arr =Array.from(Array(a).keys())
            console.log(arr)

            output :-

            (6) [0, 1, 2, 3, 4, 5] 

*/


/* 
            //   also new way to creat array

            let a=6

            let arr =Array.from(Array(a+1).keys())
            console.log(arr.slice(1,))

            Output :-

            (6) [1, 2, 3, 4, 5, 6] 

*/



/* 

        // Create a factorial using Function and also using reduce function

        let a =6

        function fact(number){
            let arr =Array.from(Array(number+1).keys())
            console.log(arr.slice(1,))
            let Temp = arr.slice(1,).reduce((a,b)=>{
                return a*b
            })    
            return Temp
            // console.log(Temp)

        }    

        fact(a)

        Output :- 720

*/
