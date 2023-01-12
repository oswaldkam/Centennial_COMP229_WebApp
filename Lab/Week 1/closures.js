function parent() {
  const msg = "foo bar";

  function child() {
    console.log(msg);
  }

  child();
}

parent();
