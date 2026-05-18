"use client";

import Link from "next/link";

const Facebook = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
);

const Twitter = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
    </svg>
);

const Instagram = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

const Youtube = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
    </svg>
);

export default function MainFooter() {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        { name: "About Us", href: "/about" },
        { name: "Contact Us", href: "/contact" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms & Conditions", href: "/terms" },
    ];

    return (
        <footer className="w-full bg-white border-t border-gray-100 mt-auto">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 flex flex-col gap-6">

                {/* TOP ROW: LOGO, LINKS, AND APP BADGES */}
                <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-6 pb-6 border-b border-gray-50">

                    {/* Brand Identity Panel */}
                    <div className="flex flex-col items-center lg:items-start gap-1">
                        <Link href="/">
                            <span className="text-2xl text-red-600 font-anton tracking-widest italic cursor-pointer select-none">
                                KFC
                            </span>
                        </Link>
                        <p className="text-xs text-gray-400 font-medium text-center lg:text-left">
                            Finger Lickin&apos; Good Food Delivered.
                        </p>
                    </div>

                    {/* Quick Links Group */}
                    <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                        {footerLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-xs md:text-sm font-bold text-gray-600 hover:text-red-600 uppercase tracking-wide transition-colors duration-200"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* 📱 APP AVAILABILITY BADGES */}
                    <div className="flex flex-col items-center lg:items-end gap-2">
                        <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-400">
                            Download Our App
                        </span>
                        <div className="flex items-center gap-3">
                            {/* Apple App Store */}
                            <a
                                href="https://www.apple.com/app-store/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-black text-white px-3 py-1.5 rounded-md hover:bg-gray-900 transition-all active:scale-98 shadow-sm"
                            >
                                {/* Custom inline SVG for Apple Logo */}
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.21.67-2.93 1.49-.63.73-1.18 1.87-1.03 2.97 1.12.09 2.27-.57 2.97-1.4" />
                                </svg>
                                <div className="text-left leading-none">
                                    <p className="text-[8px] font-medium text-gray-400">Download on the</p>
                                    <p className="text-xs font-bold font-sans">App Store</p>
                                </div>
                            </a>

                            {/* Google Play Store */}
                            <a
                                href="https://play.google.com/store"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-black text-white px-3 py-1.5 rounded-md hover:bg-gray-900 transition-all active:scale-98 shadow-sm"
                            >
                                {/* Custom inline SVG for Google Play Logo */}
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M3.609 1.814L13.783 12 3.609 22.186A2.223 2.223 0 0 1 3 20.583V3.417c0-.622.222-1.18.609-1.603zm11.234 9.126l2.846-2.846L4.743 2.146l10.1 8.794zm3.565 1.06l-2.438-2.438-2.187 2.187 2.187 2.187 2.438-2.438zm-3.565 1.06L4.743 21.854l12.946-5.948-2.846-2.846z" />
                                </svg>
                                <div className="text-left leading-none">
                                    <p className="text-[8px] font-medium text-gray-400">GET IT ON</p>
                                    <p className="text-xs font-bold font-sans">Google Play</p>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>

                {/* BOTTOM ROW: COPYRIGHT AND SOCIAL MEDIA */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Legal Info */}
                    <span className="text-xs text-gray-400 font-medium order-2 md:order-1">
                        © {currentYear} KFC India. All Rights Reserved.
                    </span>

                    {/* Social Channels Container */}
                    <div className="flex items-center gap-4 order-1 md:order-2">
                        <a href="#" className="p-2 text-gray-400 hover:text-red-600 hover:bg-gray-50 rounded-full transition-all">
                            <Facebook className="w-4 h-4" />
                        </a>
                        <a href="#" className="p-2 text-gray-400 hover:text-red-600 hover:bg-gray-50 rounded-full transition-all">
                            <Twitter className="w-4 h-4" />
                        </a>
                        <a href="#" className="p-2 text-gray-400 hover:text-red-600 hover:bg-gray-50 rounded-full transition-all">
                            <Instagram className="w-4 h-4" />
                        </a>
                        <a href="#" className="p-2 text-gray-400 hover:text-red-600 hover:bg-gray-50 rounded-full transition-all">
                            <Youtube className="w-4 h-4" />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}