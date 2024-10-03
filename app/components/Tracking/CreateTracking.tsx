import { FunctionComponent } from "react";
import NumberInput from "./Inputs/NumberInput";
import DatePickerInput from "./Inputs/DatePickerInput";
import DurationInput from "./Inputs/DurationInput";
import DoubleInput from "./Inputs/MultipleInput";
import SwitchInput from "./Inputs/SwitchInput";
import { Formik, Field, Form } from "formik";
import Label from "./Inputs/Label";

const CreateTracking: FunctionComponent<{
  onSubmit: (values: any) => void;
}> = ({ onSubmit }) => {
  const handleSubmit = (values: any) => {
    onSubmit(values);
  };

  return (
    <Formik
      initialValues={{
        description: "",
        totalUnits: "",
        completedUnits: "",
        startDate: new Date().toISOString().split("T")[0],
        trackTime: false,
        duration: "",
        frequency: "",
        frequencyType: "",
        totalDuration: "",
      }}
      onSubmit={handleSubmit}
      onReset={() => {
        console.log("reset");
      }}
    >
      {({ isSubmitting, values, setFieldValue }) => (
        <Form
          onKeyDown={(e) => {
            if (
              e.key === "Enter" &&
              (e.target as HTMLInputElement).tagName === "INPUT"
            ) {
              e.preventDefault();
            }
          }}
        >
          <div className="w-full rounded-md flex flex-col items-center justify-center py-0 px-2 box-border text-xs text-grey-600">
            <div className="w-full rounded-md bg-white border-gainsboro border-[1px] border-solid">
              <div className="max-w-md m-auto self-stretch flex flex-col items-start justify-start p-3 gap-2">
                <div className="self-stretch flex flex-col items-start justify-center pt-0.5 px-0 pb-2.5 text-gray-500">
                  <Label label="Description" />
                  <Field
                    name="description"
                    label="Description"
                    className="pt-2 self-stretch font-medium hover:text-gray-600"
                    placeholder="Click to add description for the item or item settings"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2 gap-5 text-xxs">
                  <div className="self-stretch flex flex-row items-start justify-between">
                    <Field
                      name="totalUnits"
                      component={NumberInput}
                      label="Total Units"
                    />
                    <Field
                      name="completedUnits"
                      component={NumberInput}
                      label="Completed Units"
                    />
                    <Field
                      name="startDate"
                      component={DatePickerInput}
                      label="Start Date"
                    />
                  </div>
                  <div className="w-fit h-[11px] flex flex-row items-center justify-start gap-2">
                    <Label label="Track Time" />
                    <Field name="trackTime">
                      {(field) => (
                        <SwitchInput
                          field={field}
                          onChange={(checked) => {
                            if (!checked) {
                              setFieldValue("duration", "");
                              setFieldValue("frequency", "");
                              setFieldValue("frequencyType", "");
                              setFieldValue("totalDuration", "");
                            }
                          }}
                        />
                      )}
                    </Field>
                  </div>
                  {values.trackTime && (
                    <div className="self-stretch flex flex-row items-start justify-between">
                      <Field
                        name="duration"
                        label="Duration"
                        placeholder="2"
                        component={DurationInput}
                      />
                      <DoubleInput>
                        <Label label="Frequency" />
                        <Field
                          name="frequency"
                          type="number"
                          placeholder="2"
                          className="w-4 h-4 remove-number-styles cursor-pointer"
                        />

                        <Field
                          as="select"
                          name="frequencyType"
                          className="h-fit flex flex-col justify-center text-center items-center text-xxs cursor-pointer hover:text-blue-400 hover:font-semibold"
                        >
                          <option value="week">week</option>
                          <option value="2 weeks">2 weeks</option>
                          <option value="3 weeks">3 weeks</option>
                          <option value="4 weeks">4 weeks</option>
                          <option value="month">month</option>
                        </Field>
                      </DoubleInput>
                      <Field
                        name="totalDuration"
                        component={DurationInput}
                        label="Total Duration"
                        initialEmpty={true}
                      />
                    </div>
                  )}
                </div>

                {values.startDate && (
                  <div className="self-stretch text-xxs text-gray-500">
                    <div className="leading-1.5 inline-block">
                      <span className="font-medium">
                        Starting from 11 Sep 2024 you commit to work on X 1 time
                        a week for 3 h. Approximate completion date is{" "}
                      </span>
                      <span className="text-blue-500">
                        <span className="font-semibold">
                          {values.startDate}
                        </span>
                      </span>
                      <span className="font-medium">
                        . You can modify time commitment in future
                      </span>
                    </div>
                  </div>
                )}

                <div className="self-stretch flex flex-col items-end justify-start text-xs">
                  <div className="flex flex-row items-start justify-start gap-[5px]">
                    <button
                      type="reset"
                      className="w-20 rounded-md bg-grey-100 border-gainsboro border-[1px] border-solid box-border h-5 overflow-hidden flex flex-row items-center justify-center py-space-300 px-space-300 group hover:bg-red-100 hover:border-red-200 hover:text-red-200"
                    >
                      <div className="leading-1 font-semibold w-full text-center text-gray-600 group-hover:text-red-500">
                        Discard
                      </div>
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-20 rounded-md text-white bg-black border-slategray border-[1px] border-solid box-border h-5 overflow-hidden shrink-0 flex flex-row items-center justify-center py-space-300 px-space-300 text-white
                      hover:bg-blue-600 disabled:bg-gray-200 disabled:border-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
                    >
                      <div className="leading-1 font-semibold w-full text-center group-hover:text-white">
                        {isSubmitting ? "Saving..." : "Save"}
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CreateTracking;
