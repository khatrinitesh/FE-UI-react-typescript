import { AnimatePresence, motion } from "framer-motion";
import { FiLock, FiMail } from "react-icons/fi";
import { useFormValidationStore } from "../../store/useFormValidationStore";
import { validateForm } from "./ValidateForm";

const FormValidation = () => {
  const { form, errors, setField, setErrors, reset } = useFormValidationStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Submitted", form);
      reset();
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md p-6 bg-white rounded-2xl shadow-xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login Form</h2>

        {/* Email */}
        <div className="mb-5">
          <div className="flex items-center border rounded-lg px-3 focus-within:ring-2 focus-within:ring-black transition">
            <FiMail className="text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setField("email", e.target.value)}
              className="w-full py-2 outline-none bg-transparent"
            />
          </div>

          <AnimatePresence>
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-red-500 text-sm mt-1"
              >
                {errors.email}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Password */}
        <div className="mb-6">
          <div className="flex items-center border rounded-lg px-3 focus-within:ring-2 focus-within:ring-black transition">
            <FiLock className="text-gray-400 mr-2" />
            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => setField("password", e.target.value)}
              className="w-full py-2 outline-none bg-transparent"
            />
          </div>

          <AnimatePresence>
            {errors.password && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-red-500 text-sm mt-1"
              >
                {errors.password}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          type="submit"
          className="w-full py-2 bg-black text-white rounded-lg font-medium"
        >
          Submit
        </motion.button>
      </motion.form>
    </div>
  );
};

export default FormValidation;
