var o = {name: "ivan"};

Object.defineProperty(o, 'a', {
    value: 32,
    writable: false,
    enumerable: true,
    configurable: true
});

console.log(o);