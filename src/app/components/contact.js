import Link from "next/link";
import { ImLocation2 } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";
import { MdCall } from "react-icons/md";


// pages/contact.js
export default function Contact() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#242426] py-20 !pt-0">
            <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-2xl overflow-hidden max-w-7xl w-full !mx-6 ">
                {/* Left Panel */}
                <div className="bg-gradient-to-r from-[#F8EDAD] to-[#CEAB45] text-white p-10 md:w-1/2 flex flex-col justify-between">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-black">
                            Contact Information
                        </h2>

                        <a
                            href="https://maps.google.com/?q=30.869854,75.991028"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start mb-6 space-x-4 cursor-pointer"
                        >
                            <div className="bg-black text-blue-600 p-2 rounded-full">
                            <ImLocation2 className="text-white"/>
                            </div>
                            <div>
                                <h4 className="font-bold text-black">OUR OFFICE</h4>
                                <p className="text-black">Ludhiana, Punjab, India</p>
                            </div>
                        </a>


                        <a
                            href="mailto:glowziaindia@gmail.com"
                            className="flex items-start mb-6 space-x-4 cursor-pointer"
                        >
                            <div className="bg-black text-blue-600 p-2 rounded-full">
                            <HiOutlineMail className="text-white"/>
                            </div>
                            <div>
                                <h4 className="font-bold text-black">EMAIL US</h4>
                                <p className="text-black">glowziaindia@gmail.com</p>
                            </div>
                        </a>


                        <a
                            href="tel:+919915120010"
                            className="flex items-start mb-6 space-x-4 cursor-pointer"
                        >
                            <div className="bg-black text-blue-600 p-2 rounded-full">
                            <MdCall className="text-white"/>
                            </div>
                            <div>
                                <h4 className="font-bold text-black">CALL US</h4>
                                <p className="text-black">+91 99151-20010</p>
                            </div>
                        </a>


                    </div>

                    <Link href="tel:+919915120010">
                        <button className="bg-black text-white font-semibold px-6 py-3 mt-6 rounded-full w-fit">
                            Book Your Spot Now
                        </button>
                    </Link>
                </div>

                {/* Right Panel - Map */}
                <div className="w-full md:w-1/2">
                    {/* <iframe
                        src="https://www.google.com/maps?q=Chandigarh&output=embed"
                        width="100%"
                        height="100%"
                        style={{ minHeight: "400px" }}
                        allowFullScreen=""
                        loading="lazy"
                        className="w-full h-full"
                    ></iframe> */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3424.6006494880726!2d75.98845307558578!3d30.869853974518353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDUyJzExLjUiTiA3NcKwNTknMjcuNyJF!5e0!3m2!1sen!2sin!4v1751479761062!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ minHeight: "400px" }}
                        allowFullScreen=""
                        loading="lazy"
                        className="w-full h-full"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
