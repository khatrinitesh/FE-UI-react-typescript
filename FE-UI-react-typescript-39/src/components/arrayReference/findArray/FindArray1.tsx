import { useState } from "react";
import { USERSFIND } from "../../../constants/constants";

const FindArray1 = () => {
  const numbers: number[] = [10, 20, 3, 40, 5];

  const result = numbers.find((num) => num > 25);

  const [numbers2] = useState<number[]>([10, 20, 30, 40, 50]);

  const result2 = numbers2.find((num) => num > 25);

  const user = USERSFIND.find((u) => u.id === 2);
  const users2 = [
    { id: 1, name: "Nitesh" },
    { id: 2, name: "Pawan" },
    { id: 3, name: "Rahul" },
  ];
  const [results, setResults] = useState<React.ReactNode>("");

  const handleFind = () => {
    const user = users2.find((u) => u.id === 2);
    setResults(user ? <div>{user.name}</div> : <div>User not found</div>);
  };

  return (
    <div>
      <h2>Find Example</h2>
      <p>Numbers: {numbers.join(", ")}</p>
      <p>First Number greater than 25: {result}</p>
      {result2}
      <br />
      <b>
        CONSECTETUR AD QUIS MOLLIT IN LABORUM VOLUPTATE COMMODO INCIDIDUNT
        INCIDIDUNT VOLUPTATE MOLLIT CONSECTETUR ESSE. AUTE ULLAMCO CUPIDATAT NON
        QUIS CUPIDATAT LABORUM DO MINIM FUGIAT ESSE OFFICIA ADIPISICING SINT
        LABORUM. CONSEQUAT NON IRURE ESSE INCIDIDUNT DO. NOSTRUD LABORIS DUIS IN
        VELIT. VOLUPTATE NOSTRUD ALIQUIP NISI OFFICIA SINT ALIQUIP QUIS
        REPREHENDERIT VENIAM EIUSMOD REPREHENDERIT ALIQUA ESSE DO. DOLOR
        VOLUPTATE MAGNA VOLUPTATE EXERCITATION OCCAECAT SUNT EXERCITATION FUGIAT
        QUIS VELIT CONSECTETUR ELIT ULLAMCO ALIQUA. EU ANIM VOLUPTATE SUNT AD
        SIT CILLUM ALIQUIP ANIM PROIDENT LOREM. SINT MAGNA DOLORE SIT ID SIT
        EXERCITATION PARIATUR SINT UT UT DOLOR. CUPIDATAT DUIS NON QUI NOSTRUD
        NOSTRUD ULLAMCO SINT IPSUM MINIM SIT ULLAMCO LABORIS ID INCIDIDUNT.
      </b>
      <br />
      <button onClick={handleFind}>Find User</button>
      <p>{results}</p>
    </div>
  );
};

export default FindArray1;
