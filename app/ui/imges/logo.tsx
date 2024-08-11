import Image from 'next/image';

export default function AppLogo({ width, height, className }) {
  return (
    <Image
      src="/logo.svg"
      alt="Logo"
      width={width}
      height={height}
      className={className}
    />
  );
}
