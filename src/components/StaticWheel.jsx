// StaticWheel.tsx
export default function StaticWheel() {
  return (
    <section className="w-full overflow-x-hidden text-black font-semibold leading-none text-[48px] md:text-[64px]">
      {/* Center the whole group horizontally on all breakpoints */}
      <div className="mx-auto flex max-w-full flex-col md:flex-row justify-center gap-4 items-center md:items-start">
        
        {/* Label: baseline-align with the middle word on desktop */}
        <div className="md:translate-y-[calc(2*1em)]">
          Design for
        </div>

        {/* Words */}
        <div
          className="
            inline-flex select-none
            flex-row justify-center md:flex-col
            gap-3 md:gap-0                       /* ⬅ tighten: no vertical gap on desktop */
            max-w-full whitespace-nowrap
            overflow-visible md:overflow-visible /* ⬅ ensure no vertical clipping */
            self-center md:self-auto
            md:[&>span]:block                     /* ⬅ each line is a block on desktop */
            md:[&>span]:m-0 md:[&>span]:p-0       /* ⬅ remove any residual spacing */
          "
        >
          <span className="opacity-10">tech</span>
          <span className="opacity-10 md:opacity-20">intent</span>
          <span className="bg-gradient-to-r from-[#828AF8] via-[#9265F7] to-[#A78BFA] bg-clip-text text-transparent">
            humans
          </span>
          <span className="opacity-10 md:opacity-20">intent</span>
          <span className="opacity-10">tech</span>
        </div>
      </div>
    </section>
  );
}
