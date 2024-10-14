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
      className={`${className} bg-white`}
    >
      {children}
    </div>
  );
}
