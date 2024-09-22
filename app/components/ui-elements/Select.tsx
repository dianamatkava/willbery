"use client";

import { useState, useEffect } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Option = {
  value: string;
  label: string;
};

type NotionSelectProps = {
  options?: Option[];
  initialValue?: string;
  onSave: (value: string) => Promise<void>;
  placeholder?: string;
};

export default function NotionSelect({
  options = [],
  initialValue,
  onSave,
  placeholder = "Select an option...",
}: NotionSelectProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(initialValue || "");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setValue(initialValue || "");
  }, [initialValue]);

  const handleSelect = async (currentValue: string) => {
    if (currentValue === value) {
      setOpen(false);
      return;
    }

    setIsSaving(true);
    try {
      await onSave(currentValue);
      setValue(currentValue);
    } catch (error) {
      console.error("Failed to save:", error);
      // Optionally, show an error message to the user
    } finally {
      setIsSaving(false);
      setOpen(false);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
          disabled={isSaving}
        >
          {value
            ? options.find((option) => option.value === value)?.label
            : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search options..." />
          <CommandEmpty>No option found.</CommandEmpty>
          <CommandGroup>
            {options.map((option) => (
              <CommandItem
                key={option.value}
                onSelect={() => handleSelect(option.value)}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === option.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {option.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
