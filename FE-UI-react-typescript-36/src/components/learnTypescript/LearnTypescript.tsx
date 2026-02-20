const LearnTypescript = () => {
  // TypeScript is a superset of JavaScript that adds static typing.
  let message = "hello typescript";
  // Types define what kind of data a variable can hold.
  let age: number = 2;
  let username: string = "john_doe";
  let isActive: boolean = true;

  return (
    <>
      <div>{message}</div>;<div>Age: {age}</div>
      <div>Username: {username}</div>
      <div>Is Active: {isActive.toString()}</div>
    </>
  );
};

export default LearnTypescript;
