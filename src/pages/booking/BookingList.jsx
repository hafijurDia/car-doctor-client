import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const BookingList = () => {
  const { user } = useContext(AuthContext);

  const email = user?.email;
  const [bookings, setBookings] = useState([]);
  console.log(bookings);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/bookings?email=${email}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch bookings");
        }
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, [email]); // Include `email` as a dependency

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-16">
      <div className="relative rounded-md">
        {/* Background Image */}
        <div
          className="flex justify-center items-center relative"
          style={{
            backgroundImage: `url(https://i.ibb.co/ydCbDN3/5555.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "200px",
            borderRadius: "0.5rem",
          }}
        >
          <h2 className="text-3xl font-bold mb-4 text-white absolute z-10">
            My Bookings
          </h2>
        </div>

        {/* Gray Overlay */}
        <div
          className="absolute inset-0 bg-gray-800 opacity-80 rounded-md"
          style={{ zIndex: 1 }}
        ></div>
      </div>

      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Price</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.length > 0 ? (
            bookings.map((booking) => (
              <tr
                key={booking._id}
                className="p-4 shadow-lg rounded-lg bg-white"
              >
                <th>
                  <button className="btn btn-circle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={booking.img} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{booking?.serviceTitle}</div>
                    </div>
                  </div>
                </td>
                <td>{booking.price}</td>
                <td>{booking.serviceDate}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))
          ) : (
            <p>No bookings found.</p>
          )}
        </tbody>
      </table>
    </div>
  );
};

BookingList.propTypes = {};

export default BookingList;