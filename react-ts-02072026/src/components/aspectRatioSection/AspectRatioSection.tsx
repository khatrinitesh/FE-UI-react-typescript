import AspectRatioCard from "./AspectRatioCard";

export default function AspectRatioSection() {
  return (
    <>
         <AspectRatioCard
          title="Aspect Video 16:9"
          image="https://images.unsplash.com/photo-1666843527155-14ec5f016802?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVtYmFpJTIwc2t5bGluZXxlbnwwfHwwfHx8MA%3D%3D"
          ratio="video"
        />

        <AspectRatioCard
          title="Square 1:1"
          image="https://images.unsplash.com/photo-1666843527155-14ec5f016802?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVtYmFpJTIwc2t5bGluZXxlbnwwfHwwfHx8MA%3D%3D"
          ratio="square"
        />

        <AspectRatioCard
          title="Portrait 3:4"
          image="https://images.unsplash.com/photo-1666843527155-14ec5f016802?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVtYmFpJTIwc2t5bGluZXxlbnwwfHwwfHx8MA%3D%3D"
          ratio="portrait"
        />
    </>
  )
}
