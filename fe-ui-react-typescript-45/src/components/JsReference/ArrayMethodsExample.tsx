export default function ArrayMethodsExample() {
  //   // [] - Creates a new Array
  //   const fruits: string[] = ["Apple", "Banana", "Mango"];
  //   // new Array() - Creates a new Array
  //   const numbers: number[] = new Array(10, 20, 30, 40);
  //   const numberstwo: number[] = [1, 2, 3, 4, 5];

  //   // at() - Returns an indexed element of an array
  //   const firstFruit = fruits.at(0);
  //   const lastFruit = fruits.at(-1);

  //   // copyWithin() - Copies array elements within the same array
  //   const copiedNumbers: number[] = [...numberstwo];

  //   copiedNumbers.copyWithin(0, 3);

  //   // concat() - Joins arrays and returns a new array
  //   const moreFruits: string[] = ["Orange", "Grapes"];
  //   const allFruits: string[] = fruits.concat(moreFruits);
  //   const arr1: string[] = ["A", "B", "C"];
  //   const arr2: number[] = new Array(1, 2, 3);
  //   const item = arr1.at(1);
  //   const joined = arr1.concat(["D", "E"]);

  //   const entriesResult = Array.from(numbers.entries());

  //   const allpositive = numbers.every((val) => val % 2 === 0);
  //   const allgreaterthanthree: boolean = numbers.every((num) => num > 3);

  const numbers: number[] = [10, 20, 30, 40, 50, 60];
  const filenumbers: number[] = numbers.filter();
  return (
    <div>
      <h2>React TypeScript Array Methods</h2>

      <p>
        <strong>[]:</strong> {fruits.join(", ")}
      </p>

      <p>
        <strong>new Array():</strong> {numbers.join(", ")}
      </p>

      <p>
        <strong>at(0):</strong> {firstFruit}
      </p>

      <p>
        <strong>at(-1):</strong> {lastFruit}
      </p>

      <p>
        <strong>concat():</strong> {allFruits.join(", ")}
      </p>
      <p>
        {arr1} <br />
        {arr2} <br />
        {joined}
      </p>
      <p>{numberstwo}</p>
      <p>{copiedNumbers}</p>
      <p>
        {entriesResult.map(([index, value]) => (
          <span key={index}>
            [{index},{value} ]
          </span>
        ))}
      </p>
      <p>{allpositive ? true : false}</p>
      <p>{allgreaterthanthree}</p>
    </div>
  );
}
