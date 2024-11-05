import { useContext, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Booking = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const { _id, title, price, img } = service;
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleConfirmedOrder = async (event) => {
    event.preventDefault();
    const form = event.target;

    const bookingData = {
      serviceId: _id,
      serviceTitle: title,
      img: img,
      customerName: form.name.value,
      email: form.email?.value,
      serviceDate: form.date.value,
      price: form.price.value,
      message: form.message.value,
    };

    try {
      const response = await fetch("http://localhost:5000/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        const result = await response.json();
        
        // Show SweetAlert success message
        Swal.fire({
          title: "Success!",
          text: "Booking confirmed!",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          // Redirect to the services page after clicking "OK"
          navigate("/services");
        });

        form.reset(); // Optionally clear the form after submission
      } else {
        throw new Error("Failed to confirm booking");
      }
    } catch (error) {
      console.error("Error confirming booking:", error);
      
      // Show SweetAlert error message
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-16">
      <div className="relative rounded-md">
        {/* Background Image */}
        <div
          className="flex justify-center items-center relative"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "200px",
            borderRadius: "0.5rem",
          }}
        >
          <h2 className="text-3xl font-bold mb-4 text-white absolute z-10">
            Booking Service
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
          <form onSubmit={handleConfirmedOrder} className="card-body space-y-4">
            <h3 className="text-lg font-semibold">
              Service Name: <b>{service.title}</b>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <input
                  type="text"
                  defaultValue={user?.name}
                  placeholder="Name"
                  name="name"
                  className="bg-white rounded-lg py-2 px-4 focus:outline-none w-full"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="date"
                  name="date"
                  placeholder="Service date"
                  className="bg-white rounded-lg py-2 px-4 focus:outline-none w-full"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  readOnly
                  className="bg-white rounded-lg py-2 px-4 focus:outline-none w-full"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="price"
                  defaultValue={price}
                  readOnly
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

Booking.propTypes = {};

export default Booking;
