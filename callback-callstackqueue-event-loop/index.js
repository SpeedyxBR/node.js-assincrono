console.log("iniciando...");

setTimeout(() => {
    console.log("callback 1");
}, 3000);

setTimeout(() => {
    console.log("callback 2");
}, 1000);

console.log("fin");
