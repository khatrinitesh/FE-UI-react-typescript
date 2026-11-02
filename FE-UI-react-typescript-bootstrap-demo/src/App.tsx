import 'bootstrap/dist/css/bootstrap.min.css'
import ResponsiveGrid from './components/ResponsiveGrid'

function App() {
  
  return (
    <>
    <ResponsiveGrid/>
      {/* <main className="container py-5">
        
      <div className="row g-4">
        <div className="col-12">
          <h1 className="fw-bold">Dashboard</h1>
          <p className="text-body-secondary">
            Welcome to your Bootstrap 6 dashboard.
          </p>
        </div>

        {[
          { title: 'Users', value: '12,450' },
          { title: 'Revenue', value: '₹8,45,000' },
          { title: 'Orders', value: '1,284' },
        ].map((item) => (
          <div className="col-12 col-md-4" key={item.title}>
            <div className="card h-100">
              <div className="card-body">
                <p className="text-body-secondary">
                  {item.title}
                </p>
                <h2 className="fw-bold">{item.value}</h2>
                <button className="btn btn-primary">
                  View details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </main> */}
    </>
  )
}

export default App
