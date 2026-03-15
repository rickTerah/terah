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
      <div className="terminal-header">
        <div className="terminal-dot terminal-dot-red" />
        <div className="terminal-dot terminal-dot-yellow" />
        <div className="terminal-dot terminal-dot-green" />
        {title && <div className="terminal-title">{title}</div>}
      </div>
      {children}
    </div>
  );
}
