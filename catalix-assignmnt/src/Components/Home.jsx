import Sidebar from "./Sidebar"
export default  function Home(){
    return(
        <div className="grid grid-cols-10 bg-slate-600">
            <div className="cols-span-2">
               <Sidebar/>
            </div>
            {/* middle part */}
            <div className="cols-span-5">
                <div>
                  <h1>Set-up Catalix for success</h1>
                  <p>
                    Get Catalix upto date or start your transformation by following the guide below. 
                  </p>
                </div>
              <div>
                 <div>
                    2/6
                 </div>
                 <div>
                    Build your development value stream map
                 </div>
                 <button>
                    Start Building
                 </button>
               </div>
            </div>
             {/* right part */}
             <div className="cols-span-3">
                <h1>Get ready to transform</h1>
                <p>
                    Here's a video to get started.As your transformation progress, you will get freash tips and inside here.
                </p>
                <div>
                    video
                </div>
             </div>
        </div>
    )
}