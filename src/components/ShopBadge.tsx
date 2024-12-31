export default function ShopBadge() {
    return (
        <div className="bg-[#F9F1E7] h-full mb-0">
            <div className="flex flex-wrap justify-around py-12 px-5">
                {/* First Badge */}
                <div className="flex items-center mb-8 sm:mb-0">
                    <img src="/images/trophie.png" alt="Trophy" className="h-16 sm:h-20" />
                    <div className="ml-4">
                        <h2 className="text-xl sm:text-2xl font-bold text-black">
                            High Quality
                        </h2>
                        <span className="text-sm sm:text-lg text-gray-400">
                            Crafted from top materials
                        </span>
                    </div>
                </div>

                {/* Second Badge */}
                <div className="flex items-center mb-8 sm:mb-0">
                    <img src="/images/verified.png" alt="Verified" className="h-16 sm:h-20" />
                    <div className="ml-4">
                        <h2 className="text-xl sm:text-2xl font-bold text-black">
                            Warranty Protection
                        </h2>
                        <span className="text-sm sm:text-lg text-gray-400">
                            Over 2 years
                        </span>
                    </div>
                </div>

                {/* Third Badge */}
                <div className="flex items-center mb-8 sm:mb-0">
                    <img src="/images/shipping.png" alt="Shipping" className="h-16 sm:h-20" />
                    <div className="ml-4">
                        <h2 className="text-xl sm:text-2xl font-bold text-black">
                            Free Shipping
                        </h2>
                        <span className="text-sm sm:text-lg text-gray-400">
                            Order Over 150 $
                        </span>
                    </div>
                </div>

                {/* Fourth Badge */}
                <div className="flex items-center mb-8 sm:mb-0">
                    <img src="/images/support.png" alt="Support" className="h-16 sm:h-20" />
                    <div className="ml-4">
                        <h2 className="text-xl sm:text-2xl font-bold text-black">
                            24/7 Support
                        </h2>
                        <span className="text-sm sm:text-lg text-gray-400">
                            Dedicated support
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
