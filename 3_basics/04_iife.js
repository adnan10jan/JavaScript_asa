// immediately invoked function expression (IIFE) 

(function goku() { 
    console.log(`become utra instinct`);        // this func. used for prvent any pollution from global scope variable/declaration
})();

((name) => {
    console.log(`become master UI ${name}`);        // wheneves we use IIFE we have to end function by applying INTO IT`;` 
})("kakarot")