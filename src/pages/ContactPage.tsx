export default function ContactPage() {
    return(
        <>
            <div className={"bg-[#f9f9f9]"}>
            <div className="max-w-screen-xl mx-auto px-4 py-12 space-y-16">
                {/* Contact Information Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Our Showroom */}
                    <div className="flex flex-col space-y-4">
                        <h2 className="text-xl font-bold">Our Showroom</h2>
                        <p>Battaramulla, Koswatta</p>
                        <p>+9477 456 0882</p>
                    </div>

                    {/* Quick Help */}
                    <div className="flex flex-col space-y-4">
                        <h2 className="text-xl font-jost font-bold">Quick Help</h2>
                        <p className={"font-jost opacity-60"}>You can ask anything you want to know about our products or services via this e-mail.</p>
                        <a href="mailto:helloshoeshop.lk" className="font-jost opacity-60 underline">helloshoeshop.lk</a>
                        <a href="mailto:shoeshop.lkhelp@gmail.com" className="underline font-jost opacity-60">shoeshop.lkhelp@gmail.com</a>
                    </div>

                    {/* Send Message Form */}
                    <div className="flex flex-col space-y-4">
                        <h2 className="text-xl font-bold">Send Message</h2>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-2 border border-gray-300"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-2 border border-gray-300"
                            />
                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full px-4 py-2 border border-gray-300"
                            />
                            <textarea
                                placeholder="Your Message"
                                className="w-full px-4 py-2 border border-gray-300 h-32"
                            />
                            <button
                                type="submit"
                                className="bg-yellow-600 text-black px-4 py-2 hover:bg-yellow-700 transition duration-300"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}