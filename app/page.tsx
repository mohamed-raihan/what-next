import Image from "next/image";
import Banner from "./sections/Home/banner";
import OurValues from "./sections/Home/ourvalues";
import StudyAbroadSection from "./sections/Home/studyAbroad";
import VoiceOfSuccess from "./sections/Home/success";
import StudentReviewsAndUniversities from "./sections/Home/review&university";

export default function Home() {
  return (
    <div>
      <Banner />
      <OurValues />
      <StudyAbroadSection />
      <VoiceOfSuccess />
      <StudentReviewsAndUniversities />
    </div>
  );
}
