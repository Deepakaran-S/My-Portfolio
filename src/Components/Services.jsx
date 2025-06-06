import { Link } from "react-scroll";
import AnimateOnView from "../Animations/AnimateOnView";
const Services = () => {
  const services = [
    {
      title: "UI/UX Design",
      icon: "🎨",
      description: "Wireframes, prototyping, and usability-focused interfaces.",
    },
    {
      title: "Frontend Development",
      icon: "⚛️",
      description: "Responsive, performant UI using React and Tailwind.",
    },
    {
      title: "Backend Development",
      icon: "🔧",
      description: "REST APIs, Auth, and MongoDB with Node.js & Express.",
    },
  ];

  return (
    <section className=" py-28  " id="services">
      <div className="text-center  mb-12">
        <div className="flex justify-center items-center ">
          <AnimateOnView text={"Services Offered"} />
        </div>{" "}
        <p className="text-white text-sm mt-2">
          Delivering full-stack solutions with design thinking
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Link to="contact" smooth={true} duration={500}>
          <div
            key={index}
            className=" border border-gray-700 rounded-xl p-6 transition-shadow duration-300 ease-in-out cursor-pointer hover:shadow-lg hover:scale-[1.02]"
          >
            <div className="text-4xl mb-4 flex justify-center items-center">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-white text-sm">{service.description}</p>
          </div> </Link>
        ))}
      </div>
    </section>
  );
};
export default Services;
