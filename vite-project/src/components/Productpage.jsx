import React from "react";
import { Link, useNavigate } from "react-router-dom";
import productData from "../../data.json";

export default function ProductPage() {

  const navigate = useNavigate()

  // const goToCart = () => {
  //   navigate("https://www.charlestyrwhitt.com/intl/non-iron-twill-shirt---ivory-white/FON0409NWH.html?cgid=shirts-new-season&pf=browse#cm_sp=HP-Hero_ShirtsNewSeason&cgid=shirts-new-season&start=1")
  // }

  return (
    <div>
      <div className="flex w-full px-4 mb-4">
        <p className="flex flex-col bg-gray-100 justify-center text-center items-center gap-2">
          <span className="font-semibold text-3xl"> NEW SHIRTS</span>
          <span className="px-32 text-xs">
            From lightweight poplin to crease-resistant twill, we have a new
            shirt to complete every outfit. Our latest shirt styles come with
            the all-important touches – cue immaculate tailoring, refined
            fabrics, and non-iron finishes. Discover versatile shades to
            complement your favourite suits, or add a splash of colour with a
            classic pattern.
          </span>
        </p>
        <img
          width={"50%"}
          src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw83173592/merchAssets/SS23/TIBs/febshirts-tib-xbr2.jpg"
          alt="hero banner"
        />
      </div>
      <div className="flex gap-4 border border-dashed border-gray-500 mx-8 py-4 px-6 rounded-md bg-slate-100">
        <div className="flex gap-2 py-2">
          <img
            width={30}
            height={20}
            src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/mb-tracker/shirt-blue-inactive.png"
            alt=""
          />
          <img
            width={30}
            height={20}
            src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/mb-tracker/shirt-blue-inactive.png"
            alt=""
          />
          <img
            width={30}
            height={20}
            src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/mb-tracker/shirt-blue-inactive.png"
            alt=""
          />
          <img
            height={20}
            width={30}
            src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/mb-tracker/shirt-blue-inactive.png"
            alt=""
          />
        </div>
        <div>
          <span className="block text-sm">
            <b>SHIRTS & POLOS MULTIBUY</b> | SAVE UP TO 20%
          </span>
          <span className="text-xs">
            Unlock multibuy savings when you buy <b>2 or more</b>
          </span>
        </div>
      </div>

      {/* product list */}
      <div className="flex justify-between mx-8 mt-5">
        <div className="w-[25%]">
          {/* filters */}
          <div className="mb-3">
            <p className="border-y border-black font-semibold py-4 pl-3 bg-slate-200">
              SHIRT FIT
            </p>

            <p className="flex items-center gap-2 pl-3 py-3">
              <input type="checkbox" className="w-5 h-5" />{" "}
              <span>CLASSIC FIT</span>
            </p>
            <p className="flex items-center gap-2 pl-3 py-3">
              <input type="checkbox" className="w-5 h-5" />{" "}
              <span>CLASSIC FIT</span>
            </p>
            <p className="flex items-center gap-2 pl-3 py-3">
              <input type="checkbox" className="w-5 h-5" />{" "}
              <span>CLASSIC FIT</span>
            </p>
          </div>
          <div className="mb-3">
            <p className="border-y border-black font-semibold py-4 pl-3 bg-slate-200">
              SHIRT FIT
            </p>

            <p className="flex items-center gap-2 pl-3 py-3">
              <input type="checkbox" className="w-5 h-5" />{" "}
              <span>CLASSIC FIT</span>
            </p>
            <p className="flex items-center gap-2 pl-3 py-3">
              <input type="checkbox" className="w-5 h-5" />{" "}
              <span>CLASSIC FIT</span>
            </p>
            <p className="flex items-center gap-2 pl-3 py-3">
              <input type="checkbox" className="w-5 h-5" />{" "}
              <span>CLASSIC FIT</span>
            </p>
          </div>
          <div className="mb-3">
            <p className="border-y border-black font-semibold py-4 pl-3 bg-slate-200">
              CASUAL SHIRT SIZE
            </p>

            <p className="flex items-center gap-2 pl-3 py-3">
              <input type="checkbox" className="w-5 h-5" />{" "}
              <span>CLASSIC FIT</span>
            </p>
            <p className="flex items-center gap-2 pl-3 py-3">
              <input type="checkbox" className="w-5 h-5" />{" "}
              <span>CLASSIC FIT</span>
            </p>
            <p className="flex items-center gap-2 pl-3 py-3">
              <input type="checkbox" className="w-5 h-5" />{" "}
              <span>CLASSIC FIT</span>
            </p>
          </div>
        </div>
        <div className="w-[70%]">
          {/* pagination here */}
          <div className="grid grid-cols-4 gap-4">
            {productData.map((el, index) => (
             <Link to="https://www.charlestyrwhitt.com/intl/non-iron-twill-shirt---ivory-white/FON0409NWH.html?cgid=shirts-new-season&pf=browse#cm_sp=HP-Hero_ShirtsNewSeason&cgid=shirts-new-season&start=1"><div  key={index} className="mb-6">
                <p className="bg-slate-800 text-white text-center py-1.5 text-xs">
                  NEW COLOR
                </p>
                <img src={el.img} alt="shirts" />
                <p className="text-gray-700 my-2">{el.type}</p>
                <p className="font-semibold">{el.price}</p>
                <p className="text-xs text-gray-500">BUY 2 SHIRTS SAVE 10%</p>
                <p className="text-xs text-gray-500">BUY 3 SHIRTS SAVE 15%</p>
                <p className="text-xs text-gray-500">BUY 4 SHIRTS SAVE 20%</p>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
