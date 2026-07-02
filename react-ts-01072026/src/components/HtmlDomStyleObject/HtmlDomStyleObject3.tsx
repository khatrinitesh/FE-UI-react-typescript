

interface CardProps {
  title: string
  bgColor?: string
  textColor?: string
}

export default function HtmlDomStyleObject3({title,bgColor,textColor}:CardProps) {

     const style: React.CSSProperties = {
    backgroundColor: bgColor,
    color: textColor,
    padding: "20px",
    borderRadius: "12px",
    fontWeight: "bold",
  }

  return (
    <div style={style}>
      {title}
    </div>
  )
}
