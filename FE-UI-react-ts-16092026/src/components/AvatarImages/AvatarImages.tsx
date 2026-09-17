import "./AvatarImages.css";

interface Avatar {
  id: number;
  name: string;
  image: string;
  status?: "online" | "offline";
}

interface AvatarImagesProps {
  data: Avatar[];
}

export const AvatarImages = ({ data }: AvatarImagesProps) => {
  return (
    <div className="avatarImages">
      {data.map((avatar) => (
        <div className="avatarItem" key={avatar.id}>
          <div className="avatarImageWrapper">
            <img className="avatarImage" src={avatar.image} alt={avatar.name} />

            {avatar.status && <span className={`avatarStatus ${avatar.status}`} />}
          </div>

          <span className="avatarName">{avatar.name}</span>
        </div>
      ))}
    </div>
  );
};
