import Section1 from "@/components/home/Section1";
import Slider from "../components/Slider";
import Section2 from "@/components/home/Section2";
import Section3 from "@/components/home/Section3";
import Section4 from "@/components/home/Section4";
import Section5 from "@/components/home/Section5";
function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <div className="md:w-4/5 w-11/12 lg:w-3/4 mt-10 p-6">
        <Slider />
      </div>

      <Section1 />

      <Section2 />

      <Section3 />

      <Section4 />

      <Section5 />
    </div>
  );
}

export default Home;
