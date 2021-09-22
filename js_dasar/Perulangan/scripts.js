var s = "";

for (let i = 10; i > 0; i--) {
  for (j = 0; j < i; j++) {
    s += "*";
  }
  s += "\n";
}

console.log(s);
