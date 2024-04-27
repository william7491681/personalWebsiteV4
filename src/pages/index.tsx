import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import bonk from '../../public/next.svg';

export default function Home() {
  return (
    <div className="w-screen h-screen bg-slate-900 sm:bg-devLaptop bg-cover bg-top">
      <div className="backdrop-blur-md md:grid md:grid-flow-col">
        <div className="py-5 flex flex-col pt-10 md:justify-center md:pt-20">
          <h1 className="text-6xl text-slate-100 font-bold text-center sm:text-slate-950">
            William Dines
          </h1>
          <p className="text-center text-xl text-slate-400">
            Software Developer
          </p>
          <br />
          <h1 className="text-center text-4xl font-black text-slate-100 sm:text-slate-950">
            About
          </h1>
          <p className="text-2xl text-slate-100 font-bold text-center sm:text-slate-950">
          Hi there! I'm William Dines, a dedicated software developer with a knack for turning ideas into reality through code.<br /><br />
          I began my journey in 2019 when I switched my major from kinesiology to computer science at LSU<br /><br />
          Since then, I've made countless pet projects, covering disciplines ranging from web scraping, to web development, to data science.<br /><br />
          Let's connect and build something remarkable!
          </p>
        </div>
        <div className="flex justify-center w-full h-screen">
          <p>
            test
          </p>
        </div>
      </div>
    </div>
  );
}
