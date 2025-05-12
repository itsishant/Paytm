import { useNavigate } from "react-router-dom"

export const AppBar = () => {
    const navigate = useNavigate();

    

    return <div className="shadow-xl border-1 rounded-xl h-14 flex justify-between m-12">
        <div className="flex flex-col justify-center h-full ml-4 font-semibold">
            ShazorPay
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-4">
             
            </div>
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    U
                </div>
            </div>
            <div className="pt-1.5">
                <button
                onClick={() => {
                    setTimeout(() => {
      navigate("/");
    }, 500);
                }} type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:bg-black dark:text-gray-400 dark:border-white dark:hover:text-white dark:hover:bg-gray-950">Logout</button>
            </div>
        </div>
    </div>
}