export default function BlogHeroSection() {
    return (
      <section className="relative h-[50vh] bg-gradient-to-r from-yellow-50 to-yellow-100">
        <img
          src="/images/shop-top.jpeg"
          alt="Product Image"
          className="absolute inset-0 object-cover w-full h-full opacity-50"
        />
        <div className="container mx-auto flex items-center justify-center h-full">
          <div className="rounded-sm shadow-md px-5 py-10 z-10 text-center">
            <div className="flex flex-col items-center">
              <img
                src="/images/logo.png"
                alt="Funiro logo"
                className="mb-4"
                style={{ maxWidth: '120px' }} // Adjust logo size as needed
              />
              <h1 className="text-4xl font-semibold text-black">Blog</h1>
            </div>
            <p>
              <span className="font-bold underline text-gray-800">
                <a href="/">Home</a>
              </span>{' '}
              &gt; Blog
            </p>
          </div>
        </div>
      </section>
    );
  }
  