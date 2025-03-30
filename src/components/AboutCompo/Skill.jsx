import React from "react";

function Skill({sub ,mark, progress}){
  return (
    <>
      <div className="w-full space-y-5 mb-4">
      <div>
      <div className="flex items-center justify-between gap-4 mb-2">
        <h6 className="block font-sans font-semibold text-blue-gray mb-2 text-lg">
          {sub}
        </h6>
        <h6 className="block font-sans font-semibold text-blue-gray-900">
          {mark}
        </h6>
      </div>
      <div className="flex-start flex h-3 w-full overflow-hidden rounded-full bg-slate-400 font-sans text-xs font-medium">
        <div style={{ width: `${progress}%` }} 
          className={`flex items-center justify-center h-full overflow-hidden text-white break-all bg-green-700 rounded-full`}
        />
      </div>
    </div>



      {/* <div>
          <div class="flex items-center justify-between gap-4 mb-2">
            <h6 class="block font-sans font-semibold text-blue-gray mb-2 text-lg ">
              {sub}
            </h6>
            <h6 class="block font-sans font-semibold text-blue-gray-900">
              {mark}
            </h6>
          </div>
          <div class="flex-start flex h-3 w-full overflow-hidden rounded-full bg-slate-400 font-sans text-xs font-medium">
            <div class="flex items-center justify-center w-11/12 h-full overflow-hidden text-white break-all bg-green-700 rounded-full"></div>
          </div>
        </div> */}
         {/* the wholw code of skills */}
        {/* <div>
          <div class="flex items-center justify-between">
            <h6 class="block font-sans font-semibold text-blue-gray mb-2 text-lg ">
              HTML5
            </h6>
            <h6 class="block font-sans font-semibold text-blue-gray-900">
              90%
            </h6>
          </div>
          <div class="flex-start flex h-3 w-full overflow-hidden rounded-full bg-slate-400 font-sans text-xs font-medium">
            <div class="flex items-center justify-center w-11/12 h-full overflow-hidden text-white break-all bg-green-700 rounded-full"></div>
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between gap-4 mb-2">
            <h6 class="block font-sans font-semibold text-blue-gray text-lg ">
              CSS
            </h6>
            <h6 class="block font-sans font-semibold text-blue-gray-900">
              85%
            </h6>
          </div>
          <div class="flex-start flex h-3 w-full overflow-hidden rounded-full bg-slate-400 font-sans text-xs font-medium">
            <div class="flex items-center justify-center w-5/6 h-full overflow-hidden text-white break-all bg-green-700 rounded-full"></div>
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between gap-4 mb-2">
            <h6 class="block font-sans font-semibold text-blue-gray text-lg">
              Javascript
            </h6>
            <h6 class="block font-sans font-semibold text-blue-gray-900">
              70%
            </h6>
          </div>
          <div class="flex-start flex h-3 w-full overflow-hidden rounded-full bg-slate-400 font-sans text-xs font-medium">
            <div class="flex items-center justify-center w-3/5 h-full overflow-hidden text-white break-all bg-green-700 rounded-full"></div>
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between gap-4 mb-2 md:mb-4">
            <h6 class="block font-sans font-semibold text-blue-gray text-lg">
              ReactJS
            </h6>
            <h6 class="block font-sans font-semibold text-blue-gray-900">
              70%
            </h6>
          </div>
          <div class="flex-start flex h-3 w-full overflow-hidden rounded-full bg-slate-400 font-sans text-xs font-medium">
            <div class="flex items-center justify-center w-3/5 h-full overflow-hidden text-white break-all bg-green-700 rounded-full"></div>
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between gap-4 mb-2 md:mb-4">
            <h6 class="block font-sans font-semibold text-blue-gray text-lg">
              Java
            </h6>
            <h6 class="block font-sans font-semibold text-blue-gray-900">
              80%
            </h6>
          </div>
          <div class="flex-start flex h-3 w-full overflow-hidden rounded-full bg-slate-400 font-sans text-xs font-medium">
            <div class="flex items-center justify-center w-9/12 h-full overflow-hidden text-white break-all bg-green-700 rounded-full"></div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Skill;
