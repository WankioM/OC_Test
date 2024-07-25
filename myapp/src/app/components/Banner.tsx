// OC_Test\myapp\src\app\components\Banner.tsx
export default function Banner() {
    return (
      <div className="relative w-full h-[680px] flex items-center justify-center p-0">
      <div className="bg-primary w-[90%] h-[650px] md:h-[480px] mx-auto flex flex-col md:flex-row items-center justify-center rounded-3xl ">
      {/* Text Section */}
      <div className="text-white p-4 md:w-1/2 flex flex-col items-center md:items-start m-8 md:mx-20">
      <p className="text-3xl md:text-5xl font-semibold mb-4">
          Transforming your <strong>Ideas into reality</strong>
        </p>
        <p className="text-lg  md:text-xl ">
        Let&#39;s build something extraordinary together to captivate your audience.
        </p>
      </div>

      {/* SVG Section */}
      <div className="p-4 md:w-1/2 flex justify-center">
        <img
          src="/circle.svg"
          alt="OpenCore SVG"
          width={250} // Width for mobile
          height={250} // Height for mobile
          className="object-contain"
        />
      
      </div>
    </div>
    </div>
    );
  }
  