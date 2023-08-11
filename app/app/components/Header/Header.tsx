import Link from "next/link"

export default function Header() {
  return (
    <div className="w-screen h-24 flex gap-40 justify-center items-center">
        <h1>
            <Link href="/">Nicholas Hellmers</Link>
        </h1>
        <ul className="flex gap-10">
            <li>
                <Link href="/projects">Projects</Link>
            </li>
            <li>
                <Link href="/blog">Blog</Link>
            </li>
            <li>
                <a href="https://github.com/ParaguayanViking" target="_blank">GitHub</a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/nicholas-hellmers/" target="_blank">LinkedIn</a>
            </li>
        </ul>
    </div>
  )
}
