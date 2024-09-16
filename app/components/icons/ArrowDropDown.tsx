interface Props {
  color?: string;
  hoverStyle?: string;
  className?: string;
}

export const ArrowDropDown = ({
  color = "#B2B2B2",
  hoverStyle = "group-hover:fill-current group-hover:text-black",
  className = "",
}: Props): JSX.Element => {
  return (
    <svg
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`group ${className}`}
    >
      <g id="arrow_drop_down">
        <path
          id="icon"
          d="M7.00001 9.375L4.08334 6.25H9.91668L7.00001 9.375Z"
          fill={color}
          className={`${className} ${hoverStyle}`}
        />
      </g>
    </svg>
  );
};

export default ArrowDropDown;
