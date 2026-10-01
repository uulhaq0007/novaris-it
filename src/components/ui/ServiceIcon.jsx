/**
 * Hand-drawn line icon set so the build stays free of third-party icon artwork.
 * Every path is authored on a 24×24 grid with a 1.6 stroke.
 */
const paths = {
  consult: (
    <>
      <path d="M4 5h16v11H12l-4.5 4v-4H4z" />
      <path d="M8.5 10.5h.01M12 10.5h.01M15.5 10.5h.01" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7.5 3v5.4c0 4.4-3 8.2-7.5 9.6-4.5-1.4-7.5-5.2-7.5-9.6V6z" />
      <path d="M9.2 12.1l2 2 3.6-3.9" />
    </>
  ),
  design: (
    <>
      <path d="M4 4h16v13H4z" />
      <path d="M4 8.5h16M8 21h8M12 17v4" />
      <path d="M7 12.5h4M14 11.5v3" />
    </>
  ),
  code: (
    <>
      <path d="M8.5 8.5L4.5 12l4 3.5M15.5 8.5l4 3.5-4 3.5M13.5 5l-3 14" />
    </>
  ),
  cloud: (
    <>
      <path d="M7.2 18.5a4 4 0 01-.5-7.97A5.2 5.2 0 0117 9.9a3.8 3.8 0 01-.4 8.6z" />
      <path d="M12 12.5v4.5M10 15l2-2.5 2 2.5" />
    </>
  ),
  server: (
    <>
      <path d="M3.5 4.5h17v6h-17zM3.5 13.5h17v6h-17z" />
      <path d="M7 7.5h.01M7 16.5h.01M11 7.5h4M11 16.5h4" />
    </>
  ),
  chip: (
    <>
      <path d="M7.5 7.5h9v9h-9z" />
      <path d="M5 10h2.5M5 14h2.5M16.5 10H19M16.5 14H19M10 5v2.5M14 5v2.5M10 16.5V19M14 16.5V19" />
    </>
  ),
  chart: (
    <>
      <path d="M4 19.5h16" />
      <path d="M7 19.5V13M11.5 19.5V7.5M16 19.5v-8" />
    </>
  ),
  headset: (
    <>
      <path d="M4.5 15v-3a7.5 7.5 0 0115 0v3" />
      <path d="M4.5 13.5h2.2v5H6a1.5 1.5 0 01-1.5-1.5zM19.5 13.5h-2.2v5H18a1.5 1.5 0 001.5-1.5z" />
      <path d="M17.3 18.5v.5a2.5 2.5 0 01-2.5 2.5H12" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" />
    </>
  ),
  rocket: (
    <>
      <path d="M13.5 4.5c3.5 1.4 5.6 4.6 6 8.9-4.3-.4-7.5-2.5-8.9-6z" />
      <path d="M11.6 7.4L6 13l5 5 5.6-5.6" />
      <path d="M8.5 16.5L5 20" />
    </>
  ),
  handshake: (
    <>
      <path d="M3 9.5l3.5-3 3 1.5 3-1.5 3.5 1.5L21 9.5" />
      <path d="M6.5 12l2.8 2.8a1.7 1.7 0 002.4 0L15 11.5" />
      <path d="M3 9.5v5.2l3 2.8M21 9.5v5.2l-3 2.8" />
    </>
  ),
}

export default function ServiceIcon({ name, className = 'h-8 w-8' }) {
  const shape = paths[name] ?? paths.target

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {shape}
    </svg>
  )
}
