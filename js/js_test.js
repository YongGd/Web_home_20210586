var jb='hi';
var a =1;
var b;
b=5;

if(true)
{
    let c ='let 접근' //이게 더 많이씀
    var c_1 = 'var 접근'; 
}
//console.log(c); Error?
console.log(c_1);

let d=5;
//let d ='값 재할당'; error?
console.log(d);

const e ='상수1 접근';
//e=5;
//const f; Error?
console.log(e); 