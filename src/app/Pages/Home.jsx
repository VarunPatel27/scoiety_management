
export default function Home() {
  return (
    <div className="p-5 font-sans">
      <h1 className="text-center text-2xl font-bold mb-5">Society Management System</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border p-4 rounded-lg shadow-sm bg-white">
          <h2 className="text-lg font-semibold">Pending Complaints</h2>
          <p className="text-xl">3</p>
          <p className="text-sm text-gray-600">+2 since last week</p>
        </div>
        <div className="border p-4 rounded-lg shadow-sm bg-white">
          <h2 className="text-lg font-semibold">Upcoming Events</h2>
          <p className="text-xl">2</p>
          <p className="text-sm text-gray-600">Next: Yoga Workshop (Jun 21)</p>
        </div>
        <div className="border p-4 rounded-lg shadow-sm bg-white">
          <h2 className="text-lg font-semibold">Available Parking Spots</h2>
          <p className="text-xl">5</p>
          <p className="text-sm text-gray-600">2 reserved for guests</p>
        </div>
        <div className="border p-4 rounded-lg shadow-sm bg-white">
          <h2 className="text-lg font-semibold">Maintenance Due</h2>
          <p className="text-xl">¥2,000</p>
          <p className="text-sm text-gray-600">Due by: June 30, 2023</p>
        </div>
        <div className="border p-4 rounded-lg shadow-sm bg-white col-span-1 md:col-span-2 lg:col-span-3">
          <h2 className="text-lg font-semibold">Recent Notifications</h2>
          <ul>
            <li className="flex items-center">
              <input type="checkbox" id="notice" className="mr-2" />
              <label htmlFor="notice" className="text-sm">New notice: Annual General Meeting on July 15</label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

