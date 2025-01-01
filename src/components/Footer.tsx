export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 py-8 mt-0">
            <div className="container mx-auto px-4 flex flex-wrap justify-between">
                
                {/* Address Section */}
                <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
                    <h4 className="text-lg font-bold text-gray-800 mb-4">Funiro.</h4>
                    <p className="text-gray-600 text-sm">
                        400 University Drive Suite 200 Coral Gables,<br /> 
                        FL 33134 USA
                    </p>
                </div>

                {/* Links Section */}
                <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
                    <h4 className="text-lg font-bold text-gray-800 mb-4">Links</h4>
                    <ul className="text-gray-600 text-sm space-y-2">
                        <li><a href="#" className="hover:text-gray-800">Home</a></li>
                        <li><a href="#" className="hover:text-gray-800">Shop</a></li>
                        <li><a href="#" className="hover:text-gray-800">About</a></li>
                        <li><a href="#" className="hover:text-gray-800">Contact</a></li>
                    </ul>
                </div>

                {/* Help Section */}
                <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
                    <h4 className="text-lg font-bold text-gray-800 mb-4">Help</h4>
                    <ul className="text-gray-600 text-sm space-y-2">
                        <li><a href="#" className="hover:text-gray-800">Payment Options</a></li>
                        <li><a href="#" className="hover:text-gray-800">Returns</a></li>
                        <li><a href="#" className="hover:text-gray-800">Privacy Policies</a></li>
                    </ul>
                </div>

                {/* Newsletter Section */}
                <div className="w-full sm:w-1/4">
                    <h4 className="text-lg font-bold text-gray-800 mb-4">Newsletter</h4>
                    <form className="flex flex-wrap space-x-2">
                        <input 
                            type="email" 
                            placeholder="Enter Your Email Address" 
                            aria-label="Enter Your Email Address"
                            className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400"
                        />
                        <button 
                            type="submit" 
                            className="w-full sm:w-auto px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700">
                            SUBSCRIBE
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="container mx-auto px-4 mt-8 text-center text-gray-600 text-sm">
                <p>&copy; 2023 Funiro. All rights reserved</p>
            </div>
        </footer>
    );
}
