interface Props {
  color?: string;
  className?: string;
}

export const Circle = ({
  color = "#5A5A5A",
  className = "",
}: Props): JSX.Element => {
  return (
    <svg
      width="3"
      height="3"
      viewBox="0 0 3 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="1.5" cy="1.5" r="1.5" fill={color} />
    </svg>
  );
};

export default Circle;
