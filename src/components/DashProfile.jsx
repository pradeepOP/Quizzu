import React, { useContext, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ApiRequest from "@/utils/apiRequest";
import { useAuth } from "@/context/userContext";
import { toast } from "react-toastify";
import { profileUpdateSchema } from "@/schemas";

const DashProfile = () => {
  const { user, setUser } = useAuth();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (values) => {
    try {
      const response = await ApiRequest.patch("/user/update-profile", values);
      toast.success(response.data.message);
      setUser((prevUser) => ({ ...prevUser, ...values }));
      handleClose();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="px-10 py-10 space-y-8">
      {/* username */}
      <div className="flex flex-col items-start justify-between gap-1 md:flex-row md:items-center">
        <span className="text-[#000000] font-bold text-sm md:text-lg">
          Username
        </span>
        <span className="p-3 border-2 text-[#0E0F0F] md:text-lg border-[#CFCFCF] rounded-xl w-full md:w-4/5 h-14 md:h-auto md:min-w-[200px]">
          {user?.fullname}
        </span>
      </div>
      {/* email */}
      <div className="flex flex-col items-start justify-between gap-1 md:flex-row md:items-center">
        <span className="text-[#000000] font-bold text-sm md:text-lg">
          Email
        </span>
        <span className="p-3 border-2 text-[#0E0F0F] text-sm md:text-lg border-[#CFCFCF] rounded-xl w-full md:w-4/5 h-14 md:h-auto md:min-w-[200px]">
          {user?.email}
        </span>
      </div>
      {/* mobile number */}
      <div className="flex flex-col items-start justify-between gap-1 md:flex-row md:items-center">
        <span className="text-[#000000] font-bold text-sm md:text-lg">
          Mobile No.
        </span>
        <span className="p-3 border-2 tracking-wider text-[#0E0F0F] text-sm md:text-lg border-[#CFCFCF] rounded-xl w-full md:w-4/5 h-14 md:h-auto md:min-w-[200px]">
          {user?.phNumber ? user.phNumber : "No phone number yet"}
        </span>
      </div>
      <button
        onClick={handleClickOpen}
        className="px-8 py-2 mt-4 tracking-wider text-white bg-[#063173] rounded-xl">
        Edit
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-11/12 max-w-lg p-6 space-y-4 bg-white rounded-md">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">Edit Profile</h2>
              <button
                type="button"
                onClick={handleClose}
                className="text-2xl text-[#0E0F0F]">
                x
              </button>
            </div>
            <Formik
              initialValues={{
                fullname: user.fullname,
                phNumber: user.phNumber,
              }}
              validationSchema={profileUpdateSchema}
              onSubmit={handleSubmit}>
              {({ isSubmitting }) => (
                <Form className="space-y-4">
                  <div className="flex flex-col">
                    <label
                      htmlFor="fullname"
                      className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <Field
                      type="text"
                      id="fullname"
                      name="fullname"
                      className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                    />
                    <ErrorMessage
                      name="fullname"
                      component="div"
                      className="text-sm text-red-500"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label
                      htmlFor="phNumber"
                      className="block text-sm font-medium text-gray-700">
                      Mobile No.
                    </label>
                    <Field
                      type="text"
                      id="phNumber"
                      name="phNumber"
                      className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                    />
                    <ErrorMessage
                      name="phNumber"
                      component="div"
                      className="text-sm text-red-500"
                    />
                  </div>
                  <div className="flex justify-end space-x-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-4 py-2 text-white bg-[#063173] rounded-xl">
                      Save
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashProfile;
