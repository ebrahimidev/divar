import React, { useEffect, useState } from "react";
import SVGSearch from "../ui/SVG/SVGSearch";
import SVGLeftArrow from "../ui/SVG/SVGLeftArrow";
import axios from "axios";
import NavProvince from "../layout/NavProvince";
import NavCity from "../layout/NavCity";

function ChoseCity({ setOpenCity }) {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openAllCity, setOpenAllCity] = useState(false);
  const [selectCity, setSelectCity] = useState('');


  useEffect(() => {
    async function fetchCities() {
      try {
        const response = await axios.get(
          "https://iranplacesapi.liara.run/api/provinces"
        );

        setCities(response.data);
      } catch (err) {
        setError("خطا در دریافت لیست استان ها");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchCities();
  }, []);
// console.log(selectCity);
  useEffect(() => {
    async function fetchCity() {
      try {
        const response = await axios.get(
          `https://iranplacesapi.liara.run/api/provinces/id/${selectCity}/cities`
        );

        setCity(response.data);
      } catch (err) {
        setError("خطا در دریافت لیست شهرها");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    if(selectCity) {fetchCity();};
  }, [selectCity]);

  if (loading) return <div>در حال دریافت اطلاعات...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div className="h-screen left-0 fixed top-0 transition-all ease-in w-screen z-[1060] bg-[#00000066] ">
      <div className="flex items-center flex-col h-full w-full justify-center fixed left-0 top-0 ">
        <section className="w-[30.5rem] h-[41rem] max-h-[656px] min-h-[232px] bg-white rounded-[4px] relative flex column flex-col shadow ">
          <header className="px-8 pt-8 pb-4 flex flex-col ">
            <div className="text-[rgba(0,0,0 , 0.87)] text-xl font-medium mb-2 -mt-1.5 ">
              انتخاب شهر
            </div>
            <button
              className="absolute left-8 top-8  scale-3d transition-none flex items-center rounded-xl contain-content cursor-pointer h-6 mr-auto min-h-4 min-w-4 px-1
             hover:bg-[rgba(166,38,38,0.08)]"
            >
              <span
                className="max-w-[6rem] transition-all text-[#a63636]
                text-xs "
              >
                حذف همه
              </span>
            </button>
            <div className="mt-2 h-10 relative w-full flex items-center  ">
              <input
                type="text"
                className="px-10 h-10 absolute bg-white border border-[rgba(0,0,0,0.24)] text-[rgba(0,0,0,0.87)] text-base outline-none w-full  "
                placeholder="جستجو در شهرها"
              />
              <div className="h-10 z-10 flex items-center  px-2 ">
                <SVGSearch
                  width="18px"
                  height="18px"
                  stroke="rgba(0, 0, 0, 0.32)"
                  className="z-10 "
                />
              </div>
            </div>
          </header>
          {openAllCity === false ? (
            <NavProvince
              cities={cities}
              onclick={() => setOpenAllCity(true)}
              setSelectCity={setSelectCity}
            />
          ) : (
            <NavCity city={city} onclick={() => setOpenAllCity(false)} />
          )}

          <footer className="py-3 px-4 bg-white bottom-0 absolute w-full ">
            <div className="w-full flex justify-end ">
              <button
                onClick={setOpenCity}
                className="flex-1 border border-solid border-[rgba(0,0,0,0.48)] bg-transparent text-[rgba(0,0,0,0.56)] flex items-center rounded-[4px] cursor-pointer h-10 min-w-24 px-4 relative transition-all  justify-center "
              >
                <span className="overflow-hidden text-ellipsis whitespace-nowrap ">
                  انصراف
                </span>
              </button>
              <button className="flex-1 mr-4  border border-[#a62626] bg-[#a62626] text-white flex items-center rounded-[4px] cursor-pointer h-10 min-w-24 px-4 relative transition-all  justify-center">
                <span className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold">
                  تایید
                </span>
              </button>
            </div>
          </footer>
        </section>
      </div>
    </div>
  );
}

export default ChoseCity;
