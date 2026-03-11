import { create } from "zustand";

interface FileUploadState {
  file: File | null;
  fileName: string;
  setFile: (file: File) => void;
  clearFile: () => void;
}

export const useFileUploadStore = create<FileUploadState>((set) => ({
  file: null,
  fileName: "",

  setFile: (file) =>
    set({
      file,
      fileName: file.name,
    }),

  clearFile: () =>
    set({
      file: null,
      fileName: "",
    }),
}));
