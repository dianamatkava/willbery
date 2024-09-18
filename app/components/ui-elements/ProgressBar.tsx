const ProgressBar = ({
  progress = 0,
  color = "bg-blue-500",
  height = "h-[6px]",
  className = "",
  textColor = "#2D4468FF",
}) => {
  return (
    <div className="flex items-center">
      <div
        className={`pr-1 pl-2 [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[${textColor}] text-center text-nowrap text-[8px]`}
      >
        {progress}%
      </div>
      <div className={`relative h-[6px] bg-gray-200 rounded-full ${className}`}>
        <div
          className={`absolute top-0 left-0 h-[6px] ${color} rounded-full`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
