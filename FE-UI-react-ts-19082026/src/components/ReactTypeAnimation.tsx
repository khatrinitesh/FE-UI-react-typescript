import { TypeAnimation } from "react-type-animation";

export default function ReactTypeAnimation() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-white">
      <div className="text-center">
        <p className="mb-4 text-lg text-slate-400">I am a</p>

        <TypeAnimation
          sequence={[
            "Frontend Developer",
            2000,
            "React Developer",
            2000,
            "TypeScript Developer",
            2000,
            "UI Developer",
            2000,
          ]}
          wrapper="h1"
          speed={50}
          repeat={Infinity}
          className="text-4xl font-bold text-pink-500 md:text-6xl"
        />
      </div>
    </section>
  );
}
