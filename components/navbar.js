import Image from 'next/image'
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="flex items-center justify-between">
                <div>
                    <Image src="next.svg" alt="Logo" width={50} height={50}/>
                </div>

                <div className="flex items-center space-x-4">

                    <Link href="/login">Login</Link>
                </div>
            </div>
        </nav>
    )
}