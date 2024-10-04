export default function ContextMenu({
  className,
  name,
  children,
  onClick,
}: {
  className?: string;
  name: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={onClick}
      className={`min-w-[150px] 
        self-stretch flex flex-col items-start justify-start py-1 mx-2 rounded-md 
        hover:text-black hover:bg-gray-100
        ${className}`}
    >
      <div className="flex flex-col items-start justify-start py-1 px-2">
        <div className="self-stretch h-2 flex flex-row items-center justify-start gap-2">
          {children}
          <div className="leading-1 font-medium">{name}</div>
        </div>
      </div>
    </div>
  );
}
