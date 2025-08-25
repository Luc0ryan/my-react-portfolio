export default function StaticWheel() {
  return (
    <section
      className="
        w-full 
        overflow-x-hidden overflow-y-visible
        py-12 md:py-16          /* give top/bottom breathing room */
        text-black font-semibold leading-none
        text-[clamp(3rem,8vw,4rem)] /* smooth responsive font sizing */
      "
    >
      <div
        className="
          mx-auto flex max-w-full 
          flex-col md:flex-row 
          justify-center items-center md:items-center gap-6
        "
      >
        {/* Label: keep vertically aligned without manual translate */}
        <div className="whitespace-nowrap">Design for</div>

        {/* Words */}
        <ul
          className="
            inline-flex md:flex-col 
            gap-3 md:gap-0 
            leading-[1] md:leading-[1]   /* tighter vertical fit */
            text-center md:text-left
          "
        >
          <li className="opacity-10">tech</li>
          <li className="opacity-20">intent</li>
          <li className="bg-gradient-to-r from-[#828AF8] via-[#9265F7] to-[#A78BFA] bg-clip-text text-transparent">
            humans
          </li>
          <li className="opacity-20">intent</li>
          <li className="opacity-10">tech</li>
        </ul>
      </div>
    </section>
  );
}
