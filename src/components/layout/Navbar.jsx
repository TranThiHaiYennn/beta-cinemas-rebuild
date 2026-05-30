const navLinks = [
    'Lịch chiếu theo rạp',
    'Phim',
    'Giá vé',
    'Tin mới và ưu đãi',
    'Nhượng quyền',
    'Thành viên',
]
function Navbar(){
    return(
        <nav className="bg-white shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 flex items-center gap-6 h-16">

                {/* Logo */}
                <div className="shrink-0">
                    <img 
                        src="/home/logo.png"
                        alt="Beta Cinemas"
                        className="h-12 w-auto"
                    />
                </div>

                {/* Dropdown chọn rạp */}
                <select className="border border-gray-300 rounded-full px-4 py-1.5 text-sm text-gray-700 outline-none cursor-pointer">
                    <option>Beta Quang Trung</option>
                    <option>Beta Mỹ Đình</option>
                    <option>Beta Thủ Đức</option>
                </select>

                {/* Nav Link */}
                <div className="flex items-center gap-5 ml-2">
                    {navLinks.map((link) => (
                        <a 
                            key={link}
                            href="#"
                            className="text-sm font-semibold text-gray-700 hover:text-[#1a2b5e] transition whitespace-nowrap"
                        >
                            {link}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    )
}
export default Navbar;