interface TapeProps {
  className?: string;
  angle?: number;
  width?: string;
  height?: string;
  opacity?: number;
}

/**
 * Tape
 * Authentic, physical frosted adhesive tape using real photographic texture.
 */
export default function Tape({
  className = '',
  angle = -2,
  width = 'w-24',
  height = 'h-5',
  opacity = 0.85,
}: TapeProps) {
  // Select tape 1 or 2 semi-randomly based on angle to add variation
  const assetPath = angle > 0 ? '/assets/tape-02.png' : '/assets/tape-01.png';

  return (
    <div
      aria-hidden="true"
      className={`relative select-none pointer-events-none z-20 ${width} ${height} ${className} flex items-center justify-center`}
      style={{
        transform: `rotate(${angle}deg)`,
        opacity,
      }}
    >
      {/* Main Photographic Tape Image */}
      <img
        src={assetPath}
        alt=""
        className="w-[120%] h-[150%] object-contain drop-shadow-sm"
      />
    </div>
  );
}
