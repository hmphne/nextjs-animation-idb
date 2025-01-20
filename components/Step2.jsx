"use client";
import React from "react";

export default function Step2({ formData, setFormData, nextStep, prevStep }) {
  const handleRadioChange = (e) => {
    setFormData({ ...formData, step2Radio: e.target.value });
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-[50%]">
      <h2>مرحله ۲</h2>
      <h3>یک گزینه انتخاب کنید</h3>
      <div className="hover:bg-white hover:bg-opacity-15 p-2 rounded-sm">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="step2Radio"
            value="option1"
            checked={formData.step2Radio === "option1"}
            onChange={handleRadioChange}
          />
          گزینه ۱
        </label>
      </div>
      <div className="hover:bg-white hover:bg-opacity-15 p-2 rounded-sm">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="step2Radio"
            value="option2"
            checked={formData.step2Radio === "option2"}
            onChange={handleRadioChange}
          />
          گزینه ۲
        </label>
      </div>

      <div className="flex flex-col gap-4">
        <button onClick={prevStep} className="w-full">قبلی</button>
        <button onClick={nextStep} className="w-full">بعدی</button>
      </div>
    </div>
  );
}
