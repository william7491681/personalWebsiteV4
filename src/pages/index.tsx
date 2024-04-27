import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import bonk from '../../public/next.svg';

export default function Home() {
  return (
    <div className=" h-screen bg-devLaptop bg-cover bg-bo ">
      <div className="text-white flex justify-center pt-10 pl-5">
        <div className="backdrop-blur-md backdrop-brightness-80 flex">
          <h1 className="text-7xl">
            William Dines
          </h1>
        </div>
      </div>
      <br />
      <div className="flex justify-center w-full h-screen">
        <Carousel className="">
          <CarouselContent className="flex">
            <CarouselItem className="flex justify-center">
              <Avatar>
                <AvatarImage src={bonk.src}/>
                <AvatarFallback>Cn</AvatarFallback>
              </Avatar>
            </CarouselItem>
            <CarouselItem className="flex justify-center">
            <Avatar>
                <AvatarImage src={bonk.src}/>
                <AvatarFallback>Cn</AvatarFallback>
              </Avatar>
            </CarouselItem>
            <CarouselItem className="flex justify-center">
            <Avatar>
                <AvatarImage src={bonk.src}/>
                <AvatarFallback>Cn</AvatarFallback>
              </Avatar>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
