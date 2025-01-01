export default function Products() {
    return (
        <div className="container py-10 px-10 mx-0 min-w-full">
            <h1 className="text-3xl font-extrabold my-10 text-center">Products</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
                    <a href="#">
                        <img src="/images/product1.png" alt="Syltherine stylish cafe chair" className="w-full h-64 object-cover" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold text-gray-900">Syltherine</h5>
                        </a>
                        <p className="mb-3 text-gray-700">Stylish cafe chair</p>
                        <h5 className="text-xl text-gray-900">Rp 2.500.000
                            <span className="text-gray-500 pl-5 text-sm line-through">Rp 3.500.000</span>
                        </h5>
                    </div>
                </div>

                <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
                    <a href="#">
                        <img src="/images/product2.png" alt="Leviosa stylish cafe chair" className="w-full h-64 object-cover" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold text-gray-900">Leviosa</h5>
                        </a>
                        <p className="mb-3 text-gray-700">Stylish cafe chair</p>
                        <h5 className="text-xl text-gray-900">Rp 2.500.000</h5>
                    </div>
                </div>

                <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
                    <a href="#">
                        <img src="/images/product3.png" alt="Lolito luxury big sofa" className="w-full h-64 object-cover" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold text-gray-900">Lolito</h5>
                        </a>
                        <p className="mb-3 text-gray-700">Luxury big sofa</p>
                        <h5 className="text-xl text-gray-900">Rp 7.000.000
                            <span className="text-gray-500 pl-5 text-sm line-through">Rp 14.500.000</span>
                        </h5>
                    </div>
                </div>

                <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
                    <a href="#">
                        <img src="/images/product4.png" alt="Respira outdoor bar table and stool" className="w-full h-64 object-cover" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold text-gray-900">Respira</h5>
                        </a>
                        <p className="mb-3 text-gray-700">Outdoor bar table and stool</p>
                        <h5 className="text-xl text-gray-900">Rp 500.000</h5>
                    </div>
                </div>

            </div>

            <div className="flex justify-center mt-10">
                <button
                    type="button"
                    className="py-3 px-6 text-xl font-medium text-white bg-orange-500 border border-orange-500 rounded-lg hover:bg-orange-600"
                >
                    <a href="/shop">Show More</a>
                </button>
            </div>
        </div>
    );
}
