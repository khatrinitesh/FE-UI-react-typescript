export default function Variable() {
  const userName = "Hello";
  const age = 123;
  const isLoggedIn = true;
  const largeNumber = 123n;
  const uniqueId = Symbol("id");
  let notAssigned;
  const emptyValue = null;
  console.log(typeof userName); // string
  console.log(typeof age); // number
  console.log(typeof isLoggedIn); // boolean
  console.log(typeof largeNumber); // bigint
  console.log(typeof uniqueId); // symbol
  console.log(typeof notAssigned); // undefined
  console.log(typeof emptyValue); // object
  return <div></div>;
}
