export default function TagComponent({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-md flex flex-row items-center justify-center ${className}`}
    >
      <div className="leading-[100%] font-medium cursor-pointer">{value}</div>
    </div>
  );
}
