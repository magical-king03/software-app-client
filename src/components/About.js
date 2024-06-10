const About = () => {
    return (
        <div>
            <div className="about-bg md:h-[350px] h-[250px]">
                <div className=" text-center mx-auto p-[10px] z-30 position-relative">
                    <div className="w-[700px] mx-auto">
                        <p className="text-white md:text-[75px] text-3xl md:w-full w-screen mx-auto font-bold md:leading-none">About Us</p>
                        <p className="text-white text-[#ABBBBB] md:w-[75%] w-screen mx-auto ">Embark on a journey with Nexus Info, where innovation meets expertise, and discover how we transform ideas into impactful digital solutions for your business.</p>
                    </div>
                </div>
            </div>
            <div className="md:grid grid-cols-2">
                <div>
                    <div className="lg:pl-[120px] lg:py-[70px] pt-[75px] md:pl-[40px] pl-[15px]">
                        <p className="text-[#37C9A2] font-bold">Journey of Nexus Info</p>
                        <p className="lg:text-[50px] text-[30px] font-bold leading-tight">We operate digitally, foregoing offline offices and unnecessary expenses</p>
                        <p className="block md:hidden lg:block pt-3">Nexus Info, founded by a young entrepreneur, boasts a dynamic team of enthusiastic individuals, adept at navigating the currents of the latest trends. With a commitment to excellence, we employ optimized techniques to enhance your business through flawlessly crafted websites and innovative ideations. Our mission is to deliver customized websites tailored to your business needs, ensuring a strong online presence within your industry</p>
                    </div>
                </div>
                <div className="flex items-center justify-center m-3">
                    <img src="https://nexusinfo.in/wp-content/uploads/2024/02/IMG_7265-1024x798.jpg" alt="journey" width={500} height={500} />
                </div>
            </div>
            <div>
                <div className="about-bg1">
                    <div className=" text-center mx-auto p-[10px] z-10 position-relative">
                        <div className="w-[700px] mx-auto">
                            <p className="text-[#2E9633] md:text-lg text-sm font-bold">OUR CULTURE</p>
                            <p className="text-white md:text-[75px] text-3xl md:w-full w-screen mx-auto font-bold md:leading-none">Our Fundamental Business</p>
                        </div>
                        <div className="hidden md:block">
                            <div className="md:grid grid-cols-3 my-[30px] md:gap-[51px]">
                                <div className="lg:w-[300px] w-[200px] bg-white text-black border border-2 border-[#2E9633] p-5 rounded-lg">
                                    <p className="text-start font-bold text-3xl mb-3">Vision</p>
                                    <p className="text-start">Our vision is to empower businesses to flourish in the digital realm by providing them with uniquely tailored websites</p>
                                </div>
                                <div className="lg:w-[300px] w-[200px] bg-white text-black border border-2 border-[#2E9633] p-5 rounded-lg">
                                    <p className="text-start font-bold text-3xl mb-3">Mission</p>
                                    <p className="text-start">To ensure that every business can establish a strong online presence by offering them personalized website</p>
                                </div>
                                <div className="lg:w-[300px] w-[200px] bg-white text-black border border-2 border-[#2E9633] p-5 rounded-lg">
                                    <p className="text-start font-bold text-3xl mb-3">Motto</p>
                                    <p className="text-start">Our motto is to expand our services with an affordable budget, ensuring accessibility to our high-quality web development</p>
                                </div>
                            </div>
                        </div>

                        <div className="md:hidden block">
                                <div className="w-screen mx-auto">
                                    <div className="w-[300px] mx-auto my-3 bg-white text-black border border-2 border-[#2E9633] p-5 rounded-lg">
                                        <p className="text-start font-bold text-3xl mb-3">Vision</p>
                                        <p className="text-start">Our vision is to empower businesses to flourish in the digital realm by providing them with uniquely tailored websites</p>
                                    </div>
                                    <div className="w-[300px] mx-auto my-3 bg-white text-black border border-2 border-[#2E9633] p-5 rounded-lg">
                                        <p className="text-start font-bold text-3xl mb-3">Mission</p>
                                        <p className="text-start">To ensure that every business can establish a strong online presence by offering them personalized website</p>
                                    </div>
                                    <div className="w-[300px] mx-auto my-3 bg-white text-black border border-2 border-[#2E9633] p-5 rounded-lg">
                                        <p className="text-start font-bold text-3xl mb-3">Motto</p>
                                        <p className="text-start">Our motto is to expand our services with an affordable budget, ensuring accessibility to our high-quality web development</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About