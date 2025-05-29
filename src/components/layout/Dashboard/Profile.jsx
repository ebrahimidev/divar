import React, { useRef } from "react";
import useOutsideClick from "../../../hooks/useOutsideClick";
import { useMutation } from "@tanstack/react-query";
import { logoutService } from "../../../service/auth/AuthService";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

function Profile({ isOpenProfile, setIsOpenProfile }) {
  const modalRef = useRef(null);
  useOutsideClick(modalRef, isOpenProfile, setIsOpenProfile);
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: logoutService,
    onSuccess: () => {
      navigate("/");
      toast.success("با موفقیت خارج شدید");
    },
    onError: () => {
      toast.error("خطا در خارج شدن از داشبورد");
    },
  });

  const handleLogout = () => {
    mutation.mutate();
  };

  return (
    <div
      ref={modalRef}
      className="transition-all top-20 left-8 absolute bg-white shadow-lg  min-w-4 min-h-4 max-w-32 max-h-32  w-[200px] rounded-lg outline-none "
    >
      <div className="px-4 pt-4 pb-3">
        <h6 className="font-extrabold text-sm leading-6 overflow-hidden overflow-ellipsis whitespace-nowrap text-[#1C252E]">
          Jaydon Frankie
        </h6>
        <p className="font-normal text-sm leading-6 overflow-hidden overflow-ellipsis whitespace-nowrap text-[#637381]">
          demo@minimals.cc
        </p>
      </div>
      <hr className="border border-dashed border-[rgba(145,158,171,0.2)]" />
      <div className="p-2 ">
        <button
          onClick={handleLogout}
          className="flex items-center justify-center relative cursor-pointer font-bold text-sm text-[#FF5630] min-w-[64px] leading-2 w-full outline-none  "
        >
          خروج
        </button>
      </div>
    </div>
  );
}

export default Profile;
