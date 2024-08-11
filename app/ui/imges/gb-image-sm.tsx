import Image from 'next/image';

export default function BackgroundImageSM({ width, height, className }) {
  return (
    <Image
      src="/bg-image-mob.png"
      alt="Background Image"
      width={width}
      height={height}
      className={className}
    />
  );
}
