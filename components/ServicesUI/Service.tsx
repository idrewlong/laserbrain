export default function Service() {
  return (
    <div className="text-white min-h-screen service_bg">
      {/* Service #1 */}
      <div className="overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4 flex flex-col justify-center items-center">
              <div className="lg:max-w-lg">
                <h2 className="text-lg md:text-3xl font-semibold leading-8 tracking-tight uppercase">
                  Production
                </h2>
                <p className="mt-2 text-3xl font-light tracking-tight sm:text-2xl uppercase">
                  Laserbrain VFX is your ideal collaborator in transforming your
                  cinematic vision into reality, providing extensive support
                  throughout every stage of production.
                </p>
              </div>
            </div>
            <div>
              <video
                className="rounded-2xl shadow p-1 mt-8"
                id="3f08879e-dae1-d7ea-3f08-f5571503a140-video1"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/video/director.mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
      {/* Service #2 */}
      <div className="overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:max-w-none lg:grid-cols-2">
            <video
              className="rounded-2xl shadow p-1 mt-8 lg:order-first order-last"
              id="3f08879e-dae1-d7ea-3f08-f5571503a140-video2"
              autoPlay
              loop
              muted
              playsInline
              data-wf-ignore="true"
              data-object-fit="cover"
            >
              <source src="/video/vfx.mp4" data-wf-ignore="true" />
            </video>
            <div className="lg:pr-8 lg:pt-4 flex flex-col justify-center items-center">
              <div className="lg:max-w-lg">
                <h2 className="text-lg md:text-3xl font-semibold leading-8 tracking-tight uppercase">
                  EDIT/ VFX
                </h2>
                <p className="mt-2 text-3xl font-light tracking-tight sm:text-2xl uppercase">
                  Specializing in creating high-quality visual effects and
                  smooth edits to elevate content. Using advanced tools to add
                  visual interest and narrative depth, making each project
                  unique and engaging for the audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service #3 */}
      <div className="overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4 flex flex-col justify-center items-center">
              <div className="lg:max-w-lg">
                <h2 className="text-lg md:text-3xl font-semibold leading-8 tracking-tight uppercase">
                  Beauty
                </h2>
                <p className="mt-2 text-3xl font-light tracking-tight sm:text-2xl uppercase">
                  RETOUCHING SERVICES AIM TO ENHANCE THE NATURAL APPEAL OF
                  VISUALS. FOCUSING ON IMPROVING LIGHTING, SKIN TEXTURE, AND
                  COLOR TO MAKE EVERY SHOT LOOK ITS BEST, ENSURING EVERY PROJECT
                  SHINES.
                </p>
              </div>
            </div>
            <div>
              <video
                className="rounded-2xl shadow p-1 mt-8"
                id="3f08879e-dae1-d7ea-3f08-f5571503a140-video3"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/video/beauty.mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
      {/* Service #4 */}
      <div className="overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:max-w-none lg:grid-cols-2">
            <video
              className="rounded-2xl shadow p-1 mt-8 lg:order-first order-last"
              id="3f08879e-dae1-d7ea-3f08-f5571503a140-video4"
              autoPlay
              loop
              muted
              playsInline
              data-wf-ignore="true"
              data-object-fit="cover"
            >
              <source src="/video/cleanup.mp4" data-wf-ignore="true" />
            </video>
            <div className="lg:pr-8 lg:pt-4 flex flex-col justify-center items-center">
              <div className="lg:max-w-lg">
                <h2 className="text-lg md:text-3xl font-semibold leading-8 tracking-tight uppercase">
                  Cleanup
                </h2>
                <p className="mt-2 text-3xl font-light tracking-tight sm:text-2xl uppercase">
                  FOCUS ON REFINING YOUR FOOTAGE, REMOVING DISTRACTIONS, AND
                  ENHANCING QUALITY. PAYING CLOSE ATTENTION TO DETAILS, ENSURING
                  THE FINAL OUTPUT IS POLISHED AND PROFESSIONAL.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
