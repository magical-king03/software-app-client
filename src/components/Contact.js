import { useState } from "react";

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const feedDetailHandler = async () => {
        try {
            let result = await fetch('http://localhost:8000/feed-save', {
                method: 'post',
                body: JSON.stringify({ name, email, subject, message }),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            alert("Feedback added successfully...Thank you");
            console.log(await result.json());
        }
        catch (e) {
            console.log(e);
        }
    }
    return (
        <div>
            <div className="contact-bg md:h-[650px] h-[450px]">
                <div className=" text-center mx-auto p-[10px] z-30 position-relative">
                    <div className="w-[700px] mx-auto">
                        <p className="text-white md:text-[75px] text-3xl md:w-full w-screen mx-auto font-bold md:leading-none">Reach Us</p>
                        <p className="text-white text-[#ABBBBB] md:w-[75%] w-screen mx-auto">Connect with Nexus Info and Let’s Shape Your Success Together.</p>
                    </div>
                </div>
            </div>
            <div className="md:grid grid-cols-2 mb-[20px]">
                <div className="md:w-[500px] mx-[15px] lg:mx-auto mt-[50px]">
                    <div className="my-[20px]">
                        <div className="flex items-center gap-[12px]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
                            </svg>
                            <p className="font-bold">Phone</p>
                        </div>
                        <p className="font-bold text-gray-500">+91 8778993293</p>
                    </div>
                    <hr className="mdw-[325px] w-[250px] border-5 border" />
                    <div className="my-[20px]">

                        <div className="flex items-center gap-[12px]">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA0UlEQVR4nO3UwWkCQRSH8R96E5ICBLEFIZAalBDwYgu2YAu2kBZyySFVBARbCKsWEMGbsrIwC0vY1cmqwcN+8GDY9/h/zOwwNNwTL1gjvbBWGJUJVlcIT0MlZYK8eSlpVU7e+ES/RnAX7zGCrHaYoR0R3MIU218ZlYJXfIf1Es8nwgf4CrMbTGIEGR3MsccBb3gszJb1H0pyKgU5T1gUbsY4VBK+LcLMuZyTjVY445/If/RnQU4PH6GydRW1BbE0gvpHdPPHbnQlSYLh+Y02/BdHOA2bqc6k+4oAAAAASUVORK5CYII=" alt="icon" />
                            <p className="font-bold">Email</p>
                        </div>
                        <p className="font-bold text-gray-500 ">contact@nexusinfo.in</p>
                    </div>
                    <hr className="md:w-[325px] w-[250px] border-5 border" />

                    <div className="my-[20px]">
                        <div className="flex items-center  gap-[12px]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>

                            <p className="font-bold">Location</p>
                        </div>
                        <p className="font-bold text-gray-500">Coimbatore, Tamil Nadu</p>
                    </div>
                    <hr className="md:w-[325px] w-[250px] border-5 border" />

                    <p className="font-bold text-gray-500 my-[20px] w-[300px]">Experience the benefits of our fully digital operation; we operate without a brick-and-mortar office.</p>
                </div>
                <div>
                    <img src="https://nexusinfo.in/wp-content/uploads/2024/01/office-building-2.jpg" alt="office-building" className="w-[600px] h-full" />
                </div>
            </div>
            <div className="md:w-[500px] w-[300px] mx-auto">
                <div class="border-b border-gray-900/10 mt-[32px] mr-3 pb-12 text-black">
                    <h2 class="text-2xl font-bold text-black-900 mb-[6px]">Drop a message</h2>
                    <div class="grid grid-cols-1 gap-x-6  sm:grid-cols-6">
                        <div class="sm:col-span-4">
                            <label for="first-name" class="block text-sm font-medium leading-6 text-black-900">Your name(required)</label>
                            <div class="mt-2">
                                <input type="text" name="first-name" value={name} onChange={(e) => setName(e.target.value)} class="block w-full rounded-md border-1 border border-black py-1.5 px-2 text-black placeholder:text-black-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                            </div>
                        </div>


                        <div class="sm:col-span-4">
                            <label for="email" class="block text-sm font-medium leading-6 text-black-900">Your Email(required)</label>
                            <div class="mt-2">
                                <input name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} class="block w-full rounded-md border-1 border border-black py-1.5 px-2 text-black placeholder:text-black-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                            </div>
                        </div>
                        <div class="sm:col-span-4">
                            <label for="email" class="block text-sm font-medium leading-6 text-black-900">Subject</label>
                            <div class="mt-2">
                                <input name="subject" type="email" value={subject} onChange={(e) => setSubject(e.target.value)} class="block w-full rounded-md border-1 border border-black py-1.5 px-2 text-black placeholder:text-black-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required />
                            </div>
                        </div>
                        <div class="sm:col-span-4">
                            <label for="email" class="block text-sm font-medium leading-6 text-black-900">Message</label>
                            <div class="mt-2">
                                <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={5} className="block w-full rounded-md border-1 border border-black py-1.5 px-2 text-black placeholder:text-black-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                            </div>
                        </div>
                    </div>
                    <button onClick={feedDetailHandler} className='border-1 border-white bg-black text-white rounded-lg px-6 py-2 mt-5 mx-auto border'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Contact