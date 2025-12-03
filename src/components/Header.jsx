function Header(){
    return(
        <header className="bg-blue-900 text-white px-8 py-3">
            <nav className="flex justify-between">
            <h1 className="text-2xl font-bold">Userly<span className="text-blue-400">.</span></h1>
            
                <ul className="flex gap-10 items-center">
                    <li><a className="cursor-pointer border-b border-b-transparent focus:border-b-white" href="#">Home</a></li>
                    <li><a className="cursor-pointer border-b border-b-transparent focus:border-b-white" href="#">About</a></li>
                    <li><a className="cursor-pointer border-b border-b-transparent focus:border-b-white" href="#">Users</a></li>
                </ul>

            </nav>
        </header>
    )
}

export default Header;