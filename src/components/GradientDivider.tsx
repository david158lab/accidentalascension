export function GradientDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`h-px w-full max-w-md mx-auto ${className}`}
      style={{
        background:
          "linear-gradient(90deg, transparent, #1E5BB8, #4747B0, #6E3A99, #B73C7B, #E27840, #ED9A35, transparent)",
      }}
    />
  );
}
