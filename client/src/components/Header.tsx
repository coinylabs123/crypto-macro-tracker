import { ThemeToggle } from "./ui/theme-toggle";
import { TrendingUp } from "lucide-react";

interface HeaderProps {
  activeTab: "crypto" | "macro";
  setActiveTab: (tab: "crypto" | "macro") => void;
}

const Header = ({ activeTab, setActiveTab }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-card shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <TrendingUp className="h-5 w-5 text-primary mr-2" />
          <h1 className="text-xl font-bold text-primary">CryptoMacro Tracker</h1>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
        </div>
      </div>
      
      <nav className="bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto">
            <button 
              onClick={() => setActiveTab("crypto")}
              className={`px-4 py-3 font-medium flex items-center border-b-2 transition-colors ${
                activeTab === "crypto" 
                  ? "text-primary border-primary" 
                  : "text-muted-foreground border-transparent hover:text-primary"
              }`}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                className="h-4 w-4 mr-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m3.94.694-.347 1.969" />
              </svg>
              Cryptocurrencies
            </button>
            <button 
              onClick={() => setActiveTab("macro")}
              className={`px-4 py-3 font-medium flex items-center border-b-2 transition-colors ${
                activeTab === "macro" 
                  ? "text-primary border-primary" 
                  : "text-muted-foreground border-transparent hover:text-primary"
              }`}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                className="h-4 w-4 mr-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 3v18h18" />
                <path d="m19 9-5 5-4-4-3 3" />
              </svg>
              Macroeconomics
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
