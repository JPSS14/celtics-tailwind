import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaSnapchatGhost } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

export function Header() {
    return (
        <header className="flex justify-between mx-auto p-1.5 border-green-600 border-b-2 items-center">
            <div className="flex w-2/12 sm:w-2/12 md:w-1.5/12 lg:w-1/12 xl:w-1/12 ml-4">
                <img className="w-1/2" src="/celtics-logo.png" alt="Logo Celtics" />
            </div>
            <div className="flex justify-end">
                <FaFacebook className="mx-1.5 text-xl text-green-600 cursor-pointer pointer-events-auto hover:text-green-900" />
                <FaTwitter className="mx-1.5 text-xl text-green-600 cursor-pointer pointer-events-auto hover:text-green-900" />
                <FaInstagram className="mx-1.5 text-xl text-green-600 cursor-pointer pointer-events-auto hover:text-green-900" />
                <FaYoutube className="mx-1.5 text-xl text-green-600 cursor-pointer pointer-events-auto hover:text-green-900" />
                <FaSnapchatGhost className="mx-1.5 text-xl text-green-600 cursor-pointer pointer-events-auto hover:text-green-900" />
                <AiOutlineMail className="mx-1.5 text-xl text-green-600 cursor-pointer pointer-events-auto hover:text-green-900" />
            </div>
        </header>
    )
}