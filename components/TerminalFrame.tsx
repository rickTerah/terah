interface TerminalFrameProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

export function TerminalFrame({
  title,
  children,
  className = "",
  animate = false,
}: TerminalFrameProps) {
  return (
    <div
      className={`terminal-frame ${animate ? "animate-fade-in" : ""}
        ${className}`}
    >
      {title && (
        <div className="terminal-header">
          <span className="text-muted-foreground" aria-hidden="true">
            ◆
          </span>
          <span className="terminal-title">{title}</span>
        </div>
      )}
      {children}
    </div>
  );
}
