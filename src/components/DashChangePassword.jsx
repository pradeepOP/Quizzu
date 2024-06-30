import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useAuth } from "@/context/userContext";
import { changePasswordSchema } from "@/schemas";
import ApiRequest from "@/utils/apiRequest";
import { toast } from "react-toastify";
import { redirect } from "next/dist/server/api-utils";

const DashChangePassword = () => {
  const { user, setUser } = useAuth();

  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: changePasswordSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const response = await ApiRequest.patch(
          "/user/change-password",
          values
        );
        toast.success(response.data.message);
        resetForm();
      } catch (error) {
        toast.error(error.response.data.message);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="px-10 py-10">
      <form onSubmit={formik.handleSubmit} className="space-y-8">
        <div className="flex items-center justify-between">
          <span className="text-[#000000] font-bold text-sm md:text-lg">
            Old Password
          </span>
          <input
            type="password"
            name="currentPassword"
            placeholder="*********"
            className="p-3 border-2 text-[#0E0F0F] bg-[#F7F7F7] text-sm md:text-lg border-[#CFCFCF] rounded-xl w-3/4 h-14 placeholder:text-lg placeholder:text-[#0E0F0F]/40"
            {...formik.getFieldProps("currentPassword")}
          />
        </div>
        {formik.touched.currentPassword && formik.errors.currentPassword ? (
          <div className="text-red-500">{formik.errors.currentPassword}</div>
        ) : null}
        <div className="flex items-center justify-between">
          <span className="text-[#000000] font-bold text-sm md:text-lg">
            New Password
          </span>
          <input
            type="password"
            name="password"
            placeholder="*********"
            className="p-3 border-2 text-[#0E0F0F] bg-[#F7F7F7] text-sm md:text-lg border-[#CFCFCF] rounded-xl w-3/4 h-14 placeholder:text-lg placeholder:text-[#0E0F0F]/40"
            {...formik.getFieldProps("password")}
          />
        </div>
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-500">{formik.errors.password}</div>
        ) : null}
        <div className="flex items-center justify-between">
          <span className="text-[#000000] font-bold text-sm md:text-lg">
            Confirm Password
          </span>
          <input
            type="password"
            name="confirmPassword"
            placeholder="*********"
            className="p-3 border-2 text-[#0E0F0F] bg-[#F7F7F7] text-sm md:text-lg border-[#CFCFCF] rounded-xl w-3/4 h-14 placeholder:text-lg placeholder:text-[#0E0F0F]/40"
            {...formik.getFieldProps("confirmPassword")}
          />
        </div>
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <div className="text-red-500">{formik.errors.confirmPassword}</div>
        ) : null}
        <button
          type="submit"
          className="mt-20 py-3 px-6 rounded-xl bg-[#063173] text-white"
          disabled={formik.isSubmitting}>
          {formik.isSubmitting ? "Updating..." : "Update Password"}
        </button>
      </form>
    </div>
  );
};

export default DashChangePassword;
