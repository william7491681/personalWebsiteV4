import { Dot } from "lucide-react";
import Socials from "@/components/socials";
import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import topEchelon from '../../public/topEchelon.webp'
import dxc from '../../public/dxc.jpg'

const scrollTo = (section: string) => {
  switch (section) {
    case 'about':
      window.scrollTo({ top: 0, behavior: 'smooth'})
      break;
    case 'experience':
      break;
    default:
      break;
  }
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  return (
    <div className="w-full h-full bg-slate-900 font-yeseva">
      <div className="py-5 mx-5 backdrop-blur-md md:flex">
        <div className="flex flex-col pt-10 md:mr-5">
          <h1 className="text-4xl mb-3 font-semibold text-slate-100 md:sticky md:top-[3.75rem]">
            William Dines
          </h1>
          <p className="text-xl mb-3 text-slate-100 md:sticky md:top-[7rem]">
            Software Developer
          </p>
          <p className="text-xl text-slate-400 md:sticky md:top-[9.5rem]">
          Skilled programmer adept at transforming concepts into tangible solutions.
          </p>
          <br /><br />
          <div className="md:sticky md:top-[16rem]">
            <Socials />
          </div>
          <br /><br />
          <div className={"text-slate-400 text-3xl invisible md:visible max-w-fit sticky top-[20.75rem] hover:text-white transition ease-in-out duration-300 "
            + (scrollY < 50 ? 'text-white' : '')
          }>
            <a onClick={() => {scrollTo('about')}} className='cursor-pointer flex items-center'>
              <Dot />About Button
            </a>
          </div>
          <button className="text-white text-3xl sticky top-[25rem]" onClick={() => {console.log(scrollY)}}>
            scroll value
          </button>
        </div>
        <div className="w-full h-full md:ml-5">
          <div>
            <h1 className="text-3xl text-slate-100">
              About
            </h1>
            <p className="text-xl text-slate-400">
            I became obssessed with programming in 2019, after switching my major to computer science in my first year of college<br /><br />
            Ever since, I have been learning and building projects to improve my skills and knowledge in many fields, ranging from data science to automated testing<br /><br />
            Let's get together and build something amazing!
            </p>
          </div>
          <br /><br /><br /><br />
          <div>
            <h1 className="text-3xl text-slate-100">
              Experience
            </h1>
            <br />
            <Card className="grid grid-flow-row bg-slate-300 mb-10 md:w-[35rem]">
              <div className="flex items-center">
                <CardHeader className="w-full">
                  <CardTitle>QA Automation Engineer</CardTitle>
                  <CardDescription>Mar 2023 - Apr 2024</CardDescription>
                </CardHeader>
                <div className="w-20 md:w-40">
                  <div className="cursor-pointer rounded-full size-[64px] hover:scale-110 hover:drop-shadow-xl transition ease-in md:size-20 ">
                    <a href="https://topechelon.com" target="_blank" rel="noopener noreferrer">
                      <img src={topEchelon.src} className="" />
                    </a>
                  </div>
                </div>
              </div>
              <CardContent className="text-start w-full">
                <ul className="list-disc">
                  <li>Utilized Cypress to conduct comprehensive end-to-end and regression testing, identifying and resolving critical issues before production deployment</li>
                  <li>Spearheaded the creation of an integration testing suite, which helped reduce certain test times by up to 500%</li>
                  <li>Collaborated with cross-functional teams to identify and prioritize test cases for automation, reducing the need for manual testing dramatically</li>
                  <li>Demonstrated expertise in creating custom commands in Cypress to enhance test coverage, development speed, and maintainability</li>
                </ul>
              </CardContent>
              <CardFooter className="flex flex-wrap justify-center">
                <Badge className="bg-emerald-700">
                  Cypress
                </Badge>
                <Badge className="bg-emerald-700">
                  Regression Testing
                </Badge>
                <Badge className="bg-emerald-700">
                  Integration Testing
                </Badge>
                <Badge className="bg-emerald-700">
                  Automated Testing
                </Badge>
                <Badge className="bg-emerald-700">
                  Agile Development
                </Badge>
              </CardFooter>
            </Card>
            <Card className="grid grid-flow-row bg-slate-300 mb-10 md:w-[35rem]">
              <div className="flex items-center">
                <CardHeader className="w-full">
                  <CardTitle>Development Intern</CardTitle>
                  <CardDescription>June 2022 - Mar 2023</CardDescription>
                </CardHeader>
                <div className="w-20">
                  <a href="https://dxc.com/us/en" target="_blank" rel="noopener noreferrer">
                    <img src={dxc.src} className="cursor-pointer mr-[70px] rounded-full size-[64px] md:size-20" />
                  </a>
                </div>
              </div>
              <CardContent className="text-start w-full">
                <ul className="list-disc">
                  <li>Coordinated agile team in a SAFe environment as a tech lead focused on data analytics/visualization software</li>
                  <li>Implemented dashboards into a web application by utilizing Power Query and DAX scripts within Power BI visualizations</li>
                  <li>Maximized scripting efficiency by converting Python Pandas code to PySpark, yielding up to 100 times faster run times</li>
                </ul>
              </CardContent>
              <CardFooter className="flex flex-wrap justify-center">
                <Badge className="bg-emerald-700">
                  Cypress
                </Badge>
                <Badge className="bg-emerald-700">
                  Regression Testing
                </Badge>
                <Badge className="bg-emerald-700">
                  Integration Testing
                </Badge>
                <Badge className="bg-emerald-700">
                  Automated Testing
                </Badge>
                <Badge className="bg-emerald-700">
                  Agile Development
                </Badge>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
