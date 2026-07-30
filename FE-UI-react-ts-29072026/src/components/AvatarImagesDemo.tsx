import {
  BadgeCheck,
  Camera,
  Check,
  MessageCircle,
  Plus,
  UserRound,
  X,
} from "lucide-react";
import { useRef, useState, type ChangeEvent, type ReactNode } from "react";

type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";

type AvatarStatus = "online" | "offline" | "busy" | "away";

type AvatarProps = {
  src?: string;
  alt: string;
  name?: string;
  size?: AvatarSize;
  status?: AvatarStatus;
  verified?: boolean;
  bordered?: boolean;
  className?: string;
};

const avatarSizes: Record<
  AvatarSize,
  {
    avatar: string;
    text: string;
    status: string;
    statusPosition: string;
    verified: string;
  }
> = {
  xs: {
    avatar: "size-8",
    text: "text-[10px]",
    status: "size-2",
    statusPosition: "bottom-0 right-0",
    verified: "size-3.5 -bottom-0.5 -right-0.5",
  },
  sm: {
    avatar: "size-10",
    text: "text-xs",
    status: "size-2.5",
    statusPosition: "bottom-0 right-0",
    verified: "size-4 -bottom-0.5 -right-0.5",
  },
  md: {
    avatar: "size-12",
    text: "text-sm",
    status: "size-3",
    statusPosition: "bottom-0 right-0",
    verified: "size-4.5 -bottom-0.5 -right-0.5",
  },
  lg: {
    avatar: "size-16",
    text: "text-lg",
    status: "size-3.5",
    statusPosition: "bottom-0.5 right-0.5",
    verified: "size-5 -bottom-0.5 -right-0.5",
  },
  xl: {
    avatar: "size-24",
    text: "text-2xl",
    status: "size-4",
    statusPosition: "bottom-1 right-1",
    verified: "size-6 -bottom-0.5 -right-0.5",
  },
};

const statusClasses: Record<AvatarStatus, string> = {
  online: "bg-emerald-400",
  offline: "bg-zinc-500",
  busy: "bg-red-500",
  away: "bg-amber-400",
};

function getInitials(name?: string, alt?: string) {
  const value = name || alt || "User";

  return value
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
}

export function Avatar({
  src,
  alt,
  name,
  size = "md",
  status,
  verified = false,
  bordered = true,
  className = "",
}: AvatarProps) {
  const [hasImageError, setHasImageError] = useState(false);
  const styles = avatarSizes[size];

  return (
    <div className={`relative inline-flex shrink-0 ${className}`}>
      <div
        className={`relative flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 font-semibold text-white shadow-lg ${
          styles.avatar
        } ${
          bordered
            ? "ring-2 ring-white/15 ring-offset-2 ring-offset-[#09090b]"
            : ""
        }`}
      >
        {src && !hasImageError ? (
          <img
            src={src}
            alt={alt}
            onError={() => setHasImageError(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className={styles.text}>{getInitials(name, alt)}</span>
        )}
      </div>

      {status && !verified && (
        <span
          aria-label={`Status: ${status}`}
          className={`absolute rounded-full border-2 border-[#09090b] ${
            styles.status
          } ${styles.statusPosition} ${statusClasses[status]}`}
        />
      )}

      {verified && (
        <span
          aria-label="Verified user"
          className={`absolute flex items-center justify-center rounded-full bg-blue-500 text-white ring-2 ring-[#09090b] ${styles.verified}`}
        >
          <Check className="size-[65%]" strokeWidth={3} />
        </span>
      )}
    </div>
  );
}

type AvatarWithDetailsProps = AvatarProps & {
  role?: string;
  action?: ReactNode;
};

export function AvatarWithDetails({
  name = "Unknown User",
  role,
  action,
  ...avatarProps
}: AvatarWithDetailsProps) {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <Avatar {...avatarProps} name={name} />

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <p className="truncate text-sm font-semibold text-white">{name}</p>

          {avatarProps.verified && (
            <BadgeCheck className="size-4 shrink-0 fill-blue-500 text-[#09090b]" />
          )}
        </div>

        {role && (
          <p className="mt-0.5 truncate text-xs text-zinc-500">{role}</p>
        )}
      </div>

      {action}
    </div>
  );
}

type AvatarGroupItem = {
  id: string | number;
  src?: string;
  name: string;
};

type AvatarGroupProps = {
  avatars: AvatarGroupItem[];
  max?: number;
  size?: AvatarSize;
};

export function AvatarGroup({
  avatars,
  max = 4,
  size = "md",
}: AvatarGroupProps) {
  const visibleAvatars = avatars.slice(0, max);
  const remainingCount = Math.max(avatars.length - max, 0);

  return (
    <div className="flex items-center">
      {visibleAvatars.map((avatar, index) => (
        <Avatar
          key={avatar.id}
          src={avatar.src}
          alt={avatar.name}
          name={avatar.name}
          size={size}
          bordered={false}
          className={index > 0 ? "-ml-3" : ""}
        />
      ))}

      {remainingCount > 0 && (
        <div
          className={`relative -ml-3 flex items-center justify-center rounded-full border-2 border-[#09090b] bg-zinc-800 font-semibold text-zinc-300 ${
            avatarSizes[size].avatar
          } ${avatarSizes[size].text}`}
        >
          +{remainingCount}
        </div>
      )}
    </div>
  );
}

type UploadAvatarProps = {
  name: string;
  initialImage?: string;
  onImageChange?: (file: File | null) => void;
};

export function UploadAvatar({
  name,
  initialImage,
  onImageChange,
}: UploadAvatarProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState(initialImage);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      event.target.value = "";
      return;
    }

    const previewUrl = URL.createObjectURL(file);

    setPreview(previewUrl);
    onImageChange?.(file);
  };

  const handleRemove = () => {
    if (preview?.startsWith("blob:")) {
      URL.revokeObjectURL(preview);
    }

    setPreview(undefined);
    onImageChange?.(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="group relative">
        <Avatar src={preview} alt={name} name={name} size="xl" bordered />

        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          aria-label="Change profile photo"
          className="absolute bottom-0 right-0 flex size-9 items-center justify-center rounded-full border-2 border-[#09090b] bg-white text-black shadow-lg transition hover:scale-105 hover:bg-violet-200 active:scale-95"
        >
          <Camera className="size-4" />
        </button>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      <p className="font-ogilvy-regular mt-4 text-lg text-white">{name}</p>

      <div className="mt-3 flex items-center gap-2">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-medium text-zinc-300 transition hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white"
        >
          Change photo
        </button>

        {preview && (
          <button
            type="button"
            onClick={handleRemove}
            aria-label="Remove photo"
            className="flex size-8 items-center justify-center rounded-full text-zinc-500 transition hover:bg-red-500/10 hover:text-red-300"
          >
            <X className="size-4" />
          </button>
        )}
      </div>
    </div>
  );
}

