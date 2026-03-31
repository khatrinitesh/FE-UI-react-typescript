

const FooterSection = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="footer bg-black py-5">
      <div className="container mx-auto">
        <p className="txtCopyright text-center text-white">&copy; {currentYear} Your Company. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default FooterSection
