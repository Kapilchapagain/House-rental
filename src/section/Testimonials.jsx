const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      text: "Amazing platform! Found my dream house easily."
    },
    {
      id: 2,
      name: "Sarah Smith",
      text: "Very smooth booking experience and great support."
    },
    {
      id: 3,
      name: "David Lee",
      text: "Highly recommended for anyone looking to rent."
    }
  ];

  return (
    <div className="px-8 py-16 bg-gray-100">
      
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-12">
        What Our Users Say
      </h2>

     
      <div className="grid gap-8 md:grid-cols-3">
        
        {reviews.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
          >
           
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold mb-4">
              {item.name.charAt(0)}
            </div>

          
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              "{item.text}"
            </p>

           
            <h4 className="font-semibold text-gray-800">
              {item.name}
            </h4>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Testimonials;