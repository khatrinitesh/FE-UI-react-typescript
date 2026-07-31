type CouponProps = {
  code: string;
  discount: string;
  description: string;
  expiry: string;
  onApply: () => void;
};

export default function CouponCard({
  code,
  discount,
  description,
  expiry,
  onApply,
}: CouponProps) {
  return (
    <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition">
      <div className="flex">
        {/* Left */}
        <div className="flex-1 p-6">
          <p className="text-sm text-gray-500">Coupon</p>

          <h2 className="mt-1 text-3xl font-bold text-green-600">{discount}</h2>

          <p className="mt-3 text-gray-600">{description}</p>

          <div className="mt-5 flex items-center gap-3">
            <div className="rounded-lg bg-gray-100 px-4 py-2 font-mono font-semibold tracking-wider">
              {code}
            </div>

            <button
              onClick={onApply}
              className="rounded-lg bg-black px-5 py-2 text-white hover:bg-gray-800"
            >
              Apply
            </button>
          </div>

          <p className="mt-4 text-xs text-gray-400">Expires {expiry}</p>
        </div>

        {/* Right */}
        <div className="flex w-24 flex-col items-center justify-center rounded-r-2xl bg-green-500 text-white">
          <span className="text-xs uppercase">Save</span>
          <span className="text-2xl font-bold">{discount}</span>
        </div>
      </div>
    </div>
  );
}
