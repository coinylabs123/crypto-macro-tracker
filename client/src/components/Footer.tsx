const Footer = () => {
  return (
    <footer className="bg-muted/50 py-6 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} CryptoMacro Tracker. All data provided by TradingView.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm">About</a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm">Terms</a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
