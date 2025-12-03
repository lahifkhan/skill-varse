import toast from "react-hot-toast";
import {
  FaMapMarkerAlt,
  FaClock,
  FaPhone,
  FaPlus,
  FaFacebookF,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  const handleMessageSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully");
  };

  return (
    <div className="bg-base-200 py-16">
      <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
        {/* LEFT COLUMN – CONTACT INFO */}
        <div className="relative bg-base-100 p-10 rounded-xl overflow-hidden shadow-lg border border-base-300">
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-primary rotate-[-20deg]"></div>

          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-base-content">
              Get in Touch
            </h2>
            <p className="text-base-content/70 text-sm mt-2">
              Feel free to reach out to us anytime. We’re here to help and
              answer any questions you have.
            </p>

            {/* Contact Info Box */}
            <div className="mt-8 bg-base-200 rounded-xl p-6 shadow-md space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-primary text-xl mt-1" />
                <div>
                  <p className="text-base-content/70 text-sm">Our Address</p>
                  <p className="text-base-content font-bold">
                    1564 Goosetown Drive, Matthews, NC 28105
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <FaClock className="text-primary text-xl mt-1" />
                <div>
                  <p className="text-base-content/70 text-sm">
                    Hours Of Operation
                  </p>
                  <p className="text-base-content font-bold">
                    Mon - Fri 9.00am to 5.00pm
                  </p>
                  <p className="text-base-content/50 text-xs">
                    [2nd Sat Holiday]
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start gap-4">
                <FaPhone className="text-primary text-xl mt-1" />
                <div>
                  <p className="text-base-content/70 text-sm">Contact</p>
                  <p className="text-base-content font-bold">
                    +99 - 35895 - 4565
                  </p>
                  <p className="text-base-content font-bold">
                    supportyou@info.com
                  </p>
                </div>
              </div>
            </div>

            {/* Customer Care Badge */}
            <div className="absolute bottom-10 left-8 flex items-center gap-2 text-base-100">
              <FaPlus />
              <span className="font-semibold">Customer Care</span>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-6 mt-14 text-base-content/70">
              <FaFacebookF className="text-lg hover:text-primary cursor-pointer" />
              <FaPinterestP className="text-lg hover:text-primary cursor-pointer" />
              <FaTwitter className="text-lg hover:text-primary cursor-pointer" />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN – FORM */}
        <div className="bg-base-100 p-10 rounded-xl shadow-md border border-base-300">
          <form className="space-y-4" onSubmit={handleMessageSubmit}>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered input-primary w-full bg-base-200 text-base-content"
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered input-primary w-full bg-base-200 text-base-content"
            />
            <input
              type="text"
              placeholder="Phone"
              className="input input-bordered input-primary w-full bg-base-200 text-base-content"
            />
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered input-primary w-full bg-base-200 text-base-content"
            />
            <textarea
              rows="6"
              placeholder="Message"
              required
              className="textarea textarea-bordered textarea-primary w-full bg-base-200 text-base-content"
            ></textarea>

            <button
              type="submit"
              className="w-full btn btn-primary text-white font-bold py-3 rounded-lg tracking-wide uppercase"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
