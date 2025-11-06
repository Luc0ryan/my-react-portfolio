import { FileText, User, Github } from "lucide-react";

export default function About() {
  return (
    <section className="max-w-xl font-semibold py-4">
      <div className="mb-6">
        <div className=" text-[clamp(2rem,6vw,3.5rem)]  leading-none">
          {" "}
          hi, i'm Lucas{" "}
        </div>
        <div className="text-xl md:text-2xl mt-2">product designer · front-end dev </div>
      </div>

      <div className="flex flex-row items-center md:gap-3 font-bold text-sm">
        <div className=" flex-col mt-1 gap-6 text-xs h-fit hidden md:flex">
          <div className="group flex flex-col items-center">
            <div className="absolute -rotate-90 origin-bottom -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:pointer-cursor transition-opacity">
              resume
            </div>
            <a href= "pdfs/resumeLucasRyan.pdf" type="application/pdf" target="_blank">
              <FileText className="h-8 w-8 stroke-[1.5px]" />
            </a>
          </div>

          <div className="group flex flex-col items-center">
            <div className="absolute -rotate-90 origin-bottom -translate-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
              linkedin
            </div>
            <a href="https://linkedin.com/in/lucasryan" target="_blank">
              <User className="h-8 w-8 stroke-[1.5px]" />
            </a>
          </div>

          <div className="group flex flex-col items-center" >
            <div className="absolute -rotate-90 origin-bottom -translate-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
              github
            </div>
            <a href="https://github.com/Luc0ryan" target="_blank">
              <Github className="h-8 w-8 stroke-[1.5px]" />
            </a>
          </div>
        </div>

        <div className="flex flex-col text-lg gap-2 font-normal md:border-l-2 md:pl-3">
          <div>
            I craft seamless, user-focused products that balance design and
            code.
          </div>
          <div>
            When I'm not building, you'll find me weightlifting, hiking around
            San Jose, or at a concerts.
          </div>
          <div>
            I'm always looking out for a new project, feel free to start a convo
            at{" "}
            <a
              href="mailto:lucryan@gmail.com"
              className="relative inline-block px-1 rounded bg-violet-100 text-indigo-700 
              after:content-[''] after:absolute after:left-0 after:bottom-0 
              after:h-[2px] after:w-0 after:bg-indigo-600 after:transition-all 
              hover:after:w-full"
            >
              lucryan@gmail.com
            </a>
          </div>

<div className="mt-2 flex md:hidden flex-wrap justify-start gap-4 text-xs text-indigo-500">
    <a href="/resume.pdf" className="underline underline-offset-2 hover:text-neutral-700">
      Resume
    </a>
    <span>•</span>
    <a href="https://github.com/lucasryan" target="_blank" className="underline underline-offset-2 hover:text-neutral-700">
      GitHub
    </a>
    <span>•</span>
    <a href="https://linkedin.com/in/lucasryan" target="_blank" className="underline underline-offset-2 hover:text-neutral-700">
      LinkedIn
    </a>
  </div>
        </div>
      </div>
    </section>
  );
}
