import {
  AlertCircle,
  CheckCircle2,
  Info,
  Lightbulb,
  ShieldAlert,
  XCircle,
} from "lucide-react";

import "./Callout.css";

type CalloutVariant =
  | "info"
  | "success"
  | "warning"
  | "error"
  | "tip"
  | "notice";

interface CalloutProps {
  variant?: CalloutVariant;
  title?: string;
  children?: React.ReactNode;
  icon?: React.ElementType;
}

const variantConfig: Record<
  CalloutVariant,
  {
    label: string;
    icon: React.ElementType;
  }
> = {
  info: {
    label: "Information",
    icon: Info,
  },
  success: {
    label: "Success",
    icon: CheckCircle2,
  },
  warning: {
    label: "Warning",
    icon: AlertCircle,
  },
  error: {
    label: "Error",
    icon: XCircle,
  },
  tip: {
    label: "Tip",
    icon: Lightbulb,
  },
  notice: {
    label: "Important",
    icon: ShieldAlert,
  },
};

const Callout = ({
  variant = "info",
  title,
  children = "This is an important message for the user.",
  icon,
}: CalloutProps) => {
  const config = variantConfig[variant];
  const Icon = icon ?? config.icon;

  return (
    <main className="callout-page">
      <div className="callout-container">
        {/* Heading */}
        <header className="callout-heading">
          <span>CONTENT COMPONENT</span>

          <h1>
            Modern <strong>Callout</strong>
          </h1>

          <p>
            Highlight important information with a clean, reusable callout
            component.
          </p>
        </header>

        {/* Main Callout */}
        <section className={`callout callout-${variant}`}>
          <div className="callout-icon">
            <Icon size={22} />
          </div>

          <div className="callout-content">
            <span className="callout-label">{config.label}</span>

            <h2>{title ?? `${config.label} message`}</h2>

            <div className="callout-description">{children}</div>
          </div>
        </section>

        {/* Examples */}
        <section className="callout-examples">
          <div className="callout-examples-heading">
            <span>VARIANTS</span>

            <h2>Callout Examples</h2>
          </div>

          <div className="callout-list">
            <div className="callout callout-info">
              <div className="callout-icon">
                <Info size={20} />
              </div>

              <div className="callout-content">
                <span className="callout-label">Information</span>

                <h2>Keep this in mind</h2>

                <p>
                  This callout provides useful information without interrupting
                  the user's workflow.
                </p>
              </div>
            </div>

            <div className="callout callout-success">
              <div className="callout-icon">
                <CheckCircle2 size={20} />
              </div>

              <div className="callout-content">
                <span className="callout-label">Success</span>

                <h2>Everything looks good</h2>

                <p>Your changes have been successfully saved.</p>
              </div>
            </div>

            <div className="callout callout-warning">
              <div className="callout-icon">
                <AlertCircle size={20} />
              </div>

              <div className="callout-content">
                <span className="callout-label">Warning</span>

                <h2>Please review this</h2>

                <p>
                  Some settings may require your attention before continuing.
                </p>
              </div>
            </div>

            <div className="callout callout-error">
              <div className="callout-icon">
                <XCircle size={20} />
              </div>

              <div className="callout-content">
                <span className="callout-label">Error</span>

                <h2>Something went wrong</h2>

                <p>We could not complete your request. Please try again.</p>
              </div>
            </div>

            <div className="callout callout-tip">
              <div className="callout-icon">
                <Lightbulb size={20} />
              </div>

              <div className="callout-content">
                <span className="callout-label">Tip</span>

                <h2>Pro tip</h2>

                <p>
                  Use keyboard shortcuts to work faster and improve your
                  productivity.
                </p>
              </div>
            </div>

            <div className="callout callout-notice">
              <div className="callout-icon">
                <ShieldAlert size={20} />
              </div>

              <div className="callout-content">
                <span className="callout-label">Important</span>

                <h2>Action required</h2>

                <p>Please verify your information before proceeding.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Callout;
