export default function ShopProducts() {
    const products = [
        {
            name: "Syltherine",
            description: "Stylish cafe chair",
            price: "Rp 2.500.000",
            originalPrice: "Rp 3.500.000",
            image: "/images/product1.png",
        },
        {
            name: "Leviosa",
            description: "Stylish cafe chair",
            price: "Rp 2.500.000",
            image: "/images/product2.png",
        },
        {
            name: "Lolito",
            description: "Luxury big sofa",
            price: "Rp 7.000.000",
            originalPrice: "Rp 14.500.000",
            image: "/images/product3.png",
        },
        {
            name: "Respira",
            description: "Outdoor bar table and stool",
            price: "Rp 500.000",
            image: "/images/product4.png",
        },
        {
            name: "Grifo",
            description: "Night lamp",
            price: "Rp 1.500.000",
            image: "/images/product1.png",
        },
        {
            name: "Muggo",
            description: "Small mug",
            price: "Rp 150.000",
            image: "/images/product2.png",
        },
        {
            name: "Pingky",
            description: "Cute bed set",
            price: "Rp 7.000.000",
            originalPrice: "Rp 14.500.000",
            image: "/images/product3.png",
        },
        {
            name: "Potty",
            description: "Minimalist flower pot",
            price: "Rp 500.000",
            image: "/images/product4.png",
        },
    ];

    return (
        <div className="my-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product, index) => (
                    <div key={index} className="max-w-sm bg-white shadow-md rounded-lg overflow-hidden">
                        <a href="#">
                            <img className="w-full h-64 object-cover" src={product.image} alt={product.name} />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold text-gray-900">{product.name}</h5>
                            </a>
                            <p className="mb-3 text-gray-700">{product.description}</p>
                            <h5 className="text-xl text-gray-900">
                                {product.price}
                                {product.originalPrice && (
                                    <span className="text-gray-500 pl-5 text-sm line-through">{product.originalPrice}</span>
                                )}
                            </h5>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
                <button
                    type="button"
                    className="text-white bg-amber-600 hover:bg-amber-500 text-xl py-3 px-6 rounded-lg mr-2"
                >
                    1
                </button>
                <button
                    type="button"
                    className="text-black bg-[#F9F1E7] hover:bg-amber-500 text-xl py-3 px-6 rounded-lg mr-2"
                >
                    2
                </button>
                <button
                    type="button"
                    className="text-black bg-[#F9F1E7] hover:bg-amber-500 text-xl py-3 px-6 rounded-lg mr-2"
                >
                    3
                </button>
                <button
                    type="button"
                    className="text-black bg-[#F9F1E7] hover:bg-amber-500 text-xl py-3 px-6 rounded-lg"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
