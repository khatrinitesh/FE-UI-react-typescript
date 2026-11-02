export default function ResponsiveGrid() {
  return (
    <div className="container py-4">
      <div className="row g-3">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="col-12 sm:col-6 lg:col-4 xl:col-3"
          >
            <div className="card p-4 text-center">
              Card {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}