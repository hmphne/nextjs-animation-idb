'use client'
export default function Step1({ formData, setFormData, nextStep }) {
  const handleChange = (e) => {
    setFormData({ ...formData, step1: e.target.value });
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-[50%]">
      <h2>مرحله ۱</h2>
      <input type="text" value={formData.step1 || ''} onChange={handleChange} />
      <button onClick={nextStep}>بعدی</button>
    </div>
  );
}