import ImageGalleryUploader from "../../ui/ImageGalleryUploader";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

const shema = yup.object({
  title: yup.string().required("فیلد عنوان باید پر شود"),
  body: yup.string().required("فیلد توضیحات باید پر شود"),
  images: yup
    .array()
    .min(1, "حداقل یک عکس باید انتخاب شود")
    .max(10, "حداکثر ۱۰ عکس مجاز است"),
});

function FirstStage({ setStage, setdataAds }) {
  const [files, setFiles] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({ resolver: yupResolver(shema) });

  const onSubmit = (data) => {
    setdataAds(data);
    setStage(2);
  };

  return (
    <div>
      <div>
        <div className="relative z-[1] pb-8 bg-white">
          <div className="max-w-[1024px] mx-auto px-4 w-full ">
            <div className="flex flex-wrap -mx-2">
              <div className="mr-[25%] max-w-[50%] flex-[0_0_50%] px-2 relative w-full pt-8 ">
                <h1
                  className="m-0 py-4 text-[#383838
] font-medium text-lg leading-[1.5] "
                >
                  ثبت آگهی
                </h1>
                <div className="relative">
                  <div className="mt-4 ">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div>
                        <div className="flex items-center mt-2 whitespace-nowrap text-[rgba(0,0,0,0.56)] text-[1rem] font-normal justify-between leading[2] min-h-12 py-2 ">
                          <div className="flex items-center flex-[1_1] min-w-0">
                            <label
                              htmlFor=""
                              className="text-[rgba(0,0,0,0.87)] text-lg leading-[2] "
                            >
                              عکس آگهی *
                            </label>
                          </div>
                        </div>
                      </div>
                      <div>
                        <ImageGalleryUploader
                          files={files}
                          setFiles={setFiles}
                          setValue={setValue}
                        />
                        <div>
                          <div className="text-[rgba(0,0,0,0.56)] flex pt-1 pr-2 ">
                            <p className="flex flex-[1_1] ml-2 text-xs font-normal leading-[2] ">
                              تعداد عکس‌های انتخاب شده نباید بیشتر از ۱۰ باشد.
                            </p>
                          </div>
                        </div>
                        <p className="text-[rgba(0,0,0,0.56)] my-2 whitespace-pre-wrap text-xs font-normal leading-[2] ">
                          ویرایش عکس ها فقط تا ۳ روز پس از انتشار ممکن است.
                        </p>
                        <hr className="!my-4 bg-[#dbdbe4] border-0 h-[1px]  box-border" />
                      </div>
                      <div>
                        <div className="flex items-center mt-2 whitespace-nowrap text-[rgba(0,0,0,0.56)] text-[1rem] font-normal justify-between leading-[2] min-h-12 py-2  ">
                          <div className="flex items-center flex-[1_1] min-w-0">
                            <label
                              htmlFor=""
                              className="text-[rgba(0,0,0,0.87)] text-lg leading-[2] "
                            >
                              عنوان آگهی *
                            </label>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="mb-2 h-10 relative w-full  ">
                          <input
                            {...register("title")}
                            type="text"
                            className="px-4 h-10 leading-10 absolute bg-white border border-solid border-[rgba(0,0,0,0.24)] rounded-[4px] text-[rgba(0,0,0,0.87)] box-border text-[1rem] outline-none w-full  "
                            name=""
                            id=""
                          />
                        </div>
                        <p className="text-[rgba(0,0,0,0.56)] my-2 whitespace-pre-wrap text-xs font-normal leading-[2] ">
                          ویرایش عنوان فقط تا ۳ روز پس از انتشار آگهی ممکن است.
                        </p>
                        <hr className="!my-4 bg-[#dbdbe4] border-0 h-[1px]  box-border" />
                      </div>
                      <div>
                        <div className="flex items-center mt-2 whitespace-nowrap text-[rgba(0,0,0,0.56)] text-[1rem] font-normal justify-between leading-[2] min-h-12 py-2  ">
                          <div className="flex items-center flex-[1_1] min-w-0">
                            <label
                              htmlFor=""
                              className="text-[rgba(0,0,0,0.87)] text-lg leading-[2] "
                            >
                              توضیحات آگهی *
                            </label>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="mb-2 relative bg-white block ">
                          <textarea
                            {...register("body")}
                            className="px-2 py-4 overflow-auto border border-solid border-[rgba(0,0,0,0.24)] leading-10 rounded-[4px] text-[rgba(0,0,0,0.87)] box-border text-[1rem] outline-none w-full block resize-none z-30 "
                            id=""
                          ></textarea>
                        </div>
                      </div>
                      <div className="pt-8 flex justify-end ">
                        <button
                          onClick={() => reset()}
                          className="flex-[1_1] border border-solid border-[rgba(0,0,0,0.48)] bg-transparent text-[rgba(0,0,0,0.56)] flex items-center rounded-[4px] box-border cursor-pointer text-[1rem] font-medium  h-10 justify-center px-4 outline-none"
                        >
                          <span className="">پاک کردن اطلاعات </span>
                        </button>
                        <button
                          type="submit"
                          className="flex-[1_1] mr-4 bg-[#a62626]  text-white flex items-center rounded-[4px] box-border cursor-pointer text-[1rem] font-medium  h-10 justify-center px-4 outline-none"
                        >
                          <span className="">بعدی</span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstStage;
