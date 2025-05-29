import React, { useState } from "react";
import SVGCancel from "../../components/ui/SVG/SVGCancel";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { LoginService, RegisterService } from "../../service/auth/AuthService";
import BtnLoading from "../../components/ui/BtnLoading";

const loginSchema = yup.object({
  email: yup.string().email("ایمیل معتبر نیست").required("ایمیل الزامی است"),
  password: yup.string().required("رمز عبور الزامی است"),
});

const registerSchema = yup.object({
  name: yup.string().required("نام الزامی است"),
  email: yup.string().email("ایمیل معتبر نیست").required("ایمیل الزامی است"),
  password: yup.string().min(6).required("رمز عبور الزامی است"),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "رمز عبور مطابقت ندارد")
    .required("تأیید رمز عبور الزامی است"),
});

function AuthModal({ setIsOpenLogin, setisLoggedIn , initialMode = "login" }) {
  const [mode, setMode] = useState(initialMode); // 'login' یا 'register'
  const [loading, setLoading] = useState(false);
  const switchMode = () => {
    setMode((prev) => (prev === "login" ? "register" : "login"));
  };

  const mutationlogin = useMutation({
    mutationFn: LoginService,
  });

  const mutationRegister = useMutation({
    mutationFn: RegisterService,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(mode === "login" ? loginSchema : registerSchema),
  });

  const onSubmitLogin = async (data) => {
    setLoading(true);
    try {
      mutationlogin.mutate(data, {
        onSuccess: () => {
          toast.success("با موفقیت وارد شدید!");
          localStorage.setItem("isLoggedIn", "true");
          setIsLoggedIn(true);
          setIsOpenLogin(false);
          setLoading(false);
        },
        onError: (error) => {
          toast.error("خطا در ورود");
          setLoading(false);
          console.error(error);
        },
      });
    } catch (error) {
      toast.error("خطا در ورود");
      setLoading(false);
    }
  };

  const onSubmitRegister = async (data) => {
    setLoading(true);
    try {
      mutationRegister.mutate(data, {
        onSuccess: () => {
          toast.success("با موفقیت ثبت نام شد!");
          localStorage.setItem("isLoggedIn", "true");
          setIsLoggedIn(true);
          setIsOpenLogin(false);
          setLoading(false);
        },
        onError: (error) => {
          toast.error("خطا در ثبت‌نام");
          setLoading(false);
          console.error(error);
        },
      });
    } catch (error) {
      toast.error("خطا در ثبت نام");
      setLoading(false);
    }
  };

  return (
    <section className="w-[488px] min-h-[232px] max-h-[656px] bg-white rounded-[4px] flex flex-col relative shadow-[0_1px_2px_0_rgba(0,0,0,0.12)]">
      <header className="shadow-[0_1px_2px_0_rgba(0,0,0,0.12)] flex flex-col py-2 px-6">
        <div className="items-center flex justify-between min-h-14">
          <p className="text-[rgba(0,0,0,0.87)] text-[1rem] font-normal m-0">
            {mode === "login" ? "ورود به حساب کاربری" : "ثبت نام"}
          </p>
          <button
            onClick={() => setIsOpenLogin(false)}
            className="-ml-2 rounded-[50%] h-10 min-w-auto p-0 w-10 flex items-center cursor-pointer justify-center outline-none relative"
          >
            <SVGCancel width="19px" height="19px" fill="rgba(0,0,0,0.56)" />
          </button>
        </div>
      </header>

      <div className="mb-[72px] pt-2 px-6 pb-6">
        {mode === "login" ? (
          <LoginForm
            handleSubmit={handleSubmit}
            onSubmitLogin={onSubmitLogin}
            register={register}
            errors={errors}
            switchMode={switchMode}
          />
        ) : (
          <RegisterForm
            handleSubmit={handleSubmit}
            onSubmitRegister={onSubmitRegister}
            register={register}
            errors={errors}
            switchMode={switchMode}
          />
        )}
      </div>

      <footer className="bg-white absolute bottom-0 w-full p-4 shadow-[0_-1px_2px_0_rgba(0,0,0,0.12)]">
        <div className="flex justify-end">
          {loading === true ? (
            <BtnLoading />
          ) : (
            <button
              type="submit"
              form={mode === "login" ? "login-form" : "register-form"}
              className="flex-[0_0_auto] bg-[#a62626] items-center rounded-[4px] text-white cursor-pointer flex h-10 justify-center text-[1rem] font-medium outline-none relative px-4 min-w-[6rem]"
            >
              <span className="overflow-hidden">تایید</span>
            </button>
          )}
        </div>
      </footer>
    </section>
  );
}

