import React, { useContext } from "react";
import { Authcontext } from "../Context/AuthContext";
import toast from "react-hot-toast";
import { auth } from "../firebase/firebase.config";
import "animate.css";

const UpdateProfile = () => {
  const { updateUser, setUser, setLoading } = useContext(Authcontext);

  const handleUpdate = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;

    updateUser(displayName, photoURL)
      .then(() => {
        toast.success("Information updated successfully");
        setUser({ ...auth.currentUser });

        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        toast.error(err.code);
      });

    e.target.reset();
  };
  return (
    <div className="animate__animated animate__fadeInUpBig flex flex-col items-center justify-center my-8">
      <h1 className="text-center font-bold text-2xl text-primary my-5">
        Update Now
      </h1>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <div className="card-body">
          <form onSubmit={handleUpdate}>
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input
                type="text"
                className="input placeholder:text-gray-400"
                placeholder="Your Name"
                name="name"
                required
              />
              {/* photo */}
              <label className="label">Photo</label>
              <input
                type="text"
                className="input placeholder:text-gray-400"
                placeholder="Phot Url"
                name="photo"
                required
              />

              <button className="btn btn-secondary mt-4 text-xl">Update</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
