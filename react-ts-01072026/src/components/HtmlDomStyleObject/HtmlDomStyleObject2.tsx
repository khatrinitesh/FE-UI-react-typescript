import { useState } from "react"

export default function HtmlDomStyleObject2() {
      const [active, setActive] = useState(false)

  const cardStyle: React.CSSProperties = {
    backgroundColor: active ? "#ef4444" : "#f3f4f6",
    color: active ? "#ffffff" : "#111827",
    padding: "20px",
    borderRadius: "16px",
    border: active ? "2px solid #b91c1c" : "2px solid #d1d5db",
    cursor: "pointer",
  }
  return (
     <div style={cardStyle} onClick={() => setActive(!active)}>
      {active ? "Active Style" : "Normal Style"}
    </div>
  )
}
