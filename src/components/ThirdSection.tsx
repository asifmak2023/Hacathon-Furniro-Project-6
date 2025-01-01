export default function ThirdSection() {
    return (
        <div className="container mx-auto w-full h-full py-16">

            {/* Title and Description Section */}
            <div className="text-center mb-8 bg-amber-100 py-8">
                <h1 className="text-4xl font-bold mb-2 mt-20 text-neutral-600">50+ Beautiful rooms inspiration</h1>
                <p className="text-lg text-gray-600">Our designer already made a lot of beautiful prototypes of rooms that inspire you</p>
                <button className="bg-yellow-600 hover:bg-yellow-800 text-white font-bold py-2 px-4 mt-4 rounded-md">
                    Explore More
                </button>
            </div>

            {/* Responsive Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
                {/* Room 1 */}
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                    <img src="images/inner-peace.png" alt="Bedroom" className="w-full h-64 object-cover" />
                    <div className="p-4">
                        <p className="text-gray-700">01 -- Bedroom</p>
                        <h2 className="text-xl font-semibold mb-2">Inner Peace</h2>
                    </div>
                </div>

                {/* Room 2 */}
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                    <img src="images/thd-1.png" alt="Living Room" className="w-full h-64 object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">Cozy Corner</h2>
                        <p className="text-gray-700">Living Room</p>
                    </div>
                </div>

                {/* Room 3 */}
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                    <img src="images/thd-2.png" alt="Kitchen" className="w-full h-64 object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">Modern Kitchen</h2>
                        <p className="text-gray-700">Kitchen</p>
                    </div>
                </div>
            </div>

        </div>
    );
}
