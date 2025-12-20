import { useState } from "react"


const CopyWithin = () => {
    const [arr,setArr] = useState<number[]>([1,2,3,4,5]);

    const handleCopyWithin = () => {
        const newArr = [...arr];
        newArr.copyWithin(0,3,5); 
        setArr(newArr);      
    }
    
  return (
    <div>
       <h2>copyWithin Example</h2>
      <p>Array: {arr.join(", ")}</p>
      <button onClick={handleCopyWithin}>Copy Within</button>
      <p>
        Explanation: Copies elements from index 3–4 to start at index 0
      </p>
    </div>
  )
}

export default CopyWithin
