export default function HelloForm() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
      <h2 className="text-2xl font-bold mb-4 text-[#1D3E6D]">SAY HELLO!</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full border p-2 rounded" />
        <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
        <input type="tel" placeholder="Phone" className="w-full border p-2 rounded" />
        <select className="w-full border p-2 rounded">
          <option>Select Service</option>
          <option>Digital Marketing</option>
          <option>Web Development</option>
          <option>SEO</option>
        </select>
        <textarea placeholder="Message" rows="4" className="w-full border p-2 rounded" />
        <button type="submit" className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500">
          Send Message
        </button>
      </form>
    </div>
  );
}
