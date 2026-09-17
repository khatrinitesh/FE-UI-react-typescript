import "./BulletList.css";

const bulletItems = ["Modern responsive design", "Reusable React components", "Tailwind CSS styling", "Clean TypeScript structure"];

export const BulletList = () => {
  return (
    <ul className="bulletList">
      {bulletItems.map((item) => (
        <li className="bulletListItem" key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
};
