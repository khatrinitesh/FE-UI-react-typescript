import { motion } from "framer-motion";
import { useFormImgStore } from "../../store/useFormImgStore";

const FormOnImage = () => {
  const { form, setField } = useFormImgStore();
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* 🖼 Background Image */}
      <img
        src="https://picsum.photos/1600/900"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* 🌑 Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* 🧾 Form Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex items-center justify-center h-full"
      >
        <div
          className="w-full max-w-md p-8 rounded-2xl 
          bg-white/10 backdrop-blur-lg 
          border border-white/20 shadow-xl"
        >
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">
            Login
          </h2>

          {/* Email */}
          <input
            type="email"
            value={form.email}
            onChange={(e) => setField("email", e.target.value)}
            placeholder="Email"
            className="w-full mb-4 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 outline-none"
          />

          {/* Password */}
          <input
            type="password"
            value={form.password}
            onChange={(e) => setField("password", e.target.value)}
            placeholder="Password"
            className="w-full mb-6 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 outline-none"
          />

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-2 rounded-lg bg-white text-black font-medium"
          >
            Sign In
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default FormOnImage;
