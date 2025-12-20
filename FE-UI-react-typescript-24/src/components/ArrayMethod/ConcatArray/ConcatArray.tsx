
const ConcatArray = () => {
    const fruits:string[] = ['apple', 'banana', 'mango'];
    const moreFruits:string[] = ['orange', 'pineapple', 'grape'];

    const allFruits = fruits.concat(moreFruits);
  return (
    <>
      <h2>All Fruits</h2>
      <p>Fruits array 1: {fruits.join(", ")}</p>
      <p>Fruits array 2: {moreFruits.join(", ")}</p>
      <p>Joined array: {allFruits.join(", ")}</p>
    </>
  )
}

export default ConcatArray
