import { ok } from "node:assert";

import { Result, makeFailure, makeOk, bind, either,isOk } from "../lib/result";

/* Library code */
const findOrThrow = <T>(pred: (x: T) => boolean, a: T[]): T => {
    for (let i = 0; i < a.length; i++) {
        if (pred(a[i])) return a[i];
    }
    throw "No element found.";
}

export const findResult =<T>(pred: (x: T) => boolean, a: T[]):Result<T> =>{
    for(let i=0; i< a.length; i++){
        if(pred(a[i]))
        return (makeOk(a[i]))
    }
    return makeFailure(" no such element exists")
    
}  

/* Client code */
const returnSquaredIfFoundEven_v1 = (a: number[]): number => {
    try {
        const x = findOrThrow(x => x % 2 === 0, a);
        return x * x;
    } catch (e) {
        return -1;
    }
}

export const returnSquaredIfFoundEven_v2 = (a: number[]): Result<number> => {
//    const bindFun= R.bind(findResult(((x:number) => {return x%2==0}),a)
//                     (res:Result<number>) => isOk(res)?makeOk(res.value*res.value):makeFailure("no such element") )
  
  const check=  ((res:Result<number>) => 
        isOk(res)?makeOk(res.value*res.value):makeFailure("no such element")).bind(
      (findResult(((x:number) => {return x%2==0}),a))
   if(isOk(check))return check;



}

export const returnSquaredIfFoundEven_v3 = (a: number[]): number => {
    const eitherNum= R.either((findResult(((x:number) => {return x%2==0}),a), );
    


}

console.log(returnSquaredIfFoundEven_v2([1,3,7]));
