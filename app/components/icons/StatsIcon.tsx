interface Props {
  color?: string;
  hoverColor?: string;
  className?: string;
}

export const StatsIcon = ({
  color = "#4A4A4A",
  hoverColor = "black",
  className = "",
}: Props): JSX.Element => {
  return (
    <svg
      className={`group ${className}`}
      fill="none"
      height="48"
      viewBox="0 0 48 48"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36 40V20M24 40V8M12 40V28"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
        className={`group-hover:stroke-${hoverColor} stroke-width-2`}
      />
    </svg>
  );
};

export default StatsIcon;
