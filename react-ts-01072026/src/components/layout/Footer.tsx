
export default function Footer() {
    const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-gray-800 text-white py-3">
      <div className="container mx-auto px-4">
        <p>&copy; {currentYear} My App. All rights reserved.</p>
      </div>
    </footer>
  )
}
