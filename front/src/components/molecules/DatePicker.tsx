import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";

const MultiDatePickerComponent = () => {
  return (
    <div className="m-2 w-full">
      <DatePicker
        multiple
        inputClass="custom-input-size"
        plugins={[
          <DatePanel />
        ]}    
      />
    </div>
  )
}
export default MultiDatePickerComponent
