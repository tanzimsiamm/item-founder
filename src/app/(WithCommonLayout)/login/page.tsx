"use client";

import { Link } from "@heroui/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

import LoginValidationSchema from "../../schemas/login.schema";

import Loading from "@/src/components/ui/Loading";
import { useUserLogin } from "@/src/hook/auth.hook";
import FxInput from "@/src/components/form/FxInput";
import FxForm from "@/src/components/form/FxForm";
import { useUser } from "@/src/context/user.provider";

const LoginPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { setIsLoading: userLoading } = useUser();
  const redirectUrl = searchParams.get("redirect");

  const { mutate: handleUserLogin, isPending, isSuccess } = useUserLogin();

  const onSubmit: SubmitHandler<FieldValues> = (data: any) => {
    handleUserLogin(data);
    userLoading(true);
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      if (redirectUrl) {
        router.push(redirectUrl);
      } else {
        router.push("/");
      }
    }
  }, [isPending, isSuccess]);

  return (
    <>
      {isPending && <Loading />}
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="w-full max-w-md p-8 rounded-2xl shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
            Login to your account
          </h2>

          <FxForm
            resolver={zodResolver(LoginValidationSchema)}
            onSubmit={onSubmit}
          >
            <div className="space-y-5">
              <FxInput label="Email" name="email" type="email" />
              <FxInput label="Password" name="password" type="password" />

              <button
                className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
                type="submit"
              >
                Login
              </button>
            </div>
          </FxForm>

          <p className="mt-6 text-sm text-center text-gray-600 dark:text-gray-300">
            Don&apos;t have an account?{" "}
            <Link
              className="text-blue-600 hover:underline dark:text-blue-400"
              href="/register"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
