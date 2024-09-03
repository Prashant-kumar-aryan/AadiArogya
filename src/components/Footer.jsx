import image1 from "../images/image2.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-6">
            <h6 className="text-xl font-bold mb-4">Reach us</h6>
            <div className="flex items-center mb-2">
              <i className="fas fa-phone text-white mr-3"></i>
              <p>+91-8707727347</p>
            </div>
            <div className="flex items-center mb-2">
              <i className="fas fa-envelope text-white mr-3"></i>
              <p>hello@toletglobe.in</p>
            </div>
            <div className="flex items-center mb-2">
              <i className="fas fa-home text-white mr-3"></i>
              <p>D1/122 vipulkhand, Gomtinagar Lucknow, Uttar Pradesh</p>
            </div>
          </div>

          <div className="mb-6">
            <h6 className="text-xl font-bold mb-4">Quick Links</h6>
            <p>
              <a href="/about" className="text-white hover:underline">
                About Us
              </a>
            </p>
            <p>
              <a href="/service" className="text-white hover:underline">
                Services
              </a>
            </p>
            <p>
              <a href="/blog" className="text-white hover:underline">
                Blogs
              </a>
            </p>
            <p>
              <a href="#!" className="text-white hover:underline">
                Projects
              </a>
            </p>
          </div>

          <div className="mb-6">
            <h6 className="text-xl font-bold mb-4">Services</h6>
            <p>
              <a href="#!" className="text-white hover:underline">
                Paying Guest
              </a>
            </p>
            <p>
              <a href="#!" className="text-white hover:underline">
                Flat and Houses
              </a>
            </p>
            <p>
              <a href="#!" className="text-white hover:underline">
                Offices
              </a>
            </p>
            <p>
              <a href="#!" className="text-white hover:underline">
                Shops and Godown
              </a>
            </p>
          </div>

          <div className="text-center mb-6">
            <img src={image1} alt="logo" className="w-24 mx-auto" />
            <p className="text-gray-400 text-xs mt-2">
              One-stop solution for all your brokerage free rental needs
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-700 text-center py-4">
        <a href="/" className="text-white font-bold">
          ©{currentYear} Aadi Arogya
        </a>
        <div className="flex justify-center mt-2">
          <a href="https://instagram.com" className="text-white mx-2">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://facebook.com" className="text-white mx-2">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" className="text-white mx-2">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
