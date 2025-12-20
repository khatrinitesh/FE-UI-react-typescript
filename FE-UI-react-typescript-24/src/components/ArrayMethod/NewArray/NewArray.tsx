

const NewArray = () => {

 

    const numbers = new Array(10).fill(0).map((_,index) => index + 1)
  return (
    <div>
      <h2>list of numbers</h2>
      <ul>
            {numbers.map((num) => (
                <li key={num}>{num}</li>
            ))}
      </ul>
    </div>
  )
}

export default NewArray
