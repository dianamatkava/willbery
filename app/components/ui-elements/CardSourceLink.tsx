import { AiOutlineLink } from "react-icons/ai";

export default function CardSourceLink({
  children,
  source,
}: {
  children: React.ReactNode;
  source: object;
}) {
  return (
    <div className="flex items-center gap-2">
      {source ? (
        <div className="w-fit flex flex-row items-center justify-start gap-2 mt-1">
          <a href={source.url}>
            <img
              className="w-4 h-4 rounded-sm max-w-full max-h-full cursor-pointer"
              alt=""
              src={`/${source.icon}`}
            />
          </a>
        </div>
      ) : (
        <div className="bg-gainsboro-100 w-4 h-4 flex items-center justify-center rounded-md shadow-[1px_1px_1px_rgba(0,_0,_0,_0.15)]">
          <AiOutlineLink size={12} />
        </div>
      )}
      <div className="font-semibold text-realblack text-xxs tracking-[0] leading-[normal] cursor-pointer flex-1">
        {children}
      </div>
    </div>
  );
}
