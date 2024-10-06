import { useRef, useEffect } from "react";

export default function InlineFormControl({
  className,
  children,
  isSelected,
  setIsSelected,
  hideOnMouseLeave = true,
}: {
  className?: string;
  children: React.ReactNode;
  isSelected: boolean;
  setIsSelected: (isSelected: boolean) => void;
  hideOnMouseLeave?: boolean;
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
    const currentTarget = event.currentTarget;
    setTimeout(() => {
      if (
        document.activeElement &&
        !currentTarget.contains(document.activeElement)
      ) {
        setIsSelected(false);
      }
    }, 200);
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
      onMouseLeave={hideOnMouseLeave ? handleMouseLeave : undefined}
      className={` ${className} h-fit
        shadow-[1px_2px_4px_rgba(0,_0,_0,_0.1)] rounded bg-white border-gainsboro border-[0.8px] border-solid box-border 
        flex flex-col items-start justify-start py-2 px-0 gap-1 text-left text-xs text-dimgray
        `}
    >
      {children}
    </div>
  );
}
