import { assets } from "../assets/assets"

const Header = () => {
    return (
        <div className="flex flex-col md:flex-row   rounded-lg px-6 md:px-10 bg-primary">
            <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw]">
                <p className="text-3xl md:text-4xl text-white font-bold leading-tight ">Book Appointment</p>
                <div className="flex flex-col md:flex-row items-center gap-3 text-white font-light text-sm">
                    <img src={assets.group_profiles} alt="" className="w-28" />
                    <p className="hidden md:block">Lorem ipsum dolor sit amet consectetur adipisicing elit. A reiciendis corporis praesentium, earum </p>
                </div>
                <a href="#speciality" className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 ">
                    Book Appointment <img src={assets.arrow_icon} alt="" className="w-3"/>
                </a>
            </div>
            <div className="md:w-1/2 relative">
                <img src={assets.header_img} alt="" className="w-full md:absolute bottom-0 h-auto rounded-lg" />
            </div>
        </div>
    )
}

export default Header
