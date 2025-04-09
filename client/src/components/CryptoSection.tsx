import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TradingViewWidget from "@/components/TradingViewWidget";

const CryptoSection = () => {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-1">Cryptocurrency Markets</h2>
        <p className="text-muted-foreground">Live cryptocurrency data and charts</p>
      </div>

      {/* Crypto Market Overview Widget */}
      <Card className="mb-8">
        <CardHeader className="pb-2">
          <CardTitle>Market Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <TradingViewWidget
            type="market-overview"
            containerId="crypto-market-overview"
            height="h-96"
          />
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Bitcoin Chart Widget */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Bitcoin (BTC)</CardTitle>
          </CardHeader>
          <CardContent>
            <TradingViewWidget
              type="symbol-overview"
              containerId="bitcoin-chart"
              options={{
                symbol: "BINANCE:BTCUSDT",
                interval: "D"
              }}
            />
          </CardContent>
        </Card>

        {/* Ethereum Chart Widget */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Ethereum (ETH)</CardTitle>
          </CardHeader>
          <CardContent>
            <TradingViewWidget
              type="symbol-overview"
              containerId="ethereum-chart"
              options={{
                symbol: "BINANCE:ETHUSDT",
                interval: "D"
              }}
            />
          </CardContent>
        </Card>
      </div>

      {/* Top Cryptocurrencies Table */}
      <Card className="mb-8">
        <CardHeader className="pb-2">
          <CardTitle>Top Cryptocurrencies</CardTitle>
        </CardHeader>
        <CardContent>
          <TradingViewWidget
            type="screener"
            containerId="crypto-screener"
            options={{
              screenerType: "crypto_mkt"
            }}
            height="h-96"
          />
        </CardContent>
      </Card>

      {/* Crypto Fear & Greed Index */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Crypto Fear & Greed Index</CardTitle>
        </CardHeader>
        <CardContent>
          <TradingViewWidget
            type="advanced-chart"
            containerId="fear-greed-index"
            options={{
              symbol: "CRYPTOCAP:TOTAL",
              interval: "D"
            }}
            height="h-72"
          />
        </CardContent>
      </Card>
    </section>
  );
};

export default CryptoSection;
