const ProgressBar = ({
  progress,
  color = "bg-green-500",
  className = "",
  textColor = "#2D4468FF",
}: {
  progress: object;
  color?: string;
  height?: string;
  className?: string;
  textColor?: string;
}) => {
  if (!progress) return null;
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div
          className={`pr-1 pl-1 font-semibold text-[${textColor}] text-center text-nowrap text-[8px]`}
        >
          {progress.progressPercent}%
        </div>
        <div
          className={`relative h-[6px] bg-gray-200 rounded-full ${className}`}
        >
          <div
            className={`absolute top-0 left-0 h-[6px] ${color} rounded-full`}
            style={{ width: `${progress.progressPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
