let n= prompt("enter the number the choose");
 let arr=[];
 for(let i=1; i<=n; i++){
    arr[i-1]=i;

 }
 console.log(arr);

 let sum= arr.reduce((result, curr)=>{
    return result + curr;
     })
     console.log(sum);
    
     let fact= arr.reduce((result, curr)=>{
        return result * curr;
         })
         console.log(fact)
      