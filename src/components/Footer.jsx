function Footer(){
    return(
        <footer className="bg-gray-900 text-gray-400 px-1 md:px-10 py-3 flex justify-center md:justify-end gap-2 md:gap-10 text-[10px] md:text-[12px] lg:text-sm">

            <p>&copy; All rights reserved | userly<span className="text-blue-400">.</span></p>
            <p className="cursor-pointer hover:text-white">Terms</p>
            <p className="cursor-pointer hover:text-white">Privacy</p>
            <p className="cursor-pointer hover:text-white">Security</p>
            <p className="cursor-pointer hover:text-white">Status</p>
            <p className="cursor-pointer hover:text-white">Docs</p>
            <p className="cursor-pointer hover:text-white">Contacts</p>
           
        </footer>
    )
}

export default Footer;