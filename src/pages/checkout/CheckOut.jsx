import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-16">
      <div className="relative rounded-md">
        {/* Background Image */}
        <div
          className="flex justify-center items-center relative"
          style={{
            backgroundImage: `url(${service.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "200px",
            borderRadius: "0.5rem",
          }}
        >
          <h2 className="text-3xl font-bold mb-4 text-white absolute z-10">
            Check Out
          </h2>
        </div>

        {/* Gray Overlay */}
        <div
          className="absolute inset-0 bg-gray-800 opacity-80 rounded-md"
          style={{ zIndex: 1 }}
        ></div>
      </div>

      <div className="hero">
        <div className="card bg-gray-100 w-full shrink-0 shadow-2xl md:p-6 rounded-lg">
          <form className="card-body space-y-4">
            <h3 className="text-lg font-semibold">Service Name: <b>{service.title}</b></h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="First Name"
                  className="bg-white rounded-lg py-2 px-4 focus:outline-none w-full"
                  required
                />
              </div>
              <div className="form-control">
       
                <input
                  type="text"
                  placeholder="Last Name"
                  className="bg-white rounded-lg py-2 px-4 focus:outline-none w-full"
                  required
                />
              </div>
              <div className="form-control">
       
                <input
                  type="tel"
                  placeholder="Phone"
                  className="bg-white rounded-lg py-2 px-4 focus:outline-none w-full"
                  required
                />
              </div>
              <div className="form-control">
        
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-white rounded-lg py-2 px-4 focus:outline-none w-full"
                  required
                />
              </div>
            </div>

            <div className="form-control">
   
              <textarea
                name="message"
                id="message"
                rows="6"
                className="bg-white rounded-lg py-2 px-4 focus:outline-none w-full h-32 resize-none"
                placeholder="Type your message here..."
              ></textarea>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-error text-lg text-white hover:bg-black rounded-lg w-full">
                Order Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

CheckOut.propTypes = {};

export default CheckOut;
