import logo from '../../../public/images/more/logo1.png';
import background from '../../../public/images/more/13.jpg';
import copyBackground from '../../../public/images/more/24.jpg';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
    return (
        <div style={{ backgroundImage: `url(${background})` }} className='bg-no-repeat bg-cover object-contain bg-center'>
            <div className='flex items-center gap-36 max-w-7xl mx-auto pt-28 pb-12'>
                <div className=''>
                    <div>
                        <img className='w-[75px] mb-6' src={logo} alt="" />
                        <h1 className="font-rancho text-[45px] text-[#331A15]">Espresso Emporium</h1>
                        <p className='text-xl text-[#1B1A1A] mt-8 max-w-[660px]'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                    </div>
                    <div className='text-[40px] text-[#331A15] flex gap-5 mt-8'>
                        <span><FaFacebook /></span>
                        <span><FaTwitter /></span>
                        <span><FaInstagram /></span>
                        <span><FaLinkedin /></span>
                    </div>
                    <div className='mt-8'>
                        <h2 className='font-rancho text-[45px] text-[#331A15] mb-8'>Get in Touch</h2>
                        <div className='space-y-4'>
                            <p className='flex gap-6 text-lg text-[#1B1A1A]'><span className='text-2xl text-[#331A15]'><FaPhoneAlt /></span><span>+88 01533 333 333</span></p>
                            <p className='flex gap-6 text-lg text-[#1B1A1A]'><span className='text-2xl text-[#331A15]'><MdEmail /></span><span>info@gmail.com</span></p>
                            <p className='flex gap-6 text-lg text-[#1B1A1A]'><span className='text-2xl text-[#331A15]'><FaLocationDot /></span><span>72, Wall street, King Road, Dhaka</span></p>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <h2 className='font-rancho text-[45px] text-[#331A15] mb-8'>Connect with Us</h2>
                    <form>
                        <input type="text" name="name" id="" className='px-3 py-4 mb-4 w-full outline-none rounded-sm text-[#1B1A1A99]' placeholder='Name' />
                        <br />
                        <input type="email" name="email" id="" className='px-3 py-4 w-full outline-none rounded-sm text-[#1B1A1A99]' placeholder='Email' />
                        <br />
                        <textarea name="message" id="" className='px-3 py-4 mt-4 w-full outline-none rounded-sm text-[#1B1A1A99]' cols="60" rows="4" placeholder='Message'></textarea>
                        <br />
                        <input type="submit" value="Send Message" className='btn w-auto h-auto min-h-max text-2xl font-rancho text-[#331A15] bg-transparent border-2 border-[#331A15] rounded-full py-2 px-5 mt-6' />
                    </form>
                </div>
            </div>
            <div style={{backgroundImage: `url(${copyBackground})`}} className='text-center bg-no-repeat bg-cover bg-center object-contain py-3'>
                <p className='text-xl font-rancho text-white'>Copyright Espresso Emporium ! All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;