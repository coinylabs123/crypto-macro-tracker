import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DashboardContent from "@/components/DashboardContent";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="container mx-auto px-4 py-6 flex-grow">
        <DashboardContent />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
