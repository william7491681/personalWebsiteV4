import { Dot } from "lucide-react";
import Socials from "@/components/socials";
import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import topEchelon from "../../public/topEchelon.webp"
import dxc from "../../public/dxc.jpg"
import lsu from "../../public/LSU.jpg"
import predictionProject from "../../public/diamondPredictionsProject.png"
import previousPersonalWebsite from "../../public/previousPersonalWebsite.png"

const scrollTo = (section: string) => {
  switch (section) {
    case "about":
      window.scrollTo({ top: 0, behavior: "smooth"})
      break;
    case "experience":
      window.scrollTo({ top: 325, behavior: "smooth"})
      break;
    case "projects":
      window.scrollTo({ top: 1475, behavior: "smooth"})
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
          <div className={"text-slate-400 text-3xl hidden md:block max-w-fit sticky top-[20.75rem] hover:text-white transition ease-in-out duration-300 "
            + (scrollY < 325 ? "text-white" : "")
          }>
            <a onClick={() => {scrollTo("about")}} className="cursor-pointer flex items-center">
              <Dot />About
            </a>
          </div>
          <div className={"text-slate-400 text-3xl hidden md:block max-w-fit sticky top-[23rem] hover:text-white transition ease-in-out duration-300 "
            + ((scrollY >= 325) && (scrollY < 1475) ? "text-white" : "")
          }>
            <a onClick={() => {scrollTo("experience")}} className="cursor-pointer flex items-center">
              <Dot />Experience
            </a>
          </div>
          <div className={"text-slate-400 text-3xl hidden md:block max-w-fit sticky top-[25.25rem] hover:text-white transition ease-in-out duration-300 "
            + ((scrollY >= 1475) ? "text-white" : "")
          }>
            <a onClick={() => {scrollTo("projects")}} className="cursor-pointer flex items-center">
              <Dot />Projects
            </a>
          </div>
        </div>
        <div className="w-full h-full md:ml-5">
          <div className="mb-20">
            <h1 className="text-3xl text-slate-100">
              About
            </h1>
            <p className="text-xl text-slate-400">
            I became obssessed with programming in 2019, after switching my major to computer science in my first year of college<br /><br />
            Ever since, I have been learning and building projects to improve my skills and knowledge in many fields, ranging from data science to automated testing<br /><br />
            Let"s get together and build something amazing!
            </p>
          </div>
          <div className="mb-20">
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
                  <div className="cursor-pointer size-[64px] hover:scale-110 hover:drop-shadow-xl transition ease-in md:size-20">
                    <a href="https://topechelon.com" target="_blank" rel="noopener noreferrer">
                      <img src={topEchelon.src}/>
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
                  Agile Development
                </Badge>
                <Badge className="bg-emerald-700">
                  Automated Testing
                </Badge>
                <Badge className="bg-emerald-700">
                  Cypress
                </Badge>
                <Badge className="bg-emerald-700">
                  Integration Testing
                </Badge>
                <Badge className="bg-emerald-700">
                  Typescript
                </Badge>
              </CardFooter>
            </Card>
            <Card className="grid grid-flow-row bg-slate-300 mb-10 md:w-[35rem]">
              <div className="flex items-center">
                <CardHeader className="w-full">
                  <CardTitle>Development Intern</CardTitle>
                  <CardDescription>June 2022 - Mar 2023</CardDescription>
                </CardHeader>
                <div className="w-20 md:w-40">
                  <div className="cursor-pointer mr-1 size-[64px] hover:scale-110 hover:drop-shadow-xl transition ease-in md:size-20">
                    <a href="https://dxc.com/us/en" target="_blank" rel="noopener noreferrer">
                      <img src={dxc.src} className="rounded-full"/>
                    </a>
                  </div>
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
                  Agile Development
                </Badge>
                <Badge className="bg-emerald-700">
                  Data Analysis
                </Badge>
                <Badge className="bg-emerald-700">
                  Data Engineering
                </Badge>
                <Badge className="bg-emerald-700">
                  Data Visualization
                </Badge>
                <Badge className="bg-emerald-700">
                  Python
                </Badge>
                <Badge className="bg-emerald-700">
                  SAFe Framework
                </Badge>
              </CardFooter>
            </Card>
            <Card className="grid grid-flow-row bg-slate-300 mb-10 md:w-[35rem]">
              <div className="flex items-center">
                <CardHeader className="w-full">
                  <CardTitle>Student IT Worker</CardTitle>
                  <CardDescription>Jan 2022 - Jun 2022</CardDescription>
                </CardHeader>
                <div className="w-20 md:w-40">
                  <div className="cursor-pointer mr-1 size-[64px] hover:scale-110 hover:drop-shadow-xl transition ease-in md:size-20">
                    <a href="https://itservice.lsu.edu/TDClient/34/Portal/Home/" target="_blank" rel="noopener noreferrer">
                      <img src={lsu.src} className="rounded-full"/>
                    </a>
                  </div>
                </div>
              </div>
              <CardContent className="text-start w-full">
                <ul className="list-disc">
                  <li>Performed help-desk related duties such as answering phones and responding to online tickets</li>
                  <li>Added to internal documentation to assist future workers in specific problems</li>
                  <li>Aided in the transition from a manual to a remote imaging process for all LSU computers</li>
                </ul>
              </CardContent>
              <CardFooter className="flex flex-wrap justify-center">
              <Badge className="bg-emerald-700">
                  Customer Service
                </Badge>
                <Badge className="bg-emerald-700">
                  Helpdesk
                </Badge>
                <Badge className="bg-emerald-700">
                  Information Technology
                </Badge>
              </CardFooter>
            </Card>
          </div>
          <div>
            <h1 className="text-3xl text-slate-100">
              Projects
            </h1>
            <br />
            <Card className="rounded-none shadow-none border-none mb-10">
              <CardHeader className="m-0 p-0 space-y-0">
                <img src={predictionProject.src}/>
                <CardTitle className="bg-slate-950 text-slate-100 font-normal text-lg text-center pb-1">
                  A React app with a Flask backend that predicts the price of diamonds based on various features
                </CardTitle>
              </CardHeader>
              <CardContent className="bg-slate-950 flex justify-center pb-1">
                <Badge variant={"outline"} className="text-white hover:bg-white hover:text-slate-950 hover:cursor-pointer" onClick={() => {
                  window.open("https://github.com/william7491681/Linear-Model-With-Website")
                }}>Link to Github</Badge>
              </CardContent>
            </Card>
            <Card className="rounded-none shadow-none border-none">
              <CardHeader className="m-0 p-0 space-y-0">
                <img src={previousPersonalWebsite.src}/>
                <CardTitle className="bg-slate-950 text-slate-100 font-normal text-lg text-center pb-1">
                  My previous personal website, coded in React and Tailwind
                </CardTitle>
              </CardHeader>
              <CardContent className="bg-slate-950 flex justify-center pb-1">
                <Badge variant={"outline"} className="text-white hover:bg-white hover:text-slate-950 hover:cursor-pointer" onClick={() => {
                  window.open("https://github.com/william7491681/website-V3")
                }}>Link to Github</Badge>
              </CardContent>
            </Card>
          </div>
          <div className="mt-20 w-full font-thin text-center text-slate-400">
            <p>Made by William Dines</p>
            <p>
              Created with <span className="font-black text-slate-100 hover:text-cyan-400 hover:cursor-pointer" onClick={() => {
                window.open("https://nextjs.org/")
              }}>Next.js</span>,&nbsp;
              <span className="font-black text-slate-100 hover:text-cyan-400 hover:cursor-pointer" onClick={() => {
                window.open("https://tailwindcss.com/")
              }}>Tailwind CSS</span>, and&nbsp;
              <span className="font-black text-slate-100 hover:text-cyan-400 hover:cursor-pointer" onClick={() => {
                window.open("https://www.typescriptlang.org/")
              }}>TypeScript</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
