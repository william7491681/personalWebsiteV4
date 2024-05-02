import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import bonk from '../../public/next.svg';
import Socials from "@/components/socials";

export default function Home() {
  return (
    <div className="w-full h-full bg-slate-900 font-yeseva">
      <div className="py-5 mx-5 backdrop-blur-md md:grid md:grid-flow-col">
        <div className="flex flex-col pt-10">
          <div>
            <h1 className="text-4xl mb-3 font-semibold text-slate-100">
              William Dines
            </h1>
            <p className="text-xl mb-3 text-slate-100">
              Software Developer
            </p>
            <p className="text-xl text-slate-400">
            Skilled programmer adept at transforming concepts into tangible solutions.
            </p>
            <br /><br />
            <div>
              <Socials />
            </div>
            <br /><br />
          </div>
        </div>
        <div className="w-full h-screen">
          <h1 className="text-3xl text-slate-100 sm:text-slate-950">
            About
          </h1>
          <p className="text-xl text-slate-400 font-bold sm:text-slate-950">
          I became obssessed with programming in 2019, after switching my major to computer science in my first year of college<br /><br />
          Ever since, I have been learning and building projects to improve my skills and knowledge in many fields, ranging from data science to automated testing<br /><br />
          Let's get together and build something amazing!
          </p>
          <p>
            test
          </p>
        </div>
      </div>
    </div>
  );
}
