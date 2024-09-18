import Arrow from "../icons/Arrow";

export default function Accordion({
  children,
  expanded,
  setExpanded,
}: {
  children: React.ReactNode;
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      aria-expanded={expanded}
      aria-controls="accordion-content"
      onClick={() => setExpanded(!expanded)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          () => setExpanded(!expanded);
          e.preventDefault();
        }
      }}
    >
      <Arrow
        direction={expanded ? "right" : "down"}
        color="#5A5A5A"
        className="cursor-pointer"
      />
      {children}
    </div>
  );
}
