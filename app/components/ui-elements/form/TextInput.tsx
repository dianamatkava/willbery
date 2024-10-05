export default function TextInputComponent({
  className,
  value,
  name,
  placeholder = "Add a source link",
  onChange,
  onBlur,
  onKeyDown,
}: {
  className?: string;
  value: string;
  name: string;
  placeholder?: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}) {
  return (
    <input
      type="text"
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      className={`${className}`}
    />
  );
}
