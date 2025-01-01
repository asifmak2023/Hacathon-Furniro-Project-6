export default function ContactData() {
    return (
        <div className="mx-10 lg:mx-40 font-poppins">
            <div className="text-center my-20">
                <h1 className="text-3xl font-bold text-gray-800">Get In Touch With Us</h1>
                <p className="text-lg text-gray-600 mb-10">
                    For more information about our products & services, please feel free to drop us a message.
                    Our staff is always available to help you out. Do not hesitate!
                </p>
            </div>

            <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {/* Contact Information */}
                    <div className="space-y-4 text-gray-700">
                        {/* Address */}
                        <div>
                            <div className="flex items-center space-x-2">
                                <span className="text-xl text-yellow-500">
                                    <i className="fas fa-map-marker-alt"></i>
                                </span>
                                <h3 className="font-bold">Address</h3>
                            </div>
                            <p className="pl-7">236 5th SE Avenue, New York NY10000, United States</p>
                        </div>

                        {/* Phone */}
                        <div>
                            <div className="flex items-center space-x-2">
                                <span className="text-xl text-yellow-500">
                                    <i className="fas fa-phone"></i>
                                </span>
                                <h3 className="font-bold">Phone</h3>
                            </div>
                            <p className="pl-7">Mobile: +(84) 546-6789</p>
                            <p className="pl-7">Hotline: +(84) 456-6789</p>
                        </div>

                        {/* Working Time */}
                        <div>
                            <div className="flex items-center space-x-2">
                                <span className="text-xl text-yellow-500">
                                    <i className="fas fa-clock"></i>
                                </span>
                                <h3 className="font-bold">Working Time</h3>
                            </div>
                            <p className="pl-7">Monday - Friday: 9:00 AM - 10:00 PM</p>
                            <p className="pl-7">Saturday - Sunday: 9:00 AM - 9:00 PM</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="space-y-4 bg-white p-6 shadow-lg rounded-lg">
                        <div>
                            <label htmlFor="name" className="block text-gray-600 font-bold">Your Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Abc"
                                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-yellow-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-gray-600 font-bold">Email Address</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Abc@def.com"
                                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-yellow-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-gray-600 font-bold">Subject</label>
                            <input
                                id="subject"
                                type="text"
                                placeholder="This is optional"
                                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-yellow-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-gray-600 font-bold">Message</label>
                            <textarea
                                id="message"
                                placeholder="Hi! I'd like to ask about..."
                                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-yellow-500"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 px-6 text-white bg-amber-600 rounded-md hover:bg-amber-700 transition duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
