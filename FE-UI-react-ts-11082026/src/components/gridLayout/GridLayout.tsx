export default function GridLayout() {
  return (
    <div className="grid grid-cols-1 gap-5 tablet:grid-cols-2 desktop-sm:grid-cols-3 desktop-3xl:grid-cols-4 w-full">
      {Array.from({ length: 10 }, (_, index) => (
        <div
          className="w-full  flex-1 flex rounded-xl bg-brand-secondary p-10 font-brand-bebas-regular text-white"
          key={index}
        >
          <span className="text-9xl text-red-300 desktop-sm:hidden">asdad</span>{" "}
          Box {index + 1}
        </div>
      ))}
    </div>
  );
}
