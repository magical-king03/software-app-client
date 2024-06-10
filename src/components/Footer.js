import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Footer = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const userDetailHandler = async () => {
        try {
            let result = await fetch('https://software-app-client-ltr4.vercel.app/user-save', {
                method: 'post',
                body: JSON.stringify({ first_name: firstName, last_name: lastName, email, city, state, zipCode }),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            alert("Details added successfully");
            console.log(await result.json());
        }
        catch (e) {
            console.log(e);
        }
    }
    return (
        <div className="md:grid grid-cols-3 bg-black text-white gap-[32px] pt-[48px] md:pt-0">
            <div className='md:ml-[60px]'>
                <img src='https://nexusinfo.in/wp-content/uploads/elementor/thumbs/Nexus_Info_Logo_Whitepng-qiywmlehljseqle7rbx01opy00yin8zu0ttex4ikg0.png' alt="logo" className='md:mt-[48px] mx-auto' />
                <p className='mt-[48px] text-center'>We develop websites for your business, bringing your vision to life and propelling your business into the digital realm.</p>

                <div className='flex items-ceneter justify-center'>
                    <div className="flex space-x-6 mt-[48px]">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-700">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-700">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-700">
                            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-700">
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                    </div>
                </div>
            </div>
            <div className='flex justify-center md:mt-[48px]'>
                <div className='mt-[32px] md:mt-0'>
                    <p className='font-bold text-2xl'>Quick links</p>
                    <div className='mt-[32px] text-xl ml-[12px]'>
                        <Link to='/' className='hover:underline'>Home</Link><br />
                        <Link to='/about' className='hover:underline'>About</Link><br />
                        <Link to='/services' className='hover:underline'>Services</Link><br />
                        <Link to='/contact' className='hover:underline'>Contact</Link><br />
                    </div>
                </div>
            </div>
            <div class="border-b border-gray-900/10 mt-[32px] mr-3 pb-12 text-white m-3">
                <h2 class="text-2xl font-bold text-white-900 mb-[6px]">Personal Information</h2>
                <div class="grid grid-cols-1 gap-x-6  sm:grid-cols-6">
                    <div class="sm:col-span-3">
                        <label for="first-name" class="block text-sm font-medium leading-6 text-wihte-900">First name</label>
                        <div class="mt-2">
                            <input type="text" name="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} class="block w-full rounded-md border-0 py-1.5 px-2 text-black placeholder:text-black-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label for="last-name" class="block text-sm font-medium leading-6 text-white-900">Last name</label>
                        <div class="mt-2">
                            <input type="text" name="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} class="block w-full rounded-md border-0 py-1.5 px-2 text-black placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div class="sm:col-span-4">
                        <label for="email" class="block text-sm font-medium leading-6 text-white-900">Email address</label>
                        <div class="mt-2">
                            <input name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} class="block w-full rounded-md border-0 py-1.5 px-2 text-black placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div class="sm:col-span-2 sm:col-start-1">
                        <label for="city" class="block text-sm font-medium leading-6 text-white-900">City</label>
                        <div class="mt-2">
                            <input type="text" name="city" value={city} onChange={(e) => setCity(e.target.value)} class="block w-full rounded-md border-0 py-1.5 px-2 text-black placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div class="sm:col-span-2">
                        <label for="region" class="block text-sm font-medium leading-6 text-white-900">State</label>
                        <div class="mt-2">
                            <input type="text" name="region" value={state} onChange={(e) => setState(e.target.value)} class="block w-full rounded-md border-0 py-1.5 px-2 text-black placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div class="sm:col-span-2">
                        <label for="postal-code" class="block text-sm font-medium leading-6 text-white-900">ZIP code</label>
                        <div class="mt-2">
                            <input type="text" name="postal-code" value={zipCode} onChange={(e) => setZipCode(e.target.value)} class="block w-full rounded-md border-0 py-1.5 px-2 text-black placeholder:text-white-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                </div>
                <button onClick={userDetailHandler} className='border-1 border-white bg-black text-white rounded-lg px-6 py-2 mt-5 mx-auto hover:bg-white hover:text-black border'>Submit</button>
            </div>
        </div>
    )
}

export default Footer