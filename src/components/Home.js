import { Link } from "react-router-dom"
const Home = () => {
    return (
        <div>
            <div className="bg md:h-[650px] h-[450px]">
                <div className=" text-center mx-auto p-[10px] z-30 position-relative">
                    <div className="w-[700px] mx-auto">
                        <p className="text-[#2E9633] md:text-lg text-sm font-bold">IT Solutions and Website Development</p>
                        <p className="text-white md:text-[75px] text-3xl md:w-full w-screen mx-auto font-bold md:leading-none">Grow your Business with Nexus Info</p>
                        <p className="text-white text-[#ABBBBB] md:w-[75%] w-screen mx-auto">Get free ideas for your business growth and learn why a website is important for your business</p>
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-2 lg:gap-[70px] gap-5">
                <div className="lg:pl-[120px] lg:pt-[100px] pt-[75px] md:pl-[40px] pl-[15px]">
                    <p className="text-[#37C9A2] font-bold">ABOUT US</p>
                    <p className="lg:text-[50px] text-[30px] font-bold leading-tight">We specialize in creating websites that fit your budget perfectly.</p>
                    <p className="pt-3">At Nexus Info, we offer tailored website solutions designed for your business. Coupled with business growth ideas and strategies, our goal is to foster the expansion of your business. We believe in making every business thrive in both digital and offline realms. “Join the future trend of business with the help of Nexus Info, and let’s grow together.</p>
                    <Link to='/services'><button className="bg-[#36C978] px-7 py-3 my-4 text-white rounded-lg hover:bg-[grey] duration-500 hover:text-black">Services</button></Link>
                </div>
                <div className="p-2">
                    <img src="https://nexusinfo.in/wp-content/uploads/2024/01/innovative-business-technology-768x512.jpg" alt="about-us" className="w-[600px] h-[500px] mt-[40px] rounded-xl" />
                </div>
            </div>
            <div className="bg1 pb-[32px] text-white">
                <header className="text-[50px] text-center font-bold text-white mt-[28px]">Glimpse of Our Services</header>
                <p className="text-xl text-center">Explore possibilities with Nexus Info’s services—transforming businesses online and providing tailored solutions</p>
                <div className="md:flex items-center justify-evenly pt-[60px]">
                    <div className="lg:w-[400px] md:w-[200px] w-[300px] h-[450px] overflow-hidden bg-white rounded-lg mx-auto mb-[20px]"> 
                        <img src="https://nexusinfo.in/wp-content/uploads/elementor/thumbs/Business-Website-qjr237v715m4x9nvqem0wt7cwgzsfz4mlt0ry4lv2w.png" alt="" className="transition-transform duration-300 ease-in-out transform hover:scale-110 overflow-hidden"/>
                        <div className="p-5 ">
                            <p className="text-black font-bold">Business Website</p>
                            <p className="text-black pt-5 pb-3" >Transform your offline business into a thriving online presence, captivating clients by showcasing your business's uniqueness through a dedicated website.</p>
                            <a href="/" className="text-[#37C9A2]">Get the service</a>
                        </div>
                    </div>
                    <div className="lg:w-[400px] md:w-[200px] w-[300px] overflow-hidden bg-white rounded-lg mx-auto mb-[20px]"> 
                        <img src=" https://nexusinfo.in/wp-content/uploads/elementor/thumbs/Ecommerce-qjr23rlt0od5p2v7j556v681dkahxmazoipz0xslg8.png" alt="" className="transition-transform duration-300 ease-in-out transform hover:scale-110 overflow-hidden"/>
                        <div className="p-5 ">
                            <p className="text-black font-bold">E-Commerce Website</p>
                            <p className="text-black pt-5 pb-3" >Transform your offline business into a thriving online presence, captivating clients by showcasing your business's uniqueness through a dedicated website.</p>
                            <a href="/" className="text-[#37C9A2]">Get the service</a>
                        </div>
                    </div>
                    <div className="lg:w-[400px] md:w-[200px] w-[300px] overflow-hidden bg-white rounded-lg mx-auto mb-[20px]"> 
                        <img src="https://nexusinfo.in/wp-content/uploads/elementor/thumbs/Customized-Website-qjr23h9kxhz05da87ioalqtyubpgky5xz3jmqw7xco.png" alt="" className="transition-transform duration-300 ease-in-out transform hover:scale-110 overflow-hidden"/>
                        <div className="p-5 ">
                            <p className="text-black font-bold">Custom Website</p>
                            <p className="text-black pt-5 pb-3" >Tailored solutions to meet your unique needs, ensuring your business stands out in the digital landscape. Let us craft a customized strategy to elevate your online presence.</p>
                            <a href="/" className="text-[#37C9A2]">Get the service</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home