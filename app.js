function Down() {
    let n = 5;
let string = "";
for (let i = 0; i < n; i++) {
  // printing star
  for (let k = 0; k < n - i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

}

function Up() {
    let n = 5;
    let string = "";
    for (let i = 2; i <= n; i++) {
      for (let j = 0; j < i; j++) {
        string += "*";
      }
      string += "\n";
    }
    console.log(string);
}

Down();
Up();