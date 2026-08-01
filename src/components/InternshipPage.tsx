import Internship from "./sections/Internship";
import Footer from "./sections/Footer";

export default function InternshipPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col pt-16">
      <div className="flex-grow">
        <Internship />
      </div>
      <Footer />
    </div>
  );
}
