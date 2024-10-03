export default function CardInfoImage({ imgPath }: { imgPath: string }) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      {imgPath ? (
        <img
          className="object-cover w-full h-full max-w-[250px] lg:max-w-full rounded-t-[5px]"
          alt="Rectangle"
          src={imgPath.startsWith("https://") ? imgPath : `/${imgPath} `}
          width={200}
        />
      ) : (
        <div className="w-full h-full bg-white rounded-t-[5px]"></div>
      )}
    </div>
  );
}
