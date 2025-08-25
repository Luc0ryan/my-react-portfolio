import { FileText, User, Github } from "lucide-react";

export default function About() {
  return (
    <section className="max-w-xl font-semibold">
      <div className="mb-6">
        <div className="text-5xl leading-none"> hi, i'm lucas </div>
        <div className="text-2xl mt-2">product designer · front-end dev </div>
      </div>
size={24}
      <div className="flex flex-row gap-3">
        <div className="flex flex-col mt-2 gap-6 text-xs h-fit">
          <div className="group flex flex-col items-center">
            <div className="absolute -rotate-90 origin-bottom -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:pointer-cursor transition-opacity">
              resume
            </div>
            <FileText className="h-8 w-8 "/>
          </div>

          <div className="group flex flex-col items-center">
            <div className="absolute -rotate-90 origin-bottom -translate-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
              linkedin
            </div>
            <a href= "#">
            <User className="h-8 w-8 cursor-pointer"/>
            </a>

          </div>

          <div className="group flex flex-col items-center">
            <div className="absolute -rotate-90 origin-bottom -translate-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
              github
            </div>
            <Github className="h-8 w-8 pointer-cursor"/>
          </div>
        </div>

        <div className="flex flex-col text-lg gap-2 font-normal border-l-2 pl-3">
          <div>
            I'm drawn to design that makes the hard things invisible and the
            simple things obvious.
          </div>
          <div>
            When I'm not building, you'll find me weightlifting, hiking around
            San Jose, or at a concerts.
          </div>
          <div>
            I'm always looking out for a new project, feel free to start a convo
            at{" "}
            <span className="font-bold text-indigo-700">
              lucryan@gmail.com!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
