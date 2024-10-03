export default function TextAreaInputComponent({
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
    <textarea
      type="textarea"
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      className={`${className} w-full h-14 p-2 border border-gray-300 rounded-lg resize-none`}
    />
  );
}
