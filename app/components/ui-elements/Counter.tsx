import { useState } from "react";

export default function Counter({
  initial = 0,
  total = 0,
}: {
  initial?: number;
  total?: number;
}) {
  const [completed, setCompleted] = useState(initial);

  return (
    <div className="inline-flex items-center">
      <input
        type="number"
        value={completed}
        onChange={(e) =>
          setCompleted(Math.min(Math.max(0, Number(e.target.value)), total))
        }
        className="w-8 p-0 text-right focus:outline-none"
        min={0}
        max={total}
      />
      <span className="text-xxxs font-medium">{`/${total}`}</span>
    </div>
  );
}
