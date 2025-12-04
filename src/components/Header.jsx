import { Link } from 'react-router-dom';

function Header(){
    return(
        <header className="bg-blue-900 text-white px-8 py-3">
            <nav className="flex justify-between">
            <h1 className="text-2xl font-bold">Userly<span className="text-blue-400">.</span></h1>
            
                <ul className="flex gap-10 items-center text-[12px] md:text-sm lg:text-base">
                    <li><Link className="cursor-pointer border-b border-b-transparent focus:border-b-white" to='/'>Home</Link></li>
                    <li><Link className="cursor-pointer border-b border-b-transparent focus:border-b-white" to="/about/">About</Link></li>
                    <li><Link className="cursor-pointer border-b border-b-transparent focus:border-b-white" to="/users/">Users</Link></li>
                </ul>

            </nav>
        </header>
    )
}

export default Header;