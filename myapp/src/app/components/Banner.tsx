// OC_Test\myapp\src\app\components\Banner.tsx
export default function Banner() {
    return (
      <div className="relative w-full h-[680px] flex items-center justify-center p-0">
      {/* Desktop SVG */}
      <img
        src="/bannery.svg"
        alt="Desktop Banner"
        className="hidden md:block  w-[1296px] h-[480px] object-cover rounded-tl-xl"
      />
      {/* Mobile SVG */}
      <img
        src="/banmob.svg"
        alt="Mobile Banner"
        className="block md:hidden w-[auto] h-[650px] object-cover rounded-tl-xl p-16"
      />
   
    </div>
    );
  }
  