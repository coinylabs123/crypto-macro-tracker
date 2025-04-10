import TradingViewWidget from "./TradingViewWidget";

// Chart data configuration
const chartConfigs = [
  { 
    id: 'tradingview_btcusd', 
    symbol: 'BITSTAMP:BTCUSD',
    chartType: 'candlestick',
    title: 'Bitcoin (BTCUSD)'
  },
  { 
    id: 'tradingview_nasdaq', 
    symbol: 'NASDAQ:NDX',
    chartType: 'candlestick',
    title: 'NASDAQ 100 Index (NDX)'
  },
  { 
    id: 'tradingview_gold', 
    symbol: 'TVC:GOLD',
    chartType: 'candlestick',
    title: 'Gold (XAUUSD)'
  },
  { 
    id: 'tradingview_sp500', 
    symbol: 'SPX',
    chartType: 'candlestick',
    title: 'S&P 500 Index'
  },
  { 
    id: 'tradingview_btcdom', 
    symbol: 'CRYPTOCAP:BTC.D',
    chartType: 'line',
    title: 'Bitcoin Dominance'
  },
  { 
    id: 'tradingview_totalcap', 
    symbol: 'CRYPTOCAP:TOTAL',
    chartType: 'line',
    title: 'Total Crypto Market Cap'
  },
  { 
    id: 'tradingview_usdtcap', 
    symbol: 'CRYPTOCAP:USDT',
    chartType: 'line',
    title: 'Tether Market Cap'
  },
  { 
    id: 'tradingview_vix', 
    symbol: 'TVC:VIX',
    chartType: 'line',
    title: 'Volatility Index (VIX)'
  },
  { 
    id: 'tradingview_treasury', 
    symbol: 'FRED:DGS10',
    chartType: 'line',
    title: '10-Year Treasury Yield'
  },
  { 
    id: 'tradingview_usd', 
    symbol: 'INDEX:DXY',
    chartType: 'line',
    title: 'US Dollar Index (DXY)'
  },
  { 
    id: 'tradingview_fedfunds', 
    symbol: 'FRED:FEDFUNDS',
    chartType: 'line',
    title: 'Federal Funds Rate'
  },
  { 
    id: 'tradingview_cpi', 
    symbol: 'FRED:CPILFESL',
    chartType: 'line',
    title: 'Core CPI'
  },
  { 
    id: 'tradingview_eurusd', 
    symbol: 'FX:EURUSD',
    chartType: 'candlestick',
    title: 'EUR/USD'
  }
];

// Group the charts for better layout organization
const cryptoCharts = chartConfigs.slice(0, 7);
const macroCharts = chartConfigs.slice(7);

const DashboardContent = () => {
  return (
    <div className="space-y-8">
      <section>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground">Cryptocurrency Markets</h2>
          <p className="text-muted-foreground mt-1">Real-time data from major crypto exchanges and indices</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cryptoCharts.map((chart) => (
            <div key={chart.id} className="bg-card rounded-lg shadow-md overflow-hidden border border-border">
              <div className="p-3 border-b border-border bg-muted/20">
                <h3 className="font-medium text-foreground">{chart.title}</h3>
              </div>
              <div className="p-0">
                <TradingViewWidget 
                  type="advanced-chart"
                  containerId={chart.id}
                  options={{
                    symbol: chart.symbol,
                    theme: "dark",
                    hide_side_toolbar: true,
                    chart_type: chart.chartType,
                    toolbar_bg: "#151924",
                    height: 400,
                    withdateranges: false,
                    range: "12M",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground">Macroeconomic Indicators</h2>
          <p className="text-muted-foreground mt-1">Key economic data and financial market indicators</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {macroCharts.map((chart) => (
            <div key={chart.id} className="bg-card rounded-lg shadow-md overflow-hidden border border-border">
              <div className="p-3 border-b border-border bg-muted/20">
                <h3 className="font-medium text-foreground">{chart.title}</h3>
              </div>
              <div className="p-0">
                <TradingViewWidget 
                  type="advanced-chart"
                  containerId={chart.id}
                  options={{
                    symbol: chart.symbol,
                    theme: "dark",
                    hide_side_toolbar: true,
                    chart_type: chart.chartType,
                    toolbar_bg: "#151924",
                    height: 400,
                    withdateranges: false,
                    range: "12M",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DashboardContent;