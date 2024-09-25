import { FieldProps } from "formik";
import Label from "./Label";

export default function DatePickerInput({
  label,
  field,
}: {
  label: string;
  field: FieldProps;
}) {
  return (
    <div className="w-[110px] flex flex-col items-start justify-start gap-2">
      <Label label={label} />
      <div className="self-stretch rounded-md bg-grey-100 border-grey-200 hover:border-gray-300 border-[1px] border-solid box-border h-[30px] overflow-hidden shrink-0 flex flex-row items-center justify-between p-space-200 text-xxs">
        <input aria-label="Date" type="date" {...field} />
      </div>
    </div>
  );
}
