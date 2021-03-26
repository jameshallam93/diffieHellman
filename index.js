const bigInt = require("big-integer")

//Private keys contained within Alice/Bob objects
const Alice = {
    a: 333
}

const Bob = {
    b: 182
}

const n = 941

const g = 627

console.log(`Common variables: \n Prime: ${n}, Base: ${g}`);

const aliceFirstStep = bigInt(g).modPow(Alice.a, n) 

const bobFirstStep = bigInt(g).modPow(Bob.b, n)

console.log(`After "mixing" their colors into the common variables, Alice sends Bob: ${aliceFirstStep}, Bob sends Alice: ${bobFirstStep}`)

const aliceSecondStep = bigInt(bobFirstStep).modPow(Alice.a, n)

const bobSecondStep = bigInt(aliceFirstStep).modPow(Bob.b, n)

console.log(`After diffie-hellman key exchange is complete, Alice has value: ${aliceSecondStep}, and Bob has value ${bobSecondStep}`)