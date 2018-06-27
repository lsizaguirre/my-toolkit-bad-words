let badWords = ['xxx', 'yyy', 'zzz'];

function hasBadWords(string) {
    return string.toLowerCase()
        .split(' ')
        .filter((word)=>{return !!~badWords.indexOf(word)})
        .length > 0;
}

console.log(hasBadWords('Eres bien'));                   //false
console.log(hasBadWords('eres una xxx zorra'));          //true
console.log(hasBadWords('eres xxxx'));                   //false
console.log(hasBadWords('yyy'));                         //true
console.log(hasBadWords('quiero hacer un reclamo zzz')); //true