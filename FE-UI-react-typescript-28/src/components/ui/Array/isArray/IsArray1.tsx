const IsArray1 = () => {
  const arr = ["word", "happy", "emotional", "mantra", "believe"];
  const arr1 = { name: "test" };

  const resultArr = Array.isArray(arr);
  const resultArr2 = Array.isArray(arr1);

  const data: any = [1, 2, 3];
  if (Array.isArray(data)) {
    console.log("yes, it is an array");
  } else {
    console.log("no, it is not an array");
  }
  return (
    <div>
      <h2 className="font-bold text-white bg-blue-400">IsArray</h2>
      {resultArr ? "true" : "false"}
      <br />
      {resultArr2 ? "true" : "false"}
      <br />
      {data ? "true" : "false"}
    </div>
  );
};

export default IsArray1;
