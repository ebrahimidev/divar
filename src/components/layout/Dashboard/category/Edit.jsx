import { useEffect, useRef } from "react";
import useOutsideClick from "../../../../hooks/useOutsideClick";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  listCat,
  listChid,
  updateCategory,
} from "../../../../service/CategoryService";

const schema = yup.object({
  title: yup.string().required("نام دسته‌بندی الزامی است"),
});

function Edit({ isOpenEditCategory, setIsOpenEditCategory, editData }) {
  const modalRef = useRef(null);
  useOutsideClick(modalRef, isOpenEditCategory, setIsOpenEditCategory);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const queryClient = useQueryClient();

  const { data: chidCategoryResponse } = useQuery({
    queryKey: ["getChidCategory"],
    queryFn: listChid,
  });

  const { data: subCategoryResponse } = useQuery({
    queryKey: ["getCatCategory"],
    queryFn: listCat,
  });

  const chidCategory = chidCategoryResponse?.data || [];
  const subCategories = subCategoryResponse?.data || [];

  const mutationEdit = useMutation({
    mutationFn: updateCategory,
    onSuccess: (data) => {
      toast.success("دسته‌بندی با موفقیت ویرایش شد");
      queryClient.invalidateQueries(["getListAllCategory"]);
      setIsOpenEditCategory(false);
    },
    onError: () => toast.error("خطا در ویرایش دسته‌بندی"),
  });

  useEffect(() => {
    if (editData) {
      reset({
        title: editData.title || "",
        chid: editData.chid?.toString() || "0",
        cat: editData.cat?.toString() || "",
        svg: editData.svg || "",
      });
    }
  }, [editData, reset]);

  const onSubmit = (data ) => {

    const payload = {
      ...data,
      id: editData.id,
      chid: Number(data.chid),
      cat: Number(data.cat),
    };
    console.log(payload);
    mutationEdit.mutate(payload);
  };

  return (
    <div
      ref={modalRef}
      className="h-screen left-0 fixed top-0 transition-all ease-in w-screen z-[1060] bg-[#00000066]"
    >
      <div className="flex items-center flex-col h-full w-full justify-center fixed left-0 top-0">
        <section className="w-[30.5rem] bg-white rounded-xl p-6 shadow space-y-5 max-h-[95vh] overflow-y-auto">
          <h2 className="text-lg font-bold border-b pb-2">ویرایش دسته‌بندی</h2>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {/* اسم دسته‌بندی */}
            <div>
              <label className="block text-sm font-medium mb-1">
                اسم دسته‌بندی
              </label>
              <input
                type="text"
                {...register("title")}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.title.message}
                </p>
              )}
            </div>

            {/* سرگروه مادر */}
            <div>
              <label className="block text-sm font-medium mb-1">
                سرگروه مادر
              </label>
              <select
                {...register("chid")}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="0">سرگروه اصلی</option>
                {chidCategory?.data?.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.title}
                  </option>
                ))}
              </select>
            </div>

            {/* زیرمجموعه سرگروه */}
            <div>
              <label className="block text-sm font-medium mb-1">
                زیرمجموعه سرگروه
              </label>
              <select
                {...register("cat")}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">انتخاب کنید</option>
                {subCategories.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.title}
                  </option>
                ))}
              </select>
            </div>

            {/* کد آیکون SVG */}
            <div>
              <label className="block text-sm font-medium mb-1">
                کد آیکون SVG
              </label>
              <textarea
                {...register("svg")}
                rows={3}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* دکمه‌ها */}
            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => setIsOpenEditCategory(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500"
              >
                انصراف
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                ذخیره تغییرات
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Edit;
