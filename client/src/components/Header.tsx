import { ThemeToggle } from "./ui/theme-toggle";
import { TrendingUp, Activity } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-card shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <TrendingUp className="h-5 w-5 text-primary mr-2" />
          <h1 className="text-xl font-bold text-primary">CryptoMacro Tracker</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Activity className="h-4 w-4 mr-1" />
            <span>Live Market Data</span>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
