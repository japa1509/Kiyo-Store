import { useMemo, useEffect } from 'react';
import Countdown from 'react-countdown';

export const OfferSection = () => {
  const endDate = useMemo(() => {
    const storedEndDate = localStorage.getItem('endDate');
    if (storedEndDate) {
      return new Date(storedEndDate);
    } else {
      const newEndDate = new Date();
      newEndDate.setDate(newEndDate.getDate() + 2);
      localStorage.setItem('endDate', newEndDate);
      return newEndDate;
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('endDate', endDate);
  }, [endDate]);

  const renderer = ({ days, hours, minutes, seconds }) => (
    <div className="flex justify-center text-center space-x-4">
      {[{ label: "Días", value: days }, { label: "Horas", value: hours }, { label: "Minutos", value: minutes }, { label: "Segundos", value: seconds }].map((item, index) => (
        <div key={index} className="p-3 w-20 h-auto rounded-full bg-[#222222] text-white">
          <span className="block text-2xl font-bold">{item.value}</span>
          <span className="text-xs font-medium">{item.label}</span>
        </div>
      ))}
    </div>
  );

  return (
    <section className="w-full py-10 px-5 mb-10 bg-gradient-to-r from-[#ffba00] to-[#ff6c00]">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <img src="/phone.webp" width={96} height={130} alt="Left Image" loading="lazy" className="w-24 md:w-36 h-auto mx-auto rounded-2xl shadow-lg" />
          <div className="text-center">
            <p className="text-white text-2xl font-extrabold mb-2">Hot Deal This Week</p>
            <p className="text-4xl font-black text-white mb-6">New Collection Up to 50% OFF</p>
            <Countdown date={endDate} renderer={renderer} />
            <button className="mt-6 px-6 py-3 bg-gradient-to-r from-[#222222] to-[#555555] text-white text-xl font-bold rounded-full hover:scale-102 transition-transform duration-200 shadow-lg">Shop Now</button>
          </div>
          <img src="/phone.webp" width={96} height={130} alt="Right Image" loading="lazy" className="w-24 md:w-36 h-auto mx-auto rounded-2xl shadow-lg md:block hidden" />
        </div>
      </div>
    </section>
  );
};



