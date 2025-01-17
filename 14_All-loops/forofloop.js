const arr = [1, 2, 4, 5, 6, 7];

// for (const element of kisperlooplaganah) {

// }

for (const element of arr) {
  // console.log(element);

}

const text = "Hello World";

for (const char of text) {
    if (char === " ") {
        continue;
    } else {
        console.log(char);
    }
}

// object are not iiterable for in use for this work
const myobjec = {
    'game1': "NFS",
    'game2': "FF"
}
