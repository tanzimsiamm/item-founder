import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Tpost = {
  name: string;
  _id: string;
  title: string;
  description: string;
  images: string[]; // assuming images are URLs or file paths
  location: string;
  city: string;
  dateFound: string; // ISO date string
  status: "AVAILABLE" | "CLAIMED" | "RETURNED"; // extend based on your status enum
  isReported: boolean;
  reportCount: number;
  category: string | null;
  user: string | null; // or a User type if populated
  questions: string[]; // or a more complex type if each question is an object
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export interface IUser {
  _id: string;
  name: string;
  email: string;
  mobileNumber: string;
  role: string;
  status: string;
  profilePhoto?: string;
}

export interface IInput {
  variant?: "flat" | "bordered" | "faded" | "underlined";
  size?: "sm" | "md" | "lg";
  required?: boolean;
  type?: string;
  label: string;
  name: string;
  disabled?: boolean;
}
