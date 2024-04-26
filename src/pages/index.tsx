import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import dwagon from '../../public/dwagon.jpg';
import bonk from '../../public/next.svg';

export default function Home() {
  return (
    <div className="w-screen h-screen px-36 flex justify-center">
      <h1>
        Hello World!
      </h1>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <Avatar>
              <AvatarImage src={dwagon.src}/>
              <AvatarFallback>Cn</AvatarFallback>
            </Avatar>
          </CarouselItem>
          <CarouselItem>
          <Avatar>
              <AvatarImage src={bonk.src}/>
              <AvatarFallback>Cn</AvatarFallback>
            </Avatar>
          </CarouselItem>
          <CarouselItem>
          <Avatar>
              <AvatarImage src={dwagon.src}/>
              <AvatarFallback>Cn</AvatarFallback>
            </Avatar>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
