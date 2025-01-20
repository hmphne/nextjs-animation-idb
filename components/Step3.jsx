'use client';
import React from 'react';

export default function Step3({ formData, setFormData, prevStep }) {
  const handleChange = (e) => {
    setFormData({ ...formData, step3: e.target.value });
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-[50%]">
      <h2>مرحله ۳</h2>
      
      <label htmlFor="preferences">یک آیتم از لیست زیر انتخاب کنید:</label>
      <select
        id="preferences"
        value={formData.step3 || ''}
        onChange={handleChange}
        className="border p-2"
      >
        <option value="" disabled>
          لطفاً یک گزینه را انتخاب کنید
        </option>
        <option value="notifications">اطلاع‌رسانی‌ها</option>
        <option value="interests">علایق</option>
        <option value="none">هیچ‌کدام</option>
      </select>
      
      <button onClick={prevStep}>قبلی</button>
      <button onClick={() => alert('Form submitted!')}>ثبت فرم</button>
    </div>
  );
}
