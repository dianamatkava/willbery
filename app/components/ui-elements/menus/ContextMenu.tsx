import { useState, useRef, useEffect } from "react";

export default function ContextMenu({
  className,
  children,
  isSelected,
  setIsSelected,
}: {
  className?: string;
  children: React.ReactNode;
  isSelected: boolean;
  setIsSelected: (isSelected: boolean) => void;
}) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsSelected(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const handleBlur = (event: React.FocusEvent) => {
    console.log("Blur");
    const currentTarget = event.currentTarget;
    setTimeout(() => {
      if (
        document.activeElement &&
        !currentTarget.contains(document.activeElement)
      ) {
        setIsSelected(false);
      }
    }, 0);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsSelected(false);
    }, 300);
  };

  if (!isSelected) {
    return null;
  }

  return (
    <div
      role="button"
      tabIndex={0}
      ref={menuRef}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          setIsSelected(!isSelected);
        }
      }}
      onBlur={(e) => handleBlur(e)}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsSelected(true)}
      className={` ${className} h-fit
        shadow-[1px_2px_4px_rgba(0,_0,_0,_0.1)] rounded bg-white border-gainsboro border-[0.8px] border-solid box-border 
        flex flex-col items-start justify-start py-2 px-0 gap-1 text-left text-xs text-dimgray
        `}
    >
      {children}
    </div>
  );
}
