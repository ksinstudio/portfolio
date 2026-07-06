// Purely decorative animated background: holographic grid + floating orbs.
export function Backdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div
        className="orb float-a"
        style={{
          width: 480,
          height: 480,
          top: "-8%",
          left: "-6%",
          background: "var(--color-violet)",
        }}
      />
      <div
        className="orb float-b"
        style={{
          width: 420,
          height: 420,
          top: "10%",
          right: "-8%",
          background: "var(--color-pink)",
        }}
      />
      <div
        className="orb float-a"
        style={{
          width: 380,
          height: 380,
          bottom: "-10%",
          left: "30%",
          background: "var(--color-cyan)",
          opacity: 0.35,
        }}
      />
    </div>
  );
}
