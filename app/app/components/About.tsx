export default function About() {
  return (
    <div className="text-center lg:w-[50%] m-auto py-5 px-10 leading-loose">

        <h2 className="text-2xl leading-loose pb-4">
            About Me
        </h2>
        <div className="flex flex-col justify-center items-center gap-8">
          <p>Hi! I&apos;m a software engineer and computer science student at the University of Colorado Boulder. I&apos;m intrigued by the multifaceted nature of cybersecurity, and am eagerly and actively pursuing a further understanding. I enjoy getting my hands dirty: digging into low-level code, learning how to break it, and then fix it. In the process I&apos;ve gained a deep understanding of the underpinnings of modern-day technologies.</p>
          <p>Through my coursework and employment, I have developed an appreciation and understanding for the important role both software and hardware play in modern day technology. From writing Linux kernel modules in C, to full-stack web-development, Microsoft Active Directory management, and even jointly bringing a team to semi-finals in a national cyber-policy competition; I posses a diverse and rigorous skillset.</p>
          {/* <p>Currently, I am delving deep into the world of Go, focusing on leveraging its power to build robust, scalable web applications. My goal is to master Go&apos;s unique capabilities in web development to enhance user experiences and optimize backend performance.</p> */}
        </div>
    </div>
  )
}
