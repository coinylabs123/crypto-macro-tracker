import { useState } from "react";
import Header from "@/components/Header";
import CryptoSection from "@/components/CryptoSection";
import MacroSection from "@/components/MacroSection";
import Footer from "@/components/Footer";

const Home = () => {
  const [activeTab, setActiveTab] = useState<"crypto" | "macro">("crypto");

  return (
    <div className="flex min-h-screen flex-col">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="container mx-auto px-4 py-6 flex-grow">
        {activeTab === "crypto" ? <CryptoSection /> : <MacroSection />}
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
