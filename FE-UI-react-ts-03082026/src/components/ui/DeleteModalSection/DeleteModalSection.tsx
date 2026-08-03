import { useState } from "react";
import DeleteModal from "./DeleteModal";

export default function DeleteModalSection() {
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    console.log("Deleted");
    setTimeout(() => {
      setOpen(false);
    }, 1000);
  };

  return (
    <div className="p-10">
      <button
        onClick={() => setOpen(true)}
        className="rounded-lg bg-red-600 px-6 py-3 text-white"
      >
        Delete User
      </button>

      <DeleteModal
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
}
