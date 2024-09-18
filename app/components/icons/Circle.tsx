interface Props {
  color?: string;
  className?: string;
}

export const Circle = ({
  color = "#5A5A5A",
  className = "",
}: Props): JSX.Element => {
  return (
    <div className={className}>
      <svg
        width="5"
        height="5"
        viewBox="0 0 5 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="2" cy="2" r="2" fill={color} />
      </svg>
    </div>
  );
};

export default Circle;
