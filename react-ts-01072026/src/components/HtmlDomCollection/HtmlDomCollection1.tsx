import { useEffect } from "react";

export default function HtmlDomCollection1() {
    useEffect(() => {
            const items:HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("item") as HTMLCollectionOf<HTMLElement>;   
        console.log(items);
        console.log(items.length);

        for(let i =0;i<items.length;i++){
            items[i].textContent = `Item ${i+1}`;
        }

    }, []);

    

  return (
    <div>
         <div className="box">Item</div>
      <div className="box">Item</div>
      <div className="box">Item</div>
    </div>
  )
}
