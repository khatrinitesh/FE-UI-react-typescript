export default function LoaderSpinner() {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/50">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-red-500" />
    </div>
  );
}
