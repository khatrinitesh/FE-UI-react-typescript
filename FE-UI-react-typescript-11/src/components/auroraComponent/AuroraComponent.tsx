import type { AuroraBackgroundProps } from "../../interface";
import { clsx } from "clsx";
import "./components/aurora-style.css";
import { AURORA_THEMES } from "./components/auroraData";

const AuroraComponent = () => {
  return (
    <>
      <AuroraBackground theme={AURORA_THEMES.OCEAN} className="hero">
        <h1>Welcome to the Northern Lights</h1>
      </AuroraBackground>
    </>
  );
};

export default AuroraComponent;

const AuroraBackground: React.FC<AuroraBackgroundProps> = ({
  theme = "DEFAULT",
  className,
  children,
}) => {
  return (
    <div className={clsx("aurora-wrapper", className)}>
      <div className={clsx("aurora-bg", theme.toLowerCase())} />
      {children && <div className="aurora-content">{children}</div>}
    </div>
  );
};
