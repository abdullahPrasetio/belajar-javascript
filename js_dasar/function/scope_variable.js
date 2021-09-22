// "use strict" melarang function membuat variable di global scope
// global scope / window scope
var a = 1;

function test() {
  // variable scope
  var b = 2;
  //   name conflict
  var a = 2;

  //   cara akses variable global dengan nama yang sama
  //   window.a;
}

test();
