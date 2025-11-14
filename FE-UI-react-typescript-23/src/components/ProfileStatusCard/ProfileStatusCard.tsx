import type { ProfileStatusCardProps } from "../../interface";

const ProfileStatusCard = ({
  name,
  statusText = "Available",
  avatarSrc,
}: ProfileStatusCardProps) => {
  return (
    <div className="w-full p-3 flex items-center justify-center ">
      <div className="w-full flex flex-col items-center text-center">
        {/* Avatar */}
        <div
          className="
            w-24 h-24
            rounded-full
            overflow-hidden
            shadow-[0_10px_25px_rgba(0,0,0,0.15)]
            mb-4
          "
        >
          <img
            src={avatarSrc}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name */}
        <h3 className="text-2xl congenial-medium  text-[#4A2B7B]">{name}</h3>

        {/* Status */}
        <div className="mt-2 flex items-center justify-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#27c46a]" />
          <span className="text-base congenial-regular  text-[#4A2B7B]">
            {statusText}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileStatusCard;
