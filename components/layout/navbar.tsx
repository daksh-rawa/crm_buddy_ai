export default function Navbar() {
  return (
    <div className="w-full bg-white shadow-sm px-6 py-3 flex justify-between items-center">
      <h3 className="font-semibold text-lg">Dashboard</h3>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
        + Add Lead
      </button>
    </div>
  );
}
