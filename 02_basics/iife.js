//immediately invoked function expression

(function(){
    console.log("IIFE");
})();

((name)=>{ // parameters passed to IIFE
    console.log(`IIFE with aarow function ${name}`);
    
})("Nisha");// argument passed to IIFE