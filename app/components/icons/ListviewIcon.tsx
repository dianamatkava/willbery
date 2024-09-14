interface Props {
  color: string;
  className?: string;
}

export const ListViewIcon = ({
  color = "#4A4A4A",
  className = "",
}: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="48"
      viewBox="0 0 48 48"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 12H42M16 24H42M16 36H42M6 12H6.02M6 24H6.02M6 36H6.02"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      />
    </svg>
  );
};

export default ListViewIcon;
