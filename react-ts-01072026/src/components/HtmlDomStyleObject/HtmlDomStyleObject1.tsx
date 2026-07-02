
export default function HtmlDomStyleObject1() {

     const buttonStyle: React.CSSProperties = {
    backgroundColor: "#ef4444",
    color: "#ffffff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "999px",
    cursor: "pointer",
    fontWeight: 600,
  }

  return (
   <button style={buttonStyle}>
      Click Me
    </button>
  )
}
