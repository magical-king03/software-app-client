import React from 'react';
import { useEffect } from 'react';

const Services = () => {
    useEffect(() => {
        document.title = "Services";
    }, []);
    return (
        <div>
            <div className="bg h-[250px] relative">
                <div className="text-center mx-auto p-[10px] z-30 relative">
                    <div className="w-[700px] mx-auto">
                        <p className="text-white md:text-[75px] text-3xl md:w-full w-screen mx-auto font-bold md:leading-none">Services</p>
                        <p className="text-white text-[#ABBBBB] md:w-[75%] text-[15px] mt-[5px] md:text-[20px] w-screen mx-auto">Unlock the potential for business growth and establish a powerful online presence through our website development services.</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="bg-white pb-[32px] mt-[32px] text-black">
                    <header className="text-[50px] text-center font-bold text-black pt-[28px]">Glimpse of Our Services</header>
                    <p className="text-xl text-center">Explore possibilities with Nexus Info’s services—transforming businesses online and providing tailored solutions</p>
                    <div className="md:flex items-center justify-evenly mt-[60px]">
                        <div className="lg:w-[400px] md:w-[200px] w-[300px] h-[450px] overflow-hidden shadow-lg bg-white rounded-lg mx-auto transition duration-500 ease-in-out transform hover:border-b-2 hover:border-blue-500 mb-[20px]">
                            <img src="https://nexusinfo.in/wp-content/uploads/elementor/thumbs/Business-Website-qjr237v715m4x9nvqem0wt7cwgzsfz4mlt0ry4lv2w.png" alt="" className="transition-transform duration-300 ease-in-out transform hover:scale-110 overflow-hidden" />
                            <div className="p-5 ">
                                <p className="text-black font-bold">Business Website</p>
                                <p className="text-black pt-5 pb-3" >Transform your offline business into a thriving online presence, captivating clients by showcasing your business's uniqueness through a dedicated website.</p>
                                <a href="/" className="text-[#37C9A2]">Get the servive</a>
                            </div>
                        </div>
                        <div className="lg:w-[400px] md:w-[200px] w-[300px] h-[450px] overflow-hidden bg-white shadow-lg rounded-lg mx-auto mb-[20px] transition duration-500 ease-in-out transform hover:border-b-2 hover:border-blue-500">
                            <img src=" https://nexusinfo.in/wp-content/uploads/elementor/thumbs/Ecommerce-qjr23rlt0od5p2v7j556v681dkahxmazoipz0xslg8.png" alt="" className="transition-transform duration-300 ease-in-out transform hover:scale-110 overflow-hidden" />
                            <div className="p-5 ">
                                <p className="text-black font-bold">E-Commerce Website</p>
                                <p className="text-black pt-5 pb-3" >Transform your offline business into a thriving online presence, captivating clients by showcasing your business's uniqueness through a dedicated website.</p>
                                <a href="/" className="text-[#37C9A2]">Get the servive</a>
                            </div>
                        </div>
                        <div className="lg:w-[400px] md:w-[200px] w-[300px] h-[450px] overflow-hidden bg-white shadow-lg rounded-lg mx-auto mb-[20px] transition duration-500 ease-in-out transform hover:border-b-2 hover:border-blue-500">
                            <img src="https://nexusinfo.in/wp-content/uploads/elementor/thumbs/Customized-Website-qjr23h9kxhz05da87ioalqtyubpgky5xz3jmqw7xco.png" alt="" className="transition-transform duration-300 ease-in-out transform hover:scale-110 overflow-hidden" />
                            <div className="p-5 ">
                                <p className="text-black font-bold">Custom Website</p>
                                <p className="text-black pt-5 pb-3" >Tailored solutions to meet your unique needs, ensuring your business stands out in the digital landscape. Let us craft a customized strategy to elevate your online presence.</p>
                                <a href="/" className="text-[#37C9A2]">Get the servive</a>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex items-center justify-evenly pt-[60px]">
                        <div className="lg:w-[400px] md:w-[200px] w-[300px] overflow-hidden shadow-lg bg-white rounded-lg mx-auto mb-[20px] transition duration-500 ease-in-out transform hover:border-b-2 hover:border-blue-500">
                            <img src="https://nexusinfo.in/wp-content/uploads/2024/02/Educations-2048x1074.png" alt="" className="transition-transform duration-300 ease-in-out transform hover:scale-110 overflow-hidden" />
                            <div className="p-5 ">
                                <p className="text-black font-bold">Educational Platform</p>
                                <p className="text-black pt-5 pb-3" >Empower learning through a dedicated online platform for educational excellence.</p>
                                <a href="/" className="text-[#37C9A2]">Get the servive</a>
                            </div>
                        </div>
                        <div className="lg:w-[400px] md:w-[200px] w-[300px] overflow-hidden bg-white shadow-lg rounded-lg mx-auto mb-[20px] transition duration-500 ease-in-out transform hover:border-b-2 hover:border-blue-500">
                            <img src="https://nexusinfo.in/wp-content/uploads/2024/02/design-2048x1074.png" alt="" className="transition-transform duration-300 ease-in-out transform hover:scale-110 overflow-hidden" />
                            <div className="p-5 ">
                                <p className="text-black font-bold">Design Service</p>
                                <p className="text-black pt-5 pb-3" >Elevate brand aesthetics with our creative design solutions for a memorable presence.</p>
                                <a href="/" className="text-[#37C9A2]">Get the servive</a>
                            </div>
                        </div>
                        <div className="lg:w-[400px] md:w-[200px] w-[300px] overflow-hidden bg-white shadow-lg rounded-lg mx-auto mb-[20px] transition duration-500 ease-in-out transform hover:border-b-2 hover:border-blue-500">
                            <img src="https://nexusinfo.in/wp-content/uploads/2024/02/business-consulting-2048x1074.png" alt="" className="overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-110" />
                            <div className="p-5">
                                <p className="text-black font-bold">Business Consultant</p>
                                <p className="text-black pt-5 pb-3">Partner with us for strategic guidance, navigating the path to success with expert insights.</p>
                                <a href="/" className="text-[#37C9A2]">Get the service</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className=''>
                <div>
                    <p className='text-black text-[30px] font-bold text-center'>DISCOVER OUR PROJECTS</p>
                    <p className='mx-auto lg:w-[700px] md:w-[550px] text-center '>Take a closer look at our previous projects, showcasing the successful collaborations and impactful solutions we’ve delivered for our valued clients.</p>
                </div>
                <div className='md:flex items-center justify-evenly my-[30px]'>
                    <div className='flex items-center justify-center'>
                        <div className="flip-card w-[300px] h-[450px] mt-[20px] md:mt-0">
                            <div className="flip-card-inner relative w-full h-full">
                                <div className="flip-card-front absolute w-full h-full">
                                    <img
                                        src="https://nexusinfo.in/wp-content/uploads/2024/01/New-Website-Blue-Mockup-Instagram-Laptop-2.png"
                                        alt="Business Consultant"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flip-card-back absolute w-full h-full bg-white flex flex-col justify-center items-center p-5">
                                    <p className="text-black font-bold">Customized Website</p>
                                    <p className="text-black pt-5 pb-3">Tell your audience about "you" whether you are a brand, startup or having blog.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className="flip-card w-[300px] h-[450px] mt-[20px] md:mt-0">
                            <div className="flip-card-inner relative w-full h-full">
                                <div className="flip-card-front absolute w-full h-full">
                                    <img
                                        src="https://nexusinfo.in/wp-content/uploads/2024/01/New-Website-Blue-Mockup-Instagram-Laptop-1.png"
                                        alt="Business Consultant"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flip-card-back absolute w-full h-full bg-white flex flex-col justify-center items-center p-5">
                                    <p className="text-black font-bold">3D Interactive Website</p>
                                    <p className="text-black pt-5 pb-3">A custom built website having 3D interactions to capture the visitor 's attention</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className="flip-card w-[300px] h-[450px] mt-[20px] md:mt-0">
                            <div className="flip-card-inner relative w-full h-full">
                                <div className="flip-card-front absolute w-full h-full">
                                    <img
                                        src="https://nexusinfo.in/wp-content/uploads/2024/01/New-Website-Blue-Mockup-Instagram-Laptop.png"
                                        alt="Business Consultant"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flip-card-back absolute w-full h-full bg-white flex flex-col justify-center items-center p-5">
                                    <p className="text-black font-bold">E-Commerce Website</p>
                                    <p className="text-black pt-5 pb-3">E-Commerce website that will increase your revenue by 10x more</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services;
