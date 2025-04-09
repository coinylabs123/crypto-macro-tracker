import { useEffect, useRef, useState } from "react";
import { SkeletonWidget } from "@/components/ui/skeleton-widget";
import ErrorDisplay from "@/components/ErrorDisplay";
import { useTheme } from "@/components/ui/theme-toggle";

declare global {
  interface Window {
    TradingView: any;
    tradingViewWidgets: any[];
  }
}

type WidgetType = 
  | "market-overview"
  | "symbol-overview"
  | "screener"
  | "advanced-chart"
  | "economic-calendar"
  | "hotlists";

interface TradingViewWidgetProps {
  type: WidgetType;
  containerId: string;
  options?: Record<string, any>;
  height?: string;
}

const TradingViewWidget = ({ 
  type, 
  containerId,
  options = {},
  height = "h-80"
}: TradingViewWidgetProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    // Initialize tradingViewWidgets array if it doesn't exist
    if (!window.tradingViewWidgets) {
      window.tradingViewWidgets = [];
    }

    if (!containerRef.current) return;

    // Clear the container
    containerRef.current.innerHTML = '';
    setIsLoading(true);
    setError(null);

    // Wait for TradingView to be available
    if (!window.TradingView) {
      setError("TradingView library not loaded. Please check your internet connection.");
      setIsLoading(false);
      return;
    }

    try {
      const isDark = theme === "dark";
      
      // Common widget options
      const commonOptions = {
        theme: isDark ? "dark" : "light",
        autosize: true,
        container_id: containerId,
        ...options
      };

      let widget;

      switch(type) {
        case "market-overview":
          widget = new window.TradingView.MediumWidget({
            ...commonOptions,
            symbols: options.symbols || [
              ["Bitcoin", "BINANCE:BTCUSDT|1D"],
              ["Ethereum", "BINANCE:ETHUSDT|1D"],
              ["Binance Coin", "BINANCE:BNBUSDT|1D"],
              ["Solana", "BINANCE:SOLUSDT|1D"],
              ["Cardano", "BINANCE:ADAUSDT|1D"]
            ],
            chartOnly: false,
            width: "100%",
            height: 400,
            locale: "en",
            colorTheme: isDark ? "dark" : "light",
            isTransparent: true,
          });
          break;
          
        case "symbol-overview":
          widget = new window.TradingView.widget({
            ...commonOptions,
            symbol: options.symbol || "BINANCE:BTCUSDT",
            interval: options.interval || "D",
            timezone: "Etc/UTC",
            style: "1",
            locale: "en",
            toolbar_bg: isDark ? "#1e1e1e" : "#f1f3f6",
            enable_publishing: false,
            allow_symbol_change: true,
            hide_side_toolbar: false,
          });
          break;
          
        case "screener":
          widget = new window.TradingView.widget({
            ...commonOptions,
            width: "100%",
            height: 400,
            defaultColumn: "overview",
            screener_type: options.screenerType || "crypto_mkt",
            displayCurrency: "USD",
            colorTheme: isDark ? "dark" : "light",
            locale: "en",
          });
          break;
          
        case "advanced-chart":
          widget = new window.TradingView.widget({
            ...commonOptions,
            symbol: options.symbol || "BINANCE:BTCUSDT",
            interval: options.interval || "D",
            timezone: "Etc/UTC",
            style: "1",
            locale: "en",
            toolbar_bg: isDark ? "#1e1e1e" : "#f1f3f6",
            enable_publishing: false,
            hide_top_toolbar: false,
            allow_symbol_change: true,
            save_image: false,
          });
          break;
          
        case "economic-calendar":
          widget = new window.TradingView.widget({
            ...commonOptions,
            width: "100%",
            height: 400,
            colorTheme: isDark ? "dark" : "light",
            isTransparent: true,
            locale: "en",
            importanceFilter: "-1,0,1",
          });
          break;
          
        case "hotlists":
          widget = new window.TradingView.widget({
            ...commonOptions,
            width: "100%",
            height: 400,
            defaultColumn: "overview",
            screener_type: options.screenerType || "crypto_mkt",
            displayCurrency: "USD",
            colorTheme: isDark ? "dark" : "light",
            locale: "en",
          });
          break;
          
        default:
          setError(`Unknown widget type: ${type}`);
          setIsLoading(false);
          return;
      }

      // Store widget reference for theme updates
      window.tradingViewWidgets.push(widget);

      // Set loading to false after a short delay to ensure widget had time to render
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } catch (err) {
      console.error(`Error loading widget ${type} for ${containerId}:`, err);
      setError(err instanceof Error ? err.message : 'Failed to load TradingView widget');
      setIsLoading(false);
    }

    // Cleanup function to remove widget from global array when component unmounts
    return () => {
      if (window.tradingViewWidgets) {
        window.tradingViewWidgets = window.tradingViewWidgets.filter(
          (widget) => widget.id !== containerId
        );
      }
    };
  }, [type, containerId, options, theme]);

  if (error) {
    return <ErrorDisplay message={error} />;
  }

  return (
    <div className="w-full relative">
      {isLoading && <SkeletonWidget height={height} />}
      <div 
        id={containerId} 
        ref={containerRef} 
        className={`w-full ${height}`}
        style={{ visibility: isLoading ? 'hidden' : 'visible' }}
      />
    </div>
  );
};

export default TradingViewWidget;
