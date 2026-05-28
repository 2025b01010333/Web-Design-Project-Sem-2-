function Footer() {
  return (
    <footer className="bg-[#131921] text-white mt-10">

      <div className="bg-[#37475a] text-center py-4 cursor-pointer hover:bg-[#485769]">
        Back to top
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8 py-10 text-sm">

        <div>
          <h2 className="font-bold mb-3">Get to Know Us</h2>
          <p>About Us</p>
          <p>Careers</p>
          <p>Press Releases</p>
        </div>

        <div>
          <h2 className="font-bold mb-3">Connect with Us</h2>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>

        <div>
          <h2 className="font-bold mb-3">Make Money with Us</h2>
          <p>Sell on Amazon</p>
          <p>Affiliate</p>
          <p>Advertise</p>
        </div>

        <div>
          <h2 className="font-bold mb-3">Help</h2>
          <p>Your Account</p>
          <p>Returns Centre</p>
          <p>Help</p>
        </div>

      </div>

      <div className="border-t border-gray-600 text-center py-4 text-sm">
        © 2026 Amazon Clone Project
      </div>

    </footer>
  );
}

export default Footer;