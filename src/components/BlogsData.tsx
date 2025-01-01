export default function BlogsData() {
    return (
      <div>
        <div className="container mx-auto py-12">
          <div className="flex flex-wrap lg:flex-nowrap gap-8">
  
            {/* Main Content */}
            <div className="w-full lg:w-2/3 space-y-12 mx-5">
              {/* Blog Post 1 */}
              {[...Array(3)].map((_, index) => (
                <article key={index} className="bg-white shadow-sm rounded-lg overflow-hidden">
                  <img
                    src={`/images/blog${index + 1}.png`}
                    alt={`Blog Image ${index + 1}`}
                    className="w-full object-cover h-72"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <div className="flex items-center text-lg text-gray-500 space-x-4 mb-4">
                      <div className="flex items-center">
                        <i className="fas fa-user mr-1"></i> Admin
                      </div>
                      <div className="flex items-center">
                        <i className="fas fa-calendar-alt mr-1"></i> 14 Oct 2022
                      </div>
                      <div className="flex items-center">
                        <i className="fas fa-tags mr-1"></i> Wood
                      </div>
                    </div>
                    <h2 className="text-2xl font-semibold mb-3">Going all-in with millennial design</h2>
                    <p className="text-gray-600 text-xl">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                    </p>
                    <a href="#" className="text-xl font-medium text-blue-600 mt-4 inline-block">Read more</a>
                  </div>
                </article>
              ))}
            </div>
  
            {/* Sidebar */}
            <div className="w-full lg:w-1/3">
              <div className="sticky top-12 space-y-8">
  
                {/* Search Box */}
                <div className="bg-white shadow-sm rounded-lg p-4">
                  <form>
                    <input
                      type="text"
                      placeholder="Search Something 🔎"
                      className="w-full border border-gray-300 p-2 rounded-lg text-center focus:outline-none focus:ring-1 focus:ring-yellow-500"
                      aria-label="Search blog posts"
                    />
                  </form>
                </div>
  
                {/* Categories */}
                <div className="bg-white shadow-sm rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-3">Categories</h3>
                  <ul className="space-y-2">
                    {['Crafts', 'Design', 'Handmade', 'Interior', 'Wood'].map((category, idx) => (
                      <li key={idx} className="flex justify-between text-gray-600">
                        <span>{category}</span>
                        <span>{Math.floor(Math.random() * 10) + 1}</span>
                      </li>
                    ))}
                  </ul>
                </div>
  
                {/* Recent Posts */}
                <div className="bg-white shadow-sm rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-3">Recent Posts</h3>
                  <ul className="space-y-3 text-lg">
                    {[...Array(5)].map((_, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <img
                          src={`/images/post${idx + 1}.png`}
                          alt={`Post ${idx + 1}`}
                          className="w-12 h-12 rounded-md object-cover"
                          loading="lazy"
                        />
                        <div>
                          <p className="text-lg font-medium">Going all-in with millennial design</p>
                          <span className="text-xs text-gray-500">03 Aug 2022</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
  
              </div>
            </div>
  
          </div>
        </div>
      </div>
    );
  }
  