// OC_Test\myapp\src\app\components\Header.tsx
export default function Header() {
    return (
        <header className="bg-white h-[563px] w-full flex flex-col items-center">
        <div className="h-[155px] w-full bg-white">
        <img src="/Union.svg" alt="Description of SVG" className="h-auto w-auto max-w-full max-h-full" />
        </div>
        <div className="flex flex-col items-center justify-center text-center w-full max-w-screen-md px-4 py-8">
        <h1 className="text-primary text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-4 font-sans">
            Your Ultimate Resource Hub for Digital Success
          </h1>
          <p className="text-secondary text-base md:text-lg lg:text-xl font-medium leading-relaxed font-sans">
            Explore our comprehensive library of tools and templates for developers, designers, marketers, and branding experts.
          </p>
        </div>
      </header>
    );
  }
  