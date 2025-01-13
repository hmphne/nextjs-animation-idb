import Image from "next/image";

export default function Home() {
  return (
      <div className="flex w-full justify-center bg-yellow-50">
        <div className="w-[1440px] mx-auto px-4 py-6 bg-pink-50/30 h-[300px] flex flex-col gap-12">
          <h2 className="text-[#162655] text-center text-[24px] font-bold leading-[36px] tracking-[0.24px]">
            چرا برای مهاجرت به آلمان باید ایمیگو را انتخاب کنید؟
          </h2>

          <div className="flex justify-between items-center">
            {/* Feature 1 */}
            <div className="flex flex-col items-center w-[238px] p-4 gap-4 rounded-[40px] bg-gradient-to-b from-white to-white/60">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center ">
                x
              </div>
              <p className=" font-medium text-black text-center ">
                صفر تا صد اخذ
                <br />
                پذیرش تحصیلی
              </p>
            </div>

            {/* Feature 2 */}

            <div className="flex flex-col items-center w-[160px] p-4 gap-4 rounded-[40px] bg-gradient-to-b from-white to-white/60">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                x
              </div>
              <p className=" font-medium text-black text-center ">
                ارائه بیزینس پلن
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center w-[160px] p-4 gap-4 rounded-[40px] bg-gradient-to-b from-white to-white/60">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                x
              </div>
              <p className=" font-medium text-black text-center ">
                اخذ جاب‌آفر
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center w-[238px] p-4 gap-4 rounded-[40px] bg-gradient-to-b from-white to-white/60">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center ">
                x
              </div>
              <p className=" font-medium text-black text-center ">
                پیدا کردن مناسب‌ترین
                <br />
                روش مهاجرتی مناسب شما
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}
