import {theme} from '../../styles/theme'
function TopBar(){
    return (
        <div style={{backgroundColor: 'theme.primary'}}>
            <div className="max-w-7xl mx-auto px-4 flex justify-end items-center gap-4">
                <button className="hover:text-gray-300 transition">Đăng nhập</button>
                <span className="text-gray-400">|</span>
                <button className="hover:text-gray-300 transition">Đăng ký</button>
                <span>🇬🇧</span>
            </div>
        </div>
    )
} 
export default TopBar;