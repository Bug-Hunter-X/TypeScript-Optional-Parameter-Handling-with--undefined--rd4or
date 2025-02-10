function printName(name?: string): void {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log('No name provided');
  }
}

printName(); // Works fine
printName(undefined); // Works fine

//Alternative solution using optional chaining
function printName2(name?: string): void {
    console.log((name ?? 'No name provided').toUpperCase());
}
printName2();
printName2(undefined); 