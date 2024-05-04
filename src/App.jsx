import "./App.css";
import { Card } from "./components/Card";
import {
  DanielImg,
  JonathanImg,
  KiraImg,
  JeanetImg,
  PatrickImg,
} from "./assets";
/**
 * 
 * Note :
 *  1. "Verified Graduate" has the same color as the person's name with 50% opacity
    2. Review paragraphs inside the quotations have the same color as well, but are at 70% opacity
 */

console.log(DanielImg);

const TestimonialData = [
  {
    id: 1,
    userName: "Daniel Clifford",
    userProfile: DanielImg,
    userCategory: "Verified Graduate",
    userTestimonialTitle:
      " I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth. ",
    userTestimonialCont:
      "“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”",
  },
  {
    id: 2,
    userName: "  Jonathan Walters ",
    userProfile: JonathanImg,
    userCategory: "Verified Graduate",
    userTestimonialTitle:
      " The team was very supportive and kept me motivated  ",
    userTestimonialCont:
      " “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ” ",
  },
  {
    id: 3,
    userName: "   Kira Whittle  ",
    userProfile: KiraImg,
    userCategory: "Verified Graduate",
    userTestimonialTitle:
      " Such a life-changing experience. Highly recommended! ",
    userTestimonialCont:
      " “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ” ",
  },
  {
    id: 4,
    userName: "  Jeanette Harmon  ",
    userProfile: JeanetImg,
    userCategory: "Verified Graduate",
    userTestimonialTitle: "  An overall wonderful and rewarding experience   ",
    userTestimonialCont:
      " “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”  ",
  },
  {
    id: 5,
    userName: " Patrick Abrams  ",
    userProfile: PatrickImg,
    userCategory: "Verified Graduate",
    userTestimonialTitle:
      "  Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.   ",
    userTestimonialCont:
      "  “ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”  ",
  },
];

const testimonialElement = TestimonialData?.map((data, index) => (
  <Card
    key={data.id}
    TestimonialUsrName={data?.userName}
    TestimonialUsrProf={data?.userProfile}
    TestimonialUsrCtgy={data?.userCategory}
    TestimonialTitle={data?.userTestimonialTitle}
    TestimonialCont={data?.userTestimonialCont}
    TestimonialStyle={`${
      index === 0
        ? " col-span-1 lg:col-span-2 bg-Moderate-violet text-white"
        : index === 1
        ? "bg-Very-dark-grayish-blue text-white "
        : index === 2
        ? " row-span-1 lg:row-span-2 bg-White text-Very-dark-grayish-blue"
        : index === 3
        ? " bg-White text-Very-dark-grayish-blue"
        : index === 4
        ? " col-span-1 md:col-span-2 text-white hover:text-Very-dark-grayish-blue bg-Very-dark-blackish-blue"
        : ""
    }`}
    index={index}
  />
));

function App() {
  return (
    <>
      <div className=" min-h-screen bg-Light-grayish-blue flex items-center w-full justify-center ">
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row-dense w-[90%] m-auto md:m-0  md:max-w-[72rem] gap-5  md:gap-[1.5rem_1.4rem] my-16 sm:my-0   ">
          {testimonialElement}
        </main>
      </div>
    </>
  );
}

export default App;
