"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

type NotionCounterProps = {
  initial?: number;
  total: number;
  min?: number;
  max?: number;
  step?: number;
  onSave?: (value: number) => Promise<void>;
};

export default function Component({
  initial = 0,
  total,
  min = 0,
  max,
  step = 1,
  onSave,
}: NotionCounterProps) {
  const [value, setValue] = useState(initial);
  const [isSaving, setIsSaving] = useState(false);

  const effectiveMax = max !== undefined ? Math.min(max, total) : total;

  const handleChange = async (newValue: number) => {
    if (newValue < min || newValue > effectiveMax) return;
    setIsSaving(true);
    try {
      if (onSave) await onSave(newValue);
      setValue(newValue);
    } catch (error) {
      console.error("Failed to save:", error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="inline-flex items-center">
      <Button
        variant="outline"
        className="w-[100px] justify-between px-3 relative group"
        disabled={isSaving}
      >
        <span className="flex-grow text-left">{value}</span>
        <span className="text-muted-foreground">{`/${total}`}</span>
        <div className="absolute right-2 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity">
          <ChevronUp
            className="h-4 w-4 cursor-pointer"
            onClick={() => handleChange(value + step)}
          />
          <ChevronDown
            className="h-4 w-4 cursor-pointer"
            onClick={() => handleChange(value - step)}
          />
        </div>
      </Button>
    </div>
  );
}
