import Wheel from "./Wheel";

export default function Hero() {
  return (
    <section className="max-w-screen">
      {/* Was: flex-col md:flex-row items-baseline gap-2 align-middle */}
      <div className="flex flex-col md:flex-row items-baseline gap-2"> {/* removed align-middle */}
        <div className="text-black font-semibold text-[48px] md:text-[64px] leading-none"> {/* +leading-none */}
          Design for
        </div>

        {/* Was: <div>…</div> */}
        <span className="inline-flex self-baseline leading-none"> {/* div → span + inline-flex + self-baseline + leading-none */}
          <Wheel
            words={["humans", "clarity", "speed"]}
            intervalMs={4000}                // unchanged
            durationMs={1000}                // unchanged
            easing="cubic-bezier(0.2,0.65,0,1)" // unchanged
            className="font-semibold text-[48px] md:text-[64px] leading-none"
          />
        </span>
      </div>
    </section>
  );
}
