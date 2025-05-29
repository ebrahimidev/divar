import { useForm } from "react-hook-form";
import Header from "../Header";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  QueryClient,
  queryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  AddCategory,
  listAll,
  listCat,
  listChid,
  listdelete,
} from "../../../../service/CategoryService";
import { toast } from "react-toastify";
import { useEffect, useRef, useState } from "react";
import Edit from "./Edit";

const schema = yup.object({
  // title:yup.string().min(2).required('فیلد اسم سرگروه باید پر شود!'),
});
function Category() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const mutation = useMutation({
    mutationFn: AddCategory,
  });

  const mutationDelete = useMutation({
    mutationFn: listdelete,
  });
  const qureyClient = useQueryClient();
  const handleDelete = (id) => {
    mutationDelete.mutate(id, {
      onSuccess: (data) => {
        toast.success(data.message);
        qureyClient.invalidateQueries(["getListAllCategory"]);
      },
      onError: () => {
        toast.error("خطا در حذف");
      },
    });
  };

  const { data: list } = useQuery({
    queryKey: ["getListAllCategory"],
    queryFn: listAll,
  });

  const { data: chidCategoryResponse } = useQuery({
    queryKey: ["getChidCategory"],
    queryFn: listChid,
  });

  const {
    data: subCategory,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["getCatCategory"],
    queryFn: listCat,
  });
  const [catInput, setCatInput] = useState("");
  const [filteredCats, setFilteredCats] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isOpenEditCategory, setIsOpenEditCategory] = useState(false);
  const [editData, setEditData] = useState(null);
  const dropdownRef = useRef(null);
  const subCategories = subCategory?.data || [];
  useEffect(() => {
    const sub = watch("cat");
    const selected = subCategories?.data?.find((c) => c.title === sub);
    if (selected && typeof sub === "string") {
      setValue("cat", selected.id);
    }
  }, [watch("cat")]);
  // به جای watch مستقیم "cat"، از catInput استفاده می‌کنیم
  useEffect(() => {
    // فیلتر زیرمجموعه‌ها براساس ورودی کاربر
    if (catInput.trim() === "") {
      setFilteredCats([]);
      setShowDropdown(false);
      setValue("cat", ""); // پاک کردن مقدار فرم وقتی چیزی تایپ نشده
      return;
    }

    const filtered = subCategories.filter((item) =>
      item.title.toLowerCase().includes(catInput.toLowerCase())
    );
    setFilteredCats(filtered);
    setShowDropdown(filtered.length > 0);
  }, [catInput, subCategories, setValue]);
  // وقتی یک آیتم انتخاب می‌شود:
  const handleSelectCat = (item) => {
    setCatInput(item.title);
    setValue("cat", item.id); // مقدار آی‌دی رو به فرم ثبت می‌کنیم
    setShowDropdown(false);
  };
  // کلیک بیرون از لیست برای بستن دراپ‌داون
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  // اگر لازم داری مقدار اولیه فرم رو به input بدی:
  useEffect(() => {
    const selectedCat = subCategories.find(
      (cat) => cat.id === Number(watch("cat"))
    );
    if (selectedCat) {
      setCatInput(selectedCat.title);
    }
  }, [subCategories, watch]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const chidCategory = chidCategoryResponse?.data || [];
  const onSubmit = async (data) => {
    data.chid = Number(data.chid);
    data.cat = Number(data.cat);
    console.log(data);

    mutation.mutate(data, {
      onSuccess: (data) => {
        console.log(data);
        toast.success(data.message);
      },
      onError: (data) => {
        toast.success(data.message);
      },
    });
  };
  return (
    <>
      <Header>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* فرم افزودن دسته‌بندی */}
          <div className="bg-white p-6 rounded-xl shadow-sm  space-y-5 order-2 lg:order-1">
            <h2 className="text-lg  font-bold mb-2 border-b border-solid border-[rgba(0,0,0,0.09)] pb-2">
              افزودن دسته‌بندی
            </h2>
            <form className="space-y-4 mt-3" onSubmit={handleSubmit(onSubmit)}>
              {/* اسم دسته‌بندی */}
              <div>
                <label className="block text-sm font-medium text-right text-gray-700 mb-1">
                  اسم دسته‌بندی
                </label>
                <input
                  type="text"
                  {...register("title")}
                  placeholder="مثلاً: الکترونیکی"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* سرگروه مادر */}
              <div>
                <label className="block text-sm font-medium text-right text-gray-700 mb-1">
                  سرگروه مادر
                </label>
                <select
                  {...register("chid")}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value={""}>انتخاب کنید</option>
                  <option value={"0"}>سرگروه اصلی</option>
                  {Array.isArray(chidCategory?.data) &&
                    chidCategory.data.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.title}
                      </option>
                    ))}
                </select>
              </div>

              {/* زیرمجموعه سرگروه */}
              <div className="relative" ref={dropdownRef}>
                <label className="block text-sm font-medium text-right text-gray-700 mb-1">
                  زیرمجموعه سرگروه
                </label>
                <input
                  type="text"
                  value={catInput}
                  onChange={(e) => {
                    setCatInput(e.target.value);
                    setValue("cat", ""); // وقتی کاربر تایپ می‌کند، مقدار انتخاب شده را پاک می‌کنیم تا فقط زمانی که انتخاب کرد مقدار ست شود
                  }}
                  onFocus={() => {
                    if (filteredCats.length > 0) setShowDropdown(true);
                  }}
                  placeholder="جستجو و انتخاب کنید"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  autoComplete="off"
                />
                {showDropdown && (
                  <ul className="absolute z-20 w-full bg-white border border-gray-300 rounded-lg max-h-40 overflow-auto mt-1 shadow-lg">
                    {filteredCats.map((item) => (
                      <li
                        key={item.id}
                        className="px-4 py-2 cursor-pointer hover:bg-blue-100"
                        onClick={() => handleSelectCat(item)}
                      >
                        {item.title}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* آیکون SVG */}
              <div>
                <label className="block text-sm font-medium text-right text-gray-700 mb-1">
                  کد SVG آیکون
                </label>
                <textarea
                  rows="3"
                  {...register("svg")}
                  placeholder="<svg>...</svg>"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* دکمه ارسال */}
              <div className="text-left">
                <button
                  type="submit"
                  className="bg-blue-600 text-white font-bold px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  ثبت دسته‌بندی
                </button>
              </div>
            </form>
          </div>

          {/* جدول دسته‌بندی‌ها */}
          <div className="bg-white p-6 rounded-xl shadow-sm  order-1 lg:order-2">
            <h2 className="text-lg font-bold mb-4 border-b pb-2">
              لیست دسته‌بندی‌ها
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-right text-gray-700">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-4">#</th>
                    <th className="py-2 px-4">نام</th>
                    <th className="py-2 px-4">مادر</th>
                    <th className="py-2 px-4">سرگروه</th>
                    <th className="py-2 px-4 text-center">عملیات</th>
                  </tr>
                </thead>
                <tbody>
                  {/* نمونه سطر */}
                  {list ? (
                    list?.data?.map((item, index) => (
                      <tr key={item.id} className="border-b">
                        <td className="py-2 px-4">{index + 1}</td>
                        <td className="py-2 px-4">{item.title}</td>
                        <td className="py-2 px-4">
                          {item.chid === 0
                            ? "سرگروه اصلی"
                            : chidCategory.data.find((f) => f.id === item.chid)
                                ?.title || "نامشخص"}
                        </td>
                        <td className="py-2 px-4">
                          {item.cat === null
                            ? "ندارد"
                            : subCategories.find((c) => c.id === item.cat)
                                ?.title}
                        </td>
                        <td className="py-2 px-4 flex justify-center items-center gap-2">
                          <button
                            onClick={() =>
                            {
                              setEditData(item);
                              setIsOpenEditCategory(!isOpenEditCategory);
                            }
                            }
                            className="text-blue-500 hover:text-blue-700 cursor-pointer"
                          >
                            <FiEdit2 size={18} />
                          </button>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="text-red-500 hover:text-red-700 cursor-pointer"
                          >
                            <FiTrash2 size={18} />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <p>لیست دسته بندی خالی است</p>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Header>
      {isOpenEditCategory && (
        <Edit
          isOpenEditCategory={isOpenEditCategory}
          setIsOpenEditCategory={setIsOpenEditCategory}
          editData={editData}
        />
      )}
    </>
  );
}

export default Category;
