import {theme} from '../../styles/theme'
import { quickLinks, cinemas, contacts, socialMedia, contactInfo } from '../../data/footerData'     

function Footer(){
    return (
        <footer style={{backgroundColor: theme.primary}} className='text-white mt-12'>
            <div className='max-w-7xl mx-auto px-4 py-10 grid grid-cols-4 gap-8'>

                {/* Cột 1 - Logo + quickLinks + Tải app */}
                <div className='flex flex-col gap-3'>
                    <img 
                    src="/home/logo.png"
                    alt="Beta cinemas"
                    className='h-16 w-auto mb-2'
                    />
                    {quickLinks.map((link) => (
                        <a key={link} href='#' className='text-sm text-gray-300 hover:text-white transition flex items-center gap-1'>
                            <span className='text-xs'>,</span> {link}
                        </a>
                    ))}
                    <p style={{color: theme.secondary}} className='font-bold mt-4 uppercase tracking-wide'>
                        Tải ứng dụng
                    </p>

                    <a href="#" className='text-sm text-gray-300 hover:text-white transition flex items-center gap-1'>
                        <span className='text-xs'>,</span> Beta Cinemas cho iOS
                    </a>

                    <a href="#" className='text-sm text-gray-300 hover:text-white transition flex items-center gap-1'>
                        <span className='text-xs'>,</span> Beta Cinemas cho Android
                    </a>
                </div>

                {/* Cột 2 = Cụm rạp */}
                <div>
                    <p style={{color: theme.secondary}} className='font-bold uppercase tracking-wide mb-4'>
                        Cụm rạp Beta
                    </p>

                    <div className='flex flex-col gap-2'>
                        {cinemas.map((c) => (
                            <a key={c.name} href="#" className='text-sm text-gray-300 hover:text-white transition flex items-center gap-1'>
                                <span className='text-xs'>,</span> {c.name} - Hotline {c.hotline}
                            </a>
                        ))}
                    </div>
                </div>

                    {/* Cột 3 - Liên hệ */}
                <div className='flex flex-col gap-4'>
                    <p style={{color: theme.secondary}} className='font-bold uppercase tracking-wide'>
                        Liên hệ
                    </p>
                    <p className='font-semibold text-sm'>{contactInfo.company}</p>
                    <p className='text-sm text-gray-300'>{contactInfo.license}</p>
                    <p className='text-sm text-gray-300'>{contactInfo.address}</p>
                    {contacts.map((c) => (
                        <div key={c.label}>
                            <p className='font-semibold' text-sm>{c.label}</p>
                            <p className='text-sm text-gray-300'>Hotline: {c.hotline}</p>
                            <p className='text-sm text-gray-300'>Email: {c.email}</p>
                        </div>
                    ))}

                    {/* Mạgn xã hội */}
                    <div className='flex gap-3'>
                        {socialMedia.map((s) => (
                            <a 
                                key={s.platform} 
                                href={s.href}
                                className='w-9 h-9 rounded-full border-gray-400 flex items-center justify-center hover:border-white transition text-sm'
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div> 
            {/*  */}
        </footer>
    )
}
export default Footer;