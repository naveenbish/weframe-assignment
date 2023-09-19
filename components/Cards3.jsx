import Imagetest from "./Imageop";

const CardsThree = () => {
  return (
    <div>


      {/* Cards for To-DO */}
      <div className="">

        <div className="bg-[color:#211A75] p-3 rounded-lg my-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Imagetest />
              <div>Important</div>
            </div>
            <div><Imagetest /></div>
          </div>
          <div className="text-xs py-2 font-semibold">Create sign up sheet for holiday student/parent.</div>

          {/* To-Do Card Progress Bar  */}
          <div className="py-2">
            <div className="card-progress bg-[color:#D69E2E]">
              <div id="download" className="card-progress__bar bg-[color:#D69E2E]"></div>
            </div>
          </div>

          {/* stack profile circles  */}
          <div className="flex justify-between items-center">
            <div class="flex -space-x-4">
              <div class="w-7 h-7 border-2 border-white rounded-full dark:border-gray-800 bg-[color:#c4c4c4]"></div>
              <div class="w-7 h-7 border-2 border-white rounded-full dark:border-gray-800 bg-[color:#c4c4c4]"></div>
              <div class="w-7 h-7 border-2 border-white rounded-full dark:border-gray-800 bg-[color:#c4c4c4]"></div>
            </div>

            <div className="flex items-center text-xs gap-1 text-[color:#A2A2A4]"><Imagetest /> Due in 4 days</div>

          </div>


        </div>



      </div>


    </div>
  )
}

export default CardsThree