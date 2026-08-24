import Cascade, { Bounce, Fade, Slide, Zoom } from "react-awesome-reveal";

export default function ReactAwesomeReveal() {
  return (
    <>
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <Fade>
          <h1 className="text-5xl font-bold">Hello World</h1>
        </Fade>
      </div>
      <hr />
      <section className="min-h-screen p-10">
        <Fade direction="up">
          <h2 className="text-4xl font-bold">About Me</h2>

          <p className="mt-4 text-gray-500">
            I am a frontend developer specializing in React and TypeScript.
          </p>
        </Fade>
      </section>
      <hr />
      <section className="p-10">
        <Slide direction="left">
          <div className="rounded-xl bg-gray-900 p-8 text-white">React</div>
        </Slide>
      </section>
      <hr />
      <Zoom>
        <div className="rounded-2xl bg-pink-500 p-10 text-white">
          <h2 className="text-3xl font-bold">My Project</h2>
        </div>
      </Zoom>
      <hr />
      <Bounce>
        <button className="rounded-lg bg-white px-6 py-3 text-black">
          View Projects
        </button>
      </Bounce>
      <hr />
      <Cascade cascade damping={0.2}>
        <div className="rounded-xl bg-zinc-900 p-6 text-white">Project 1</div>

        <div className="rounded-xl bg-zinc-900 p-6 text-white">Project 2</div>

        <div className="rounded-xl bg-zinc-900 p-6 text-white">Project 3</div>
      </Cascade>
      <hr />
    </>
  );
}
