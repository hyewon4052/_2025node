const letter = ['a', 'b','c','d'];

for (let i = 0; i < letter.length; i++) {
    console.log(letter[i]);
}

console.log("foreach");
letter.forEach( l => console.log(l) );

console.log("for of");
for (let l of letter) {
    console.log(l);
}