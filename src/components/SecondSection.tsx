export default function SecondSection() {
    return (
        <div className="px-5 py-16 text-center container mx-auto flex flex-col items-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Browse The Range</h1>
            <p className="text-xl sm:text-2xl font-regular mb-10 text-gray-600">We have all types of variety available.</p>

            <div className="flex flex-wrap justify-center gap-8">
                {/* Dining Room Card */}
                <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
                    <a href="#">
                        <img className="rounded-t-lg w-full h-64 object-cover" src="/images/dining.png" alt="Dining Room" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-xl sm:text-2xl font-bold text-gray-900">Dining</h5>
                        </a>
                    </div>
                </div>

                {/* Living Room Card */}
                <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
                    <a href="#">
                        <img className="rounded-t-lg w-full h-64 object-cover" src="/images/living.png" alt="Living Room" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-xl sm:text-2xl font-bold text-gray-900">Living</h5>
                        </a>
                    </div>
                </div>

                {/* Bedroom Card */}
                <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
                    <a href="#">
                        <img className="rounded-t-lg w-full h-64 object-cover" src="/images/bedroom.png" alt="Bedroom" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-xl sm:text-2xl font-bold text-gray-900">Bedroom</h5>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
