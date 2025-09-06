export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header / Banner */}
      <header className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-5xl font-bold">tatiana Your Game Servers</h1>
        <p className="mt-4 text-xl">Minecraft, Rust, Ark — fast and reliable hosting for your players.</p>
        <button className="mt-8 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100">
          Order Now
        </button>
      </header>

      {/* Features Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white shadow-lg p-6 rounded-lg w-72">
            <h3 className="text-xl font-semibold mb-2">High Performance</h3>
            <p>Fast servers with low latency for a smooth gaming experience.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg w-72">
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p>Our team is always ready to help you with any issues.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg w-72">
            <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
            <p>Plans for all budgets with flexible upgrades.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Plans</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg w-72">
            <h3 className="text-xl font-semibold mb-2">Starter</h3>
            <p className="text-gray-600 mb-4">2 GB RAM / 1 CPU</p>
            <p className="text-2xl font-bold mb-4">$5/month</p>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Order
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-72">
            <h3 className="text-xl font-semibold mb-2">Pro</h3>
            <p className="text-gray-600 mb-4">4 GB RAM / 2 CPU</p>
            <p className="text-2xl font-bold mb-4">$10/month</p>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Order
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-72">
            <h3 className="text-xl font-semibold mb-2">Ultimate</h3>
            <p className="text-gray-600 mb-4">8 GB RAM / 4 CPU</p>
            <p className="text-2xl font-bold mb-4">$20/month</p>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Order
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        &copy; {new Date().getFullYear()} Your Hosting Company. All rights reserved.
      </footer>
    </div>
  )
}
