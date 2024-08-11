import Image from 'next/image';

export default function BackgroundImageLG({ width, height, className }) {
  return (
    <Image
      src="/bg-image-desk.png"
      alt="Background Image"
      width={width}
      height={height}
      className={className}
    />
  );
}
