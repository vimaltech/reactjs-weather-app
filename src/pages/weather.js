import React from 'react';

const Weather = () => {
  return (
    <>
      {/* <div classNam="m2">
        <p>test page</p>
      </div> */}

      <div className="m-8">
        <div className="component flex">
          <div className="w-full rounded bg-gray-100 relative p-8">
            
          <div className="flex border-b">
              <div className="flex ">
                <div>
                  <div className="font-bold">Weather Watch</div>
                  <div className="mt-1 mb-1 text-xs text-gray-500">Posted 5 Days Ago</div>
                </div>
              </div>
          </div>

            <div className="flex justify-between">
              <div className="flex">
                <div>
                  <div className="font-bold">Location</div>
                  <div className="mt-1 text-xs"><input type="text" /></div>
                </div>
              </div>
              <div className="flex">
                <div>
                  <div class="h-12 w-12">Units</div>
                  <div className="mt-1 text-xs">Celsius</div>
                </div>
                <div className="text-yellow-400 flex items-center"><span className="text-xl font-bold ml-2">4.7</span></div>
              </div>
            </div>

            <div className="my-6"></div>
            <div className="text-sm">A Review card written completely with utlities from Tailwind CSS. This is just some filler text to make the card look populated. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat !</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Weather;