export default function HeroSection() {
  return (
    <section className="relative h-screen bg-gradient-to-r from-yellow-50 to-yellow-100">
      <img
        src="/images/hero.jpg"
        alt="Product Image"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="container mx-auto flex items-center justify-center lg:justify-end h-full px-4">
        <div className="bg-yellow-100 rounded-sm shadow-lg px-6 py-10 z-10 w-full max-w-xl lg:mr-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">New Arrival</h2>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-yellow-600">Discover Our New Collection</h1>
          <p className="mb-6 text-gray-600 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="bg-yellow-600 text-white font-bold py-3 px-6 rounded-md hover:bg-yellow-700 transition duration-300">
            Buy Now
          </button>
        </div>
      </div>
    </section>


  );
} 