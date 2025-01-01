export default function CartHeroSection() {
    return (
      <section className="relative h-50 bg-gradient-to-r from-yellow-50 to-yellow-100">
        {/* Background Image */}
        <img
          src="/images/shop-top.jpeg"
          alt="Product Image"
          className="absolute inset-0 object-cover w-full h-full opacity-40"
        />
        {/* Content */}
        <div className="container mx-auto flex items-center justify-center h-full">
          <div className="rounded-sm shadow-md px-5 py-10 z-10 text-center">
            <div className="flex flex-col items-center mb-6">
              <img src="/images/logo.png" alt="Logo" className="mb-4" />
              <h1 className="text-4xl font-medium text-black">Cart</h1>
            </div>
            <p>
              <span className="font-bold underline subpixel-antialiased">
                <a href="/">Home</a>
              </span>{" "}
              &gt; Cart
            </p>
          </div>
        </div>
      </section>
    );
  }
  