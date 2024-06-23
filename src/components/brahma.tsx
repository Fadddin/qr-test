import SideBar from "./SideBar"

function App() {

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    return (
        <div className="flex justify-center items-center p-0 md:px-6 lg:px-6">
            <div className="hidden lg:block xl:block w-1/4">
                <SideBar />
            </div>
            <div className="w-full h-[100vh] my-2 rounded-lg">
                <section className="relative w-full h-screen flex justify-center items-center overflow-hidden section_shi">
                    <div className="relative z-10 mx-auto max-w-3xl flex flex-col items-center text-center">
                        <div>
                            
                        </div>
                        <div className="flex flex-row items-center text-center space-x-4">
                            <button className="bg-white text-xl rounded-full font-bold p-4">{`<`}</button>
                            <div className="bg-white rounded-xl m-2">
                                <img src="/qr_code.png" height={400} width={400} alt="" />
                            </div>
                            <button className="bg-white text-xl rounded-full font-bold p-4">{`>`}</button>
                        </div>
                        <div>

                        </div>
                    </div>
                </section>
            </div>
            <div className="hidden md:block lg:block xl:block w-1/4">
                <div className="h-[90vh] overflow-y-scroll">
                    <div className="flex flex-col justify-center items-center">
                        {array.map((arr, index) => (
                            <div key={index} className="h-40 w-40 bg-slate-200 text-white m-2 text-center rounded-md">
                                <img src="/qr_code.png" alt={String(arr)} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center items-center space-x-4 my-3">
                    <button className="rounded-md px-3 py-2 bg-slate-600 text-white">Prev</button>
                    <p className="text-lg font-semibold">1/10</p>
                    <button className="rounded-md px-3 py-2 bg-slate-600 text-white">Next</button>
                </div>
            </div>
        </div>
    )
}

export default App
