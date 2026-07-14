const Stats = () => {
  const stats = [
    { id: 1, number: "500+", label: "Properties Listed", color: "text-blue-500" },
    { id: 2, number: "1200+", label: "Happy Users", color: "text-green-500" },
    { id: 3, number: "300+", label: "Bookings Completed", color: "text-purple-500" },
    { id: 4, number: "50+", label: "Cities Covered", color: "text-orange-500" }
  ];

  return (
    <div className="py-16 bg-gray-100 px-8">
      
      
      <h2 className="text-3xl font-bold text-center mb-12">
        Our Achievements
      </h2>

      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        
        {stats.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition duration-300"
          >
            <h2 className={`text-3xl font-bold ${item.color}`}>
              {item.number}
            </h2>

            <p className="text-gray-600 mt-2 text-sm">
              {item.label}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Stats;