import Navigation from "@/components/navigation";
import Link from "next/link";

export default function Home() {
  
  return (
    <div>
      <hr className="mt-20 border-t border-black"/>

      {/* Hero */}
      <div className="flex lg:flex-row flex-col mt-5 gap-10 w-full">
        <h6 className="flex">
          Vortechs is your go-to web development studio, specializing in affordable and stunningly fast web applications. We pride ourselves on creating fresh, dynamic experiences that captivate and engage users. At Vortechs, w&apos;re always exploring new technologies to ensure our solutions are both cutting-edge and effective.
        </h6>
        <h6 className="flex">
          Our guiding principle is simple: to deliver work that fills both us and our clients with immense pride. We achieve this by blending artistry with performance, dedicating meticulous attention to each project, and carefully choosing the clients we collaborate with.
        </h6>
        <h6 className="flex">
          Partnering with Vortechs is like having a dedicated designer and developer by your side, ready to support you on your digital journey. We are approachable and friendly, yet highly organized and proactive – the kind of partner you would love to tell your friends about.
        </h6>
      </div>
      <div className="mt-20">
        <Link href={""} className="btn-link">
          (vortechs values)
        </Link>
        <h1 className="lg:text-7xl md:text-4xl text-4xl uppercase satoshi-regular">
          We bring stunning online experiences at an <i>affordable price</i>.
        </h1>
      </div>

      {/* WE BUILD STUNNING ONLINE EXPERIENCES */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        <div className="relative bg-[url('/images/McGregorCoxall.jpg')] bg-cover rounded-lg h-64 flex flex-col justify-end transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_blue] active:translate-x-[0px] active:translate-y-[0px] active:rounded-lg active:shadow-none">
          <div className="p-4">
            <h5 className="text-white font-semibold">
              McGregor Coxall
            </h5>
            <Link href={""} className="btn btn-secondary mt-2 inline-block">
              View Project
            </Link>
          </div>
        </div>
        <div className="relative bg-[url('/images/PeachesPilates.jpg')] bg-cover bg-center rounded-lg h-64 flex flex-col justify-end transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_blue] active:translate-x-[0px] active:translate-y-[0px] active:rounded-lg active:shadow-none">
          <div className="p-4">
            <h5 className="text-white font-semibold">
              Peaches Pilates
            </h5>
            <Link href={""} className="btn btn-secondary mt-2 inline-block">
              View Project
            </Link>
          </div>
        </div>
        <div className="relative bg-[url('/images/SBLSolutions.webp')] bg-cover bg-bottom rounded-lg h-64 flex flex-col justify-end transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_blue] active:translate-x-[0px] active:translate-y-[0px] active:rounded-lg active:shadow-none">
          <div className="p-4">
            <h5 className="text-white font-semibold">
              SBL Solutions
            </h5>
            <Link href={""} className="btn btn-secondary mt-2 inline-block">
              View Project
            </Link>
          </div>
        </div>
        <div className="relative bg-[url('/images/OceanAndEarth.webp')] bg-cover rounded-lg h-64 flex flex-col justify-end transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_blue] active:translate-x-[0px] active:translate-y-[0px] active:rounded-lg active:shadow-none">
          <div className="p-4">
            <h5 className="text-white font-semibold">
              Ocean And Earth
            </h5>
            <Link href={""} className="btn btn-secondary mt-2 inline-block">
              View Project
            </Link>
          </div>
        </div>
        <div className="relative bg-[url('/images/DeusExMachina.webp')] bg-cover rounded-lg h-64 flex flex-col justify-end transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_blue] active:translate-x-[0px] active:translate-y-[0px] active:rounded-lg active:shadow-none">
          <div className="p-4">
            <h5 className="text-white font-semibold">
              Deus Ex Machina
            </h5>
            <Link href={""} className="btn btn-secondary mt-2 inline-block">
              View Project
            </Link>
          </div>
        </div>
        <div className="relative bg-[url('/images/Carve.webp')] bg-cover bg-center rounded-lg h-64 flex flex-col justify-end transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_blue] active:translate-x-[0px] active:translate-y-[0px] active:rounded-lg active:shadow-none">
          <div className="p-4">
            <h5 className="text-white font-semibold">
              Carve
            </h5>
            <Link href={""} className="btn btn-secondary mt-2 inline-block">
              View Project
            </Link>
          </div>
        </div>
        <div className="relative bg-[url('/images/Stokke.webp')] bg-cover bg-top rounded-lg h-64 flex flex-col justify-end transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_blue] active:translate-x-[0px] active:translate-y-[0px] active:rounded-lg active:shadow-none">
          <div className="p-4">
            <h5 className="text-white font-semibold">
              Stokke
            </h5>
            <Link href={""} className="btn btn-secondary mt-2 inline-block">
              View Project
            </Link>
          </div>
        </div>
        <div className="relative bg-[url('/images/BWWater.jpg')] bg-cover rounded-lg h-64 flex flex-col justify-end transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_blue] active:translate-x-[0px] active:translate-y-[0px] active:rounded-lg active:shadow-none">
          <div className="p-4">
            <h5 className="text-white font-semibold">
              BW Water
            </h5>
            <Link href={""} className="btn btn-secondary mt-2 inline-block">
              View Project
            </Link>
          </div>
        </div>
      </div>
      <p className="text-gray-400 mt-2">
        *These are some of the projects our teammembers have worked on in the past.
      </p>
      


      {/* What We Do */}
      <div className="bg-[#0049FF] rounded-md p-5 mt-20">
      <div className="flex flex-col items-center">
        <p className="inline-block text-white px-2 py-1 rounded-full uppercase text-black border border-white tracking-wider text-xs">
          In a Nutshell
        </p>  
        <h1 className="satoshi-black text-white">What We Do</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-3">
        <div className="p-4 rounded-md bg-white">
            <h5 className="font-semibold">
              design
            </h5>
            <p>
              visual identity<br></br>
              brand guidelines<br></br>
              information architecture<br></br>
              user experience<br></br>
              web/mobile apps
            </p>
        </div>
        <div className="p-4 rounded-md bg-white">
            <h5 className="font-semibold">
              development
            </h5>
            <p>
              custom landing pages<br></br>
              CMS integrations<br></br>
              analytics<br></br>
              A/B testing<br></br>
              web development
            </p>
        </div>
      </div>
      </div>
      

      {/* Apply for a Slot */}
      <h1 className="text-7xl uppercase satoshi-regular mt-20">
        APPLY FOR A SLOT TO BECOME ONE OF FIVE NEW CLIENTS WE SELECT EVERY YEAR
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mt-4 mb-20">
        <div className="relative p-4 rounded-md border-2 border-gray-400 bg-white lg:h-96 md:h-72 sm:h-64 h-64 cursor-not-allowed">
          <h5 className="font-medium uppercase text-3xl text-gray-400">
            slot<br></br>one
          </h5>
          <Link href="https://cal.com/vortechs/30min" className="absolute bottom-4 left-4 btn btn-disabled">
              booked
          </Link>
        </div>
        <div className="relative p-4 rounded-md border-2 border-gray-400 bg-[#0049FF] lg:h-96 md:h-72 sm:h-64 h-64 transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
          <h5 className="font-medium uppercase text-3xl text-white">
            slot<br></br>two
          </h5>
          <Link href={"https://cal.com/vortechs/30min"} className="absolute bottom-4 left-4 btn btn-apply hover:bg-black">
            🔥available
          </Link>
        </div>
        <div className="relative p-4 rounded-md border-2 border-gray-400 bg-[#0049FF] lg:h-96 md:h-72 sm:h-64 h-64 transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
          <h5 className="font-medium uppercase text-3xl text-white">
            slot<br></br>three
          </h5>
          <Link href={"https://cal.com/vortechs/30min"} className="absolute bottom-4 left-4 btn btn-apply hover:bg-black">
            🔥available
          </Link>
        </div>
        <div className="relative p-4 rounded-md border-2 border-gray-400 bg-[#0049FF] lg:h-96 md:h-72 sm:h-64 h-64 transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
          <h5 className="font-medium uppercase text-3xl text-white">
            slot<br></br>four
          </h5>
          <Link href={"https://cal.com/vortechs/30min"} className="absolute bottom-4 left-4 btn btn-apply hover:bg-black">
            🔥available
          </Link>
        </div>
        <div className="relative p-4 rounded-md border-2 border-gray-400 bg-[#0049FF] lg:h-96 md:h-72 sm:h-64 h-64 transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
          <h5 className="font-medium uppercase text-3xl text-white">
            slot<br></br>five
          </h5>
          <Link href={"https://cal.com/vortechs/30min"} className="absolute bottom-4 left-4 btn btn-apply hover:bg-black">
            🔥available
          </Link>
        </div>
      </div>

            
    </div>
  );
}