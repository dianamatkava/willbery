import Switch from "react-switch";
import { FieldProps } from "formik";

export default function SwitchInput({
  size = 14,
  field,
  onChange,
}: {
  size?: number;
  field: FieldProps;
  onChange: (checked: boolean) => void;
}) {
  const handleChange = (checked: boolean) => {
    onChange(checked);
    field.field.onChange({
      target: { name: field.field.name, value: checked },
    });
  };

  return (
    <div className="flex flex-row items-center gap-2">
      <Switch
        height={size}
        width={size * 2}
        onChange={handleChange}
        checked={field.field.value}
        id="switch-input"
        aria-labelledby="switch-label"
      />
    </div>
  );
}
