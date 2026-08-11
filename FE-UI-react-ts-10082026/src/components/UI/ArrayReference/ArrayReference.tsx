export default function ArrayReference() {
  return (
    <>
      <Assignment />
    </>
  );
}

// map() — Transform very common in a react
// const users = [
//   {
//     id: 1,
//     name: "John",
//   },
//   {
//     id: 2,
//     name: "David",
//   },
//   {
//     id: 3,
//     name: "Alex",
//   },
// ];

// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map((num) => num * num).join("\n");
// const evenNumbers = numbers.filter((num) => num % 2 === 0);
// const total = numbers.reduce((sum, number) => sum + number);
// const numberswise = [10, 50, 20, 80, 30];
// const max = numbers.reduce(
//   (maximum, number) => (number > maximum ? number : maximum),
//   numbers[0],
// );
// const numberswise2 = [1, 2, 2, 3, 3, 3, 4];
// const frequency = numberswise2.reduce<Record<number, number>>((acc, number) => {
//   acc[number] = (acc[number] || 0) + 1;
//   return acc;
// }, {});

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "David" },
  { id: 3, name: "Alex" },
];
const user = users.find((user) => user.id === 2);

const Assignment = () => {
  return (
    <>
      {user}
      {/* {frequency}
      <br />
      {max}
      <br />
      {total}
      <br />
      {users.map((user, index) => {
        return (
          <>
            <div key={index}>{user.name}</div>
          </>
        );
      })}
      <br />
      {squares}
      <br />
      {evenNumbers} */}
    </>
  );
};
