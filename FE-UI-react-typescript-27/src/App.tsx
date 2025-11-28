import { Suspense } from "react";
import Example1 from "./Example1";

function App() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Example1 />
      </Suspense>
    </>
  );
}

export default App;
