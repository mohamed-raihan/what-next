import Image from "next/image";
import Banner from "./sections/Home/banner";
import OurValues from "./sections/Home/ourvalues";
import StudyAbroadSection from "./sections/Home/studyAbroad";

export default function Home() {
  return (
    <div>
      <Banner />
      <OurValues />
      <StudyAbroadSection />
    </div>
  );
}
