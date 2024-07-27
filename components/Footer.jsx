const Footer = () => {
  return (
    <footer className="bg-secondary py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h1 className="text-lg font-bold">Situ Kandang Sapi</h1>
          <p className="text-sm">&copy; 2024 Waringin Jaya. All rights reserved.</p>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-center">
          <a href="/" className="">
            Privacy Policy
          </a>
          <a href="/" className="">
            Terms of Service
          </a>
          <a href="/kontakkami" className="">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
