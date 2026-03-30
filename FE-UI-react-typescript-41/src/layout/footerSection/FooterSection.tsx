

const FooterSection = () => {
    const currentFullYear = new Date().getFullYear()
  return (
    <footer className="footer py-5 bg-black">
      <div className="container mx-auto">
        <p className="txtCopyright text-white text-center">&copy; copyright, {currentFullYear} All rights reserved</p>
      </div>
    </footer>
  )
}

export default FooterSection
