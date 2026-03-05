import gsap from "gsap";
import { useEffect, useRef } from "react";

const LoginForm = () => {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { y: -200, scaleY: 0, opacity: 0 },
        {
          y: 0,
          scaleY: 1,
          opacity: 1,
          duration: 0.8,
          ease: "elastic.out(1, 0.5)",
        },
      );
    }
  }, []);
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div
        ref={formRef}
        className="bg-gray-800 p-8 rounded-xl w-96 shadow-lg flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center text-white mb-4">
          Login
        </h2>
        <input
          type="email"
          placeholder="Email"
          className="p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md font-semibold transition-all duration-300">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
