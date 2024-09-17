import { useState } from "react";

export default function Accordion({
  children,
  isExpanded,
}: {
  children: React.ReactNode;
  isExpanded: boolean;
}) {
  const [expanded, setExpanded] = useState(isExpanded);
  return <div>{expanded ? children : null}</div>;
}
