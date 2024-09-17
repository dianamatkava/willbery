export default function CardInfoImage({ imgPath }: { imgPath: string }) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <img
        className="object-cover w-full h-full max-w-[250px] lg:max-w-full"
        alt="Rectangle"
        src={imgPath}
        width={200}
      />
    </div>
  );
}
