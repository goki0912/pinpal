// import { useState } from "react";
// import { Controller, useForm } from "react-hook-form";
// import DatePicker from "react-multi-date-picker";
// import DatePanel from "react-multi-date-picker/plugins/date_panel";

// const MultiDatePickerComponent = () => {
//   const { control, handleSubmit } = useForm({
//     // デフォルト値を設定（必要に応じて）
//     defaultValues: {
//       dates: []
//     }
//   });
//   return (
//     <div className="m-2 w-full">
//       <Controller
//         name="dates" 
//         control={control} // useFormから取得したcontrolオブジェクト
//         render={({ field: { ref, ...rest } }) => (
//           <DatePicker
//             {...rest} // Controllerからfieldオブジェクトを展開
//             multiple // 複数選択を有効に

//             inputClass="custom-input-size" // カスタムクラス
//             plugins={[<DatePanel />]} // プラグインの使用
//           />
//         )}
//       />
//     </div>
//   )
// }
// export default MultiDatePickerComponent
