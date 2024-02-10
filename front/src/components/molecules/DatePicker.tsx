import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";

const MultiDatePickerComponent = () => {
  return (
    <DatePicker
      multiple
      plugins={[
        <DatePanel />
      ]}
    />
  )
}
export default MultiDatePickerComponent
