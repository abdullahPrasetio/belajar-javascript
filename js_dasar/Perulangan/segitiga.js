let s = "";

for (let i = 0; i < 3; i++) {
  for (let j = 0; j <= 3; j++) {
    if (j <= i) {
      s += "*";
    }
  }
  s += "\n";
}

console.log(s);