// کامپوننت‌های فرم‌ها به صورت جداگانه
const LoginForm = ({
  handleSubmit,
  onSubmitLogin,
  register,
  errors,
  switchMode,
}) => (
  <form id="login-form" onSubmit={handleSubmit(onSubmitLogin)}>
    <div className="space-y-3 relative w-full overflow-y-auto">
      {/* فیلدهای ورود */}
      <div className="flex flex-col pt-4">
        <p className="text-[1rem] leading-8 font-medium">ایمیل</p>
        <input
          type="email"
          placeholder="ایمیل خود را وارد کنید"
          className="pl-[57px] pr-4 h-10 leading-10 w-full outline-none text-[1rem] text-[rgba(0,0,0,0.87)] rounded-[4px] border border-solid border-[rgba(0,0,0,0.24)] bg-white"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div className="flex flex-col pt-4">
        <p className="text-[1rem] leading-8 font-medium">رمز عبور</p>
        <input
          type="password"
          placeholder="رمز عبور خود را وارد کنید"
          className="pl-[57px] pr-4 h-10 leading-10 w-full outline-none text-[1rem] text-[rgba(0,0,0,0.87)] rounded-[4px] border border-solid border-[rgba(0,0,0,0.24)] bg-white"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>
      <p className="mt-8 text-[rgba(0,0,0,0.56)] text-sm font-normal leading-[2]">
        <button
          type="button"
          onClick={switchMode}
          className="!text-[#a62626] cursor-pointer"
        >
          حساب کاربری ندارید؟
        </button>
      </p>
    </div>
  </form>
);

const RegisterForm = ({
  handleSubmit,
  onSubmitRegister,
  register,
  errors,
  switchMode,
}) => (
  <form id="register-form" onSubmit={handleSubmit(onSubmitRegister)}>
    <div className="space-y-3 relative w-full overflow-y-auto">
      {/* فیلدهای ثبت نام */}
      <div className="flex flex-col pt-4">
        <p className="text-[1rem] leading-8 font-medium">نام کاربری</p>
        <input
          type="text"
          placeholder="نام کاربری"
          className="pl-[57px] pr-4 h-10 leading-10 w-full outline-none text-[1rem] text-[rgba(0,0,0,0.87)] rounded-[4px] border border-solid border-[rgba(0,0,0,0.24)] bg-white"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>
      <div className="flex flex-col pt-4">
        <p className="text-[1rem] leading-8 font-medium">ایمیل</p>
        <input
          type="email"
          placeholder="ایمیل خود را وارد کنید"
          className="pl-[57px] pr-4 h-10 leading-10 w-full outline-none text-[1rem] text-[rgba(0,0,0,0.87)] rounded-[4px] border border-solid border-[rgba(0,0,0,0.24)] bg-white"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div className="flex flex-col pt-4">
        <p className="text-[1rem] leading-8 font-medium">رمز عبور</p>
        <input
          type="password"
          placeholder="ایمیل خود را وارد کنید"
          className="pl-[57px] pr-4 h-10 leading-10 w-full outline-none text-[1rem] text-[rgba(0,0,0,0.87)] rounded-[4px] border border-solid border-[rgba(0,0,0,0.24)] bg-white"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>
      <div className="flex flex-col pt-4">
        <p className="text-[1rem] leading-8 font-medium">تکرار رمز عبور</p>
        <input
          type="password"
          placeholder="رمز عبور را دوباره وارد کنید"
          className="pl-[57px] pr-4 h-10 leading-10 w-full outline-none text-[1rem] text-[rgba(0,0,0,0.87)] rounded-[4px] border border-solid border-[rgba(0,0,0,0.24)] bg-white"
          {...register("password_confirmation")}
        />
        {errors.password_confirmation && (
          <p className="text-red-500 text-sm">
            {errors.password_confirmation.message}
          </p>
        )}
      </div>
      <p className="mt-8 text-[rgba(0,0,0,0.56)] text-sm font-normal leading-[2]">
        <button
          type="button"
          onClick={switchMode}
          className="!text-[#a62626] cursor-pointer"
        >
          حساب کاربری دارید؟
        </button>
      </p>
    </div>
  </form>
);

export default AuthModal;
