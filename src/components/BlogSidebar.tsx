export default function BlogSidebar() {
    return (
      <div className="fixed top-0 right-0 z-40 w-64 h-screen bg-white shadow-md transition-transform transform translate-x-0 sm:translate-x-0" aria-label="Sidebar">
        <div className="flex justify-center space-x-2 py-4">
          <button className="w-8 h-8 bg-yellow-500 text-white rounded-full">1</button>
          <button className="w-8 h-8 bg-gray-100 text-gray-600 rounded-full">2</button>
          <button className="w-8 h-8 bg-gray-100 text-gray-600 rounded-full">3</button>
          <button className="w-8 h-8 bg-gray-100 text-gray-600 rounded-full">Next</button>
        </div>
  
        {/* Sidebar Content */}
        <div className="space-y-8 px-4 sm:px-6">
          {/* Search Box */}
          <div className="bg-white shadow-sm rounded-lg p-4">
            <form>
              <input
                type="text"
                placeholder="Search"
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-500"
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
            <ul className="space-y-3">
              {[...Array(5)].map((_, idx) => (
                <li key={idx} className="flex items-center space-x-3">
                  <img
                    src={`https://via.placeholder.com/80?text=Post+${idx + 1}`}
                    alt={`Post ${idx + 1}`}
                    className="w-12 h-12 rounded-md"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-sm font-medium">Post title here</p>
                    <span className="text-xs text-gray-500">03 Aug 2022</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
  