import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TradingViewWidget from "@/components/TradingViewWidget";

const MacroSection = () => {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-1">Macroeconomic Indicators</h2>
        <p className="text-muted-foreground">Global economic data and indicators</p>
      </div>

      {/* Economic Calendar */}
      <Card className="mb-8">
        <CardHeader className="pb-2">
          <CardTitle>Economic Calendar</CardTitle>
        </CardHeader>
        <CardContent>
          <TradingViewWidget
            type="economic-calendar"
            containerId="economic-calendar"
            height="h-96"
          />
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* S&P 500 Chart */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>S&P 500</CardTitle>
          </CardHeader>
          <CardContent>
            <TradingViewWidget
              type="symbol-overview"
              containerId="sp500-chart"
              options={{
                symbol: "FOREXCOM:SPXUSD",
                interval: "D"
              }}
            />
          </CardContent>
        </Card>

        {/* US 10-Year Treasury Yield */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>US 10-Year Treasury Yield</CardTitle>
          </CardHeader>
          <CardContent>
            <TradingViewWidget
              type="symbol-overview"
              containerId="us10y-chart"
              options={{
                symbol: "FRED:GS10",
                interval: "D"
              }}
            />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* US Dollar Index */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>US Dollar Index (DXY)</CardTitle>
          </CardHeader>
          <CardContent>
            <TradingViewWidget
              type="symbol-overview"
              containerId="dxy-chart"
              options={{
                symbol: "TVC:DXY",
                interval: "D"
              }}
            />
          </CardContent>
        </Card>

        {/* Gold Price */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Gold Price (XAU/USD)</CardTitle>
          </CardHeader>
          <CardContent>
            <TradingViewWidget
              type="symbol-overview"
              containerId="gold-chart"
              options={{
                symbol: "OANDA:XAUUSD",
                interval: "D"
              }}
            />
          </CardContent>
        </Card>
      </div>

      {/* Global Market Heat Map */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Global Market Heat Map</CardTitle>
        </CardHeader>
        <CardContent>
          <TradingViewWidget
            type="hotlists"
            containerId="market-heatmap"
            options={{
              screenerType: "global_stocks"
            }}
            height="h-96"
          />
        </CardContent>
      </Card>
    </section>
  );
};

export default MacroSection;
