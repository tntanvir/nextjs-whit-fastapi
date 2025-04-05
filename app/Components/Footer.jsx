import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-16 gap-x-12">
                    <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                        <Image
                            className="w-auto h-9"
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
                            alt="Logo"
                            width={120}
                            height={40}
                        />
                        <p className="text-base leading-relaxed text-gray-600 mt-7">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit.
                        </p>

                        <ul className="flex items-center space-x-3 mt-9">
                            {[
                                { href: "#", icon: "M19.633 7.997c..." }, // Twitter
                                { href: "#", icon: "M13.397 20.997v..." }, // Facebook
                                { href: "#", icon: "M11.999 7.377a..." }, // Instagram
                                { href: "#", icon: "M12.026 2c-5.50..." }, // GitHub
                            ].map((social, index) => (
                                <li key={index}>
                                    <Link
                                        href={social.href}
                                        className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600"
                                    >
                                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path d={social.icon} />
                                        </svg>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-2 md:col-span-1">
                        <h3 className="text-lg font-semibold text-gray-900">Company</h3>
                        <ul className="mt-4 space-y-3 text-sm text-gray-600">
                            <li><Link href="#" className="hover:text-blue-600">About</Link></li>
                            <li><Link href="#" className="hover:text-blue-600">Careers</Link></li>
                            <li><Link href="#" className="hover:text-blue-600">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="col-span-2 md:col-span-1">
                        <h3 className="text-lg font-semibold text-gray-900">Resources</h3>
                        <ul className="mt-4 space-y-3 text-sm text-gray-600">
                            <li><Link href="#" className="hover:text-blue-600">Blog</Link></li>
                            <li><Link href="#" className="hover:text-blue-600">Help Center</Link></li>
                            <li><Link href="#" className="hover:text-blue-600">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div className="col-span-2">
                        <h3 className="text-lg font-semibold text-gray-900">Subscribe</h3>
                        <p className="mt-2 text-sm text-gray-600">Get the latest updates right to your inbox.</p>
                        <div className="flex items-center mt-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border rounded-l-md focus:outline-none focus:ring focus:border-blue-500"
                            />
                            <button className="px-4 py-2 text-white bg-blue-600 rounded-r-md hover:bg-blue-700">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-10 text-sm text-gray-500 text-center border-t pt-5">
                    © {new Date().getFullYear()} YourCompany. All rights reserved.
                </div>
            </div>
        </section>
    );
};

export default Footer;
