import { FileText, User, Github } from "lucide-react";

export default function About() {
  return (
    <section className="max-w-xl font-semibold">
      <div className="mb-6">
        <div className="text-5xl leading-none"> hi, i'm lucas </div>
        <div className="text-2xl mt-2">product designer · front-end dev </div>
      </div>

      <div className="flex flex-row items-center gap-3 font-bold text-sm">
        <div className="flex flex-col mt-1 gap-6 text-xs h-fit">
          <div className="group flex flex-col items-center">
            <div className="absolute -rotate-90 origin-bottom -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:pointer-cursor transition-opacity">
              resume
            </div>
            <a href="#">
              <FileText className="h-8 w-8 stroke-[1.5px]" />
            </a>
          </div>

          <div className="group flex flex-col items-center">
            <div className="absolute -rotate-90 origin-bottom -translate-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
              linkedin
            </div>
            <a href="#">
              <User className="h-8 w-8 stroke-[1.5px]" />
            </a>
          </div>

          <div className="group flex flex-col items-center">
            <div className="absolute -rotate-90 origin-bottom -translate-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
              github
            </div>
            <a href="#">
              <Github className="h-8 w-8 stroke-[1.5px]" />
            </a>
          </div>
        </div>

        <div className="flex flex-col text-lg gap-2 font-normal border-l-2 pl-3">
          <div>
            I craft seamless, user-focused products that balance design and code.
          </div>
          <div>
            When I'm not building, you'll find me weightlifting, hiking around
            San Jose, or at a concerts.
          </div>
          <div>
            I'm always looking out for a new project, feel free to start a convo
            at{" "}
            <a href="mailto:lucryan@gmail.com" 
   className="relative inline-block px-1 rounded bg-violet-100 text-indigo-700 
              after:content-[''] after:absolute after:left-0 after:bottom-0 
              after:h-[2px] after:w-0 after:bg-indigo-600 after:transition-all 
              hover:after:w-full">
  lucryan@gmail.com
</a>
          </div>
        </div>
      </div>
    </section>
  );
}
