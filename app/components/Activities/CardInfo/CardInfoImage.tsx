export default function CardInfoImage({ imgPath }: { imgPath: string }) {
  return (
    <div className="flex items-center justify-center w-full max-h-[70px]">
      <img
        className="display: block; object-fit: contain; border-radius: 1px 1px 0px 0px; width: 100%; height: 192.375px; object-position: center 50%;"
        alt="Rectangle"
        src={imgPath}
      />
    </div>
  );
}
