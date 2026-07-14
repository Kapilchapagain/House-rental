import { ShieldCheck, CreditCard, Zap } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Verified Listings",
      desc: "All properties are verified for authenticity.",
      icon: <ShieldCheck size={28} />
    },
    {
      id: 2,
      title: "Secure Payments",
      desc: "Safe and trusted payment methods.",
      icon: <CreditCard size={28} />
    },
    {
      id: 3,
      title: "Fast Response",
      desc: "Quick communication with landlords.",
      icon: <Zap size={28} />
    }
  ];

  return (
    <div className="py-16 px-8 bg-gray-100">
      
    
      <h2 className="text-3xl font-bold text-center mb-12">
        Why Choose Us
      </h2>

    
      <div className="grid gap-6 md:grid-cols-3">
        
        {features.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition duration-300"
          >
            
            <div className="flex justify-center mb-4 text-blue-500">
              {item.icon}
            </div>

           
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              {item.title}
            </h3>

       
            <p className="text-gray-600 text-sm">
              {item.desc}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default WhyChooseUs;