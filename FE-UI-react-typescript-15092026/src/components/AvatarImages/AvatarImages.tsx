import { useState } from "react";
import { Camera, Check, User } from "lucide-react";

import "./AvatarImages.css";

type AvatarSize = "sm" | "md" | "lg" | "xl";

interface AvatarUser {
  id: number;
  name: string;
  role: string;
  image: string;
  online: boolean;
}

const users: AvatarUser[] = [
  {
    id: 1,
    name: "John Doe",
    role: "Frontend Developer",
    image: "https://i.pravatar.cc/300?img=12",
    online: true,
  },
  {
    id: 2,
    name: "Sarah Smith",
    role: "UI Designer",
    image: "https://i.pravatar.cc/300?img=47",
    online: true,
  },
  {
    id: 3,
    name: "Mike Wilson",
    role: "Backend Developer",
    image: "https://i.pravatar.cc/300?img=11",
    online: false,
  },
  {
    id: 4,
    name: "Emma Brown",
    role: "Product Designer",
    image: "https://i.pravatar.cc/300?img=32",
    online: true,
  },
  {
    id: 5,
    name: "David Lee",
    role: "Developer",
    image: "https://i.pravatar.cc/300?img=68",
    online: false,
  },
];

interface AvatarProps {
  user: AvatarUser;
  size?: AvatarSize;
}

const Avatar = ({ user, size = "md" }: AvatarProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`avatar-wrapper avatar-${size}`}>
      <div className="avatar-image">
        {!imageError ? (
          <img
            src={user.image}
            alt={user.name}
            onError={() => setImageError(true)}
          />
        ) : (
          <User />
        )}
      </div>

      <span className={`avatar-status ${user.online ? "online" : "offline"}`} />
    </div>
  );
};

const AvatarImages = () => {
  return (
    <div className="avatar-page">
      <div className="avatar-container">
        <div className="avatar-heading">
          <span>UI COMPONENT</span>

          <h1>Avatar Images</h1>

          <p>
            Reusable avatar components with sizes, status indicators and image
            fallback.
          </p>
        </div>

        {/* Single avatars */}

        <div className="avatar-section">
          <h2>Avatar Sizes</h2>

          <div className="avatar-sizes">
            {users.slice(0, 4).map((user, index) => (
              <Avatar
                key={user.id}
                user={user}
                size={["sm", "md", "lg", "xl"][index] as AvatarSize}
              />
            ))}
          </div>
        </div>

        {/* Profile cards */}

        <div className="avatar-section">
          <h2>Team Members</h2>

          <div className="avatar-grid">
            {users.map((user) => (
              <div className="avatar-card" key={user.id}>
                <Avatar user={user} size="lg" />

                <div className="avatar-info">
                  <h3>{user.name}</h3>

                  <p>{user.role}</p>

                  <span
                    className={
                      user.online
                        ? "status-text online-text"
                        : "status-text offline-text"
                    }
                  >
                    {user.online ? "Online" : "Offline"}
                  </span>
                </div>

                <button
                  type="button"
                  className="avatar-action"
                  aria-label={`View ${user.name}`}
                >
                  <Check size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Avatar group */}

        <div className="avatar-section">
          <h2>Avatar Group</h2>

          <div className="avatar-group">
            {users.slice(0, 4).map((user) => (
              <div
                className="avatar-group-item"
                key={user.id}
                title={user.name}
              >
                <Avatar user={user} size="md" />
              </div>
            ))}

            <div className="avatar-more">+8</div>
          </div>
        </div>

        {/* Upload avatar */}

        <div className="avatar-section">
          <h2>Profile Avatar</h2>

          <div className="profile-avatar">
            <div className="profile-avatar-image">
              <img src="https://i.pravatar.cc/300?img=12" alt="Profile" />

              <button type="button" className="camera-button">
                <Camera size={16} />
              </button>
            </div>

            <div>
              <h3>Profile Picture</h3>

              <p>JPG, PNG or WEBP. Maximum 2MB.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarImages;
