"use server";

import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

import { IUser } from "@/src/types";
import axiosInstance from "@/src/lib/AxiosInstance";

export const registerUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/register", userData);

    if (data.success) {
      const cookieStore = await cookies();

      cookieStore.set("accessToken", data?.data?.accessToken);
      cookieStore.set("refreshToken", data?.data?.refreshToken);
    }

    return data;
  } catch (error) {}
};

export const loginUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", userData);

    if (data.success) {
      const cookieStore = await cookies();

      cookieStore.set("accessToken", data?.data?.accessToken);
      cookieStore.set("refreshToken", data?.data?.refreshToken);
    }

    return data;
  } catch (error) {}
};

export const logOutUser = async () => {
  try {
    const cookieStore = await cookies();

    cookieStore.delete("accessToken");
    cookieStore.delete("refreshToken");
  } catch (error) {}
};

export const getCurrentUser = async () => {
  const cookieStore = await cookies(); // Await cookies()
  const accessToken = cookieStore.get("accessToken")?.value;

  let decodedToken = null;

  if (accessToken) {
    const decodedToken: IUser = jwtDecode(accessToken);

    return {
      _id: decodedToken._id,
      name: decodedToken.name,
      email: decodedToken.email,
      mobileNumber: decodedToken.mobileNumber,
      role: decodedToken.role,
      status: decodedToken.status,
      profilePhoto: decodedToken.profilePhoto,
    };
  }

  return decodedToken;
};
