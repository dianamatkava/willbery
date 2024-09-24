import Arrow from "../icons/Arrow";

export default function Accordion({
  children,
  expanded,
  hidden = false,
  setExpanded,
}: {
  children?: React.ReactNode;
  expanded: boolean;
  hidden?: boolean;
  setExpanded: (expanded: boolean) => void;
}) {
  return (
    <div
      className="flex items-center gap-1" // Adjusted gap to 2 for better spacing
      role="button"
      tabIndex={0}
      aria-expanded={expanded}
      aria-controls="accordion-content"
      onClick={() => setExpanded(!expanded)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          setExpanded(!expanded);
          e.preventDefault();
        }
      }}
    >
      <Arrow
        direction={expanded ? "right" : "down"}
        color="#5A5A5A"
        className={`cursor-pointer w-4 h-4 ${
          hidden ? "hidden" : ""
        } hover:color-gray-200`}
      />
      {children || null}
    </div>
  );
}
