export default function CardInfoImage({
  id,
  imgPath,
  toggleCardDetails,
}: {
  id: string;
  imgPath: string;
  toggleCardDetails: (id: string) => void;
}) {
  return (
    <div
      role="button"
      className="flex items-center justify-center w-full h-full"
      tabIndex={0}
      onClick={() => toggleCardDetails(id)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          toggleCardDetails(id);
          e.preventDefault();
        }
      }}
    >
      <img
        className="object-cover w-full h-full max-w-[250px] lg:max-w-full rounded-t-[5px]"
        alt="Rectangle"
        src={imgPath}
        width={200}
      />
    </div>
  );
}
