import React, { useContext, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ApiRequest from "@/utils/apiRequest";
import { useAuth } from "@/context/userContext";
import { toast } from "react-toastify";

const DashProfile = () => {
  const { user, setUser } = useAuth();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validationSchema = Yup.object({
    fullname: Yup.string().required("Required"),
    phNumber: Yup.string().length(10, "Invalid phone number"),
  });

  const handleSubmit = async (values) => {
    try {
      const response = await ApiRequest.patch("/user/update-profile", values);
      console.log(response.data);
      toast.success(response.data.message);
      setUser((prevUser) => ({ ...prevUser, ...values }));
      handleClose();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="px-10 py-10 space-y-8">
      <div className="flex items-center gap-3 md:justify-between">
        <span className="text-[#000000] font-bold text-sm md:text-lg">
          Username
        </span>
        <span className="p-3 border-2 text-[#0E0F0F] md:text-lg border-[#CFCFCF] rounded-xl w-4/5 h-14">
          {user?.fullname}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[#000000] font-bold text-sm md:text-lg">
          Email
        </span>
        <span className="p-3 border-2 text-[#0E0F0F] text-sm md:text-lg border-[#CFCFCF] rounded-xl w-4/5 h-14">
          {user?.email}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[#000000] font-bold text-sm md:text-lg">
          Mobile No.
        </span>
        <span className="p-3 border-2 text-[#0E0F0F] text-sm md:text-lg border-[#CFCFCF] rounded-xl w-4/5 h-14">
          {user?.phNumber ? user.phNumber : "No phone number yet"}
        </span>
      </div>
      <button
        onClick={handleClickOpen}
        className="mt-4 px-8 tracking-wider py-2 bg-blue-500 text-white rounded-md"
      >
        Edit
      </button>

      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md space-y-4 w-11/12 max-w-lg">
            <div className="flex justify-between">
              <h2 className="text-lg font-bold">Edit Profile</h2>
              <button
                type="button"
                onClick={handleClose}
                className="text-2xl text-[#0E0F0F]"
              >
                x
              </button>
            </div>
            <Formik
              initialValues={{
                fullname: user.fullname,
                phNumber: user.phNumber,
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <Field
                      type="text"
                      name="fullname"
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                    <ErrorMessage
                      name="fullname"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Mobile No.
                    </label>
                    <Field
                      type="text"
                      name="phNumber"
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                    <ErrorMessage
                      name="phNumber"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="flex justify-end space-x-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-4 py-2 bg-blue-500 text-white rounded-md"
                    >
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
