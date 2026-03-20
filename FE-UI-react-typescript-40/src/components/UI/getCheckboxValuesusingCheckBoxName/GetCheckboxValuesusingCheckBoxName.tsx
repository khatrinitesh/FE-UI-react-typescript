import { motion } from "framer-motion";
import { CHECKBOX_GROUPS } from "../../../constants/animationData";
import { useFormStore } from "../../../store/useFormStore";

const GetCheckboxValuesusingCheckBoxName = () => {
  const values = useFormStore((state) => state.values);
  return (
    <div>
      <CheckboxGroup />
      <div className="mt-6 p-4 bg-white rounded shadow w-80">
        <h3 className="font-semibold mb-2">Selected Values:</h3>
        <pre className="text-sm">{JSON.stringify(values, null, 2)}</pre>
      </div>
    </div>
  );
};

export default GetCheckboxValuesusingCheckBoxName;

const CheckboxGroup = () => {
  const { values, toggleValue } = useFormStore();

  return (
    <div className="p-6 space-y-8">
      {CHECKBOX_GROUPS.map((group) => (
        <div key={group.name}>
          <h2 className="text-xl font-semibold mb-3 capitalize">
            {group.name}
          </h2>

          <div className="space-y-2">
            {group.options.map((option) => {
              const checked = values[group.name]?.includes(option);

              return (
                <motion.label
                  key={option}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    name={group.name}
                    value={option}
                    checked={checked || false}
                    onChange={() => toggleValue(group.name, option)}
                    className="w-5 h-5"
                  />

                  <span className="text-gray-700">{option}</span>
                </motion.label>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
