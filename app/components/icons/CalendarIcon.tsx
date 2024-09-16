interface Props {
  color?: string;
  hoverColor?: string;
  className?: string;
}

export const CalendarIcon = ({
  color = "#4A4A4A",
  hoverColor = "black",
  className = "",
}: Props): JSX.Element => {
  return (
    <svg
      className={`group ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.3333 2.66663V7.99996M10.6667 2.66663V7.99996M4 13.3333H28M6.66667 5.33329H25.3333C26.8061 5.33329 28 6.5272 28 7.99996V26.6666C28 28.1394 26.8061 29.3333 25.3333 29.3333H6.66667C5.19391 29.3333 4 28.1394 4 26.6666V7.99996C4 6.5272 5.19391 5.33329 6.66667 5.33329Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        className={`group-hover:stroke-${hoverColor} stroke-width-2`}
      />
    </svg>
  );
};

export default CalendarIcon;