const avatarImages = [
  {
    id: 1,
    name: "Olivia Martin",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    name: "Ethan Walker",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 3,
    name: "Sophia Lee",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 4,
    name: "Daniel Kim",
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 5,
    name: "Mia Rodriguez",
    src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 6,
    name: "Noah Williams",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
];

export default function AvatarImagesDemo() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#08080a] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute -left-40 -top-40 size-[500px] rounded-full bg-violet-600/20 blur-[140px]" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 size-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl">
        <header className="mb-12 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-300">
            UI Component
          </p>

          <h1 className="font-ogilvy-regular mt-3 text-4xl tracking-tight sm:text-5xl">
            Avatar Images
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            Reusable avatar images with multiple sizes, status indicators,
            verified states, image upload and grouped profiles.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="space-y-6">
            {/* Avatar sizes */}
            <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 shadow-2xl backdrop-blur-xl sm:p-7">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
                  Variants
                </p>

                <h2 className="font-ogilvy-regular mt-2 text-2xl">
                  Avatar Sizes
                </h2>
              </div>

              <div className="mt-7 flex flex-wrap items-end gap-7">
                {(["xs", "sm", "md", "lg", "xl"] as AvatarSize[]).map(
                  (size, index) => (
                    <div
                      key={size}
                      className="flex flex-col items-center gap-3"
                    >
                      <Avatar
                        src={avatarImages[index]?.src}
                        alt={avatarImages[index]?.name ?? "User"}
                        name={avatarImages[index]?.name}
                        size={size}
                      />

                      <span className="text-xs uppercase text-zinc-600">
                        {size}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </section>

            {/* Status avatars */}
            <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 shadow-2xl backdrop-blur-xl sm:p-7">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
                  Presence
                </p>

                <h2 className="font-ogilvy-regular mt-2 text-2xl">
                  Status Avatars
                </h2>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <StatusExample
                  name="Olivia Martin"
                  role="Product Designer"
                  src={avatarImages[0].src}
                  status="online"
                />

                <StatusExample
                  name="Ethan Walker"
                  role="Frontend Developer"
                  src={avatarImages[1].src}
                  status="busy"
                />

                <StatusExample
                  name="Sophia Lee"
                  role="Project Manager"
                  src={avatarImages[2].src}
                  status="away"
                />

                <StatusExample
                  name="Daniel Kim"
                  role="UX Researcher"
                  src={avatarImages[3].src}
                  status="offline"
                />
              </div>
            </section>

            {/* Avatar group */}
            <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 shadow-2xl backdrop-blur-xl sm:p-7">
              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
                    Collaboration
                  </p>

                  <h2 className="font-ogilvy-regular mt-2 text-2xl">
                    Avatar Group
                  </h2>

                  <p className="mt-2 text-sm text-zinc-500">
                    Six team members are collaborating on this project.
                  </p>
                </div>

                <AvatarGroup avatars={avatarImages} max={4} size="lg" />
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                <AvatarGroup avatars={avatarImages} max={3} />

                <button
                  type="button"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-medium text-zinc-300 transition hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white"
                >
                  <Plus className="size-4 transition-transform group-hover:rotate-90" />
                  Invite member
                </button>
              </div>
            </section>
          </div>

          <div className="space-y-6">
            {/* Upload avatar */}
            <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 shadow-2xl backdrop-blur-xl">
              <div className="text-center">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
                  Profile image
                </p>

                <h2 className="font-ogilvy-regular mt-2 text-2xl">
                  Upload Avatar
                </h2>
              </div>

              <div className="mt-8">
                <UploadAvatar
                  name="Nitesh Kumar"
                  initialImage={avatarImages[5].src}
                  onImageChange={(file) => {
                    console.log("Selected image:", file);
                  }}
                />
              </div>
            </section>

            {/* Profile card */}
            <section className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-950/70 via-zinc-950 to-cyan-950/50 p-6 shadow-2xl">
              <div className="absolute -right-20 -top-20 size-52 rounded-full bg-violet-500/20 blur-3xl" />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <Avatar
                    src={avatarImages[0].src}
                    alt="Olivia Martin"
                    name="Olivia Martin"
                    size="xl"
                    status="online"
                  />

                  <button
                    type="button"
                    aria-label="Message Olivia"
                    className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-zinc-300 transition hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white"
                  >
                    <MessageCircle className="size-4" />
                  </button>
                </div>

                <div className="mt-6">
                  <div className="flex items-center gap-2">
                    <h2 className="font-ogilvy-regular text-2xl">
                      Olivia Martin
                    </h2>

                    <BadgeCheck className="size-5 fill-blue-500 text-[#101014]" />
                  </div>

                  <p className="mt-1 text-sm text-violet-200">
                    Senior Product Designer
                  </p>

                  <p className="mt-4 text-sm leading-6 text-white/50">
                    Creating thoughtful digital products and scalable design
                    systems for modern teams.
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-black/20 py-4 text-center">
                  <ProfileStat value="126" label="Projects" />
                  <ProfileStat value="18K" label="Followers" />
                  <ProfileStat value="84" label="Following" />
                </div>

                <button
                  type="button"
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-white py-3 text-sm font-semibold text-black transition hover:bg-violet-200 active:scale-[0.98]"
                >
                  <UserRound className="size-4" />
                  View profile
                </button>
              </div>
            </section>

            {/* Fallback avatars */}
            <section className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl">
              <h2 className="font-ogilvy-regular text-xl">Fallback Initials</h2>

              <p className="mt-2 text-sm text-zinc-500">
                Initials appear automatically when an image is unavailable.
              </p>

              <div className="mt-6 flex items-center gap-4">
                <Avatar alt="Nitesh Kumar" name="Nitesh Kumar" size="lg" />

                <Avatar alt="Sarah Johnson" name="Sarah Johnson" size="lg" />

                <Avatar alt="Unknown user" size="lg" />
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

type StatusExampleProps = {
  name: string;
  role: string;
  src: string;
  status: AvatarStatus;
};

function StatusExample({ name, role, src, status }: StatusExampleProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:border-white/20 hover:bg-white/[0.04]">
      <AvatarWithDetails
        src={src}
        alt={name}
        name={name}
        role={role}
        status={status}
        action={
          <span
            className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase ${
              status === "online"
                ? "bg-emerald-500/10 text-emerald-300"
                : status === "busy"
                  ? "bg-red-500/10 text-red-300"
                  : status === "away"
                    ? "bg-amber-500/10 text-amber-300"
                    : "bg-zinc-500/10 text-zinc-500"
            }`}
          >
            {status}
          </span>
        }
      />
    </div>
  );
}

type ProfileStatProps = {
  value: string;
  label: string;
};

function ProfileStat({ value, label }: ProfileStatProps) {
  return (
    <div>
      <p className="text-lg font-semibold text-white">{value}</p>
      <p className="mt-1 text-[11px] text-zinc-500">{label}</p>
    </div>
  );
}
