import { useEffect, useState } from "react";
import QrCode from "qrcode";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineNavigateNext } from "react-icons/md";
import { BsQrCodeScan } from "react-icons/bs";
import { IoShareOutline } from "react-icons/io5";
import { IoDownloadOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaBriefcaseMedical } from "react-icons/fa";
import { IoPawSharp } from "react-icons/io5";
import { GiPlantsAndAnimals } from "react-icons/gi";
import { IoIosAdd } from "react-icons/io";

function App() {

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const [qr, setQr] = useState<string>("");

    const generateCode = async () => {
        try {
            const link = `some data`;
            const qre = await QrCode.toDataURL(link, { width: 200, margin: 2 });
            setQr(qre);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        generateCode();
    }, []);

    return (
        <div className="flex justify-center">
            <div className="flex flex-row w-full md:w-[90%] lg:w-[80%] md:space-x-4 lg:space-x-4">
                <div className="basis-1/4 hidden lg:block xl:block">
                    <>
                        <div className="sm:justify-start flex flex-wrap justify-center lg:border-r-2 lg:py-[4rem] lg:pr-4 lg:border-r-slate-400 mt-20">
                            <div className="w-full flex justify-center pt-4">
                                <div className="w-[100%] text-white">
                                    <div className="flex flex-row font-Kanit items-center w-full border-2 border-slate-300 rounded-lg">
                                        <div className="basis-1/7 pl-2 sm:py-3 lg:py-1">
                                            <CgProfile className="w-[1.5rem] h-[1.5rem] text-black" />
                                        </div>
                                        <div className="basis-5/7 flex justify-start pl-3 w-full font-Kanit text-[1.3rem] font-bold text-black py-3">
                                            Individual
                                        </div>
                                        <button className="basis-1/7 bg-slate-100 flex justify-center px-3 py-3">
                                            <IoIosAdd className="w-[2rem] h-[2rem] hover:cursor-pointer text-black" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Botany */}
                            <div className="w-full flex justify-center pt-4">
                                <div className="w-[100%] text-white">
                                    <div className="flex flex-row font-Kanit items-center w-full border-2 border-slate-300 rounded-lg">
                                        <div className="basis-1/7 pl-2 py-3">
                                            <GiPlantsAndAnimals className="w-[1.5rem] h-[1.5rem] text-black" />
                                        </div>
                                        <div className="basis-5/7 flex justify-start pl-3 w-full font-Kanit text-[1.5rem] font-bold text-black py-3">
                                            Botany
                                        </div>
                                        <button className="basis-1/7 bg-slate-100 flex justify-center px-3 py-3">
                                            <IoIosAdd className="w-[2rem] h-[2rem] hover:cursor-pointer text-black" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Medical */}
                            <div className="w-full flex justify-center pt-4">
                                <div className="w-[100%] text-white">
                                    <div className="flex flex-row font-Kanit items-center w-full border-2 border-slate-300 rounded-lg">
                                        <div className="basis-1/7 pl-2 py-3">
                                            <FaBriefcaseMedical className="w-[1.5rem] h-[1.5rem] text-black" />
                                        </div>
                                        <div className="basis-5/7 flex justify-start pl-3 w-full font-Kanit text-[1.5rem] font-bold text-black py-3">
                                            Medical
                                        </div>
                                        <button className="basis-1/7 bg-slate-100 flex justify-center px-3 py-3">
                                            <IoIosAdd className="w-[2rem] h-[2rem] hover:cursor-pointer text-black" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Creator */}
                            <div className="w-full flex justify-center pt-4">
                                <div className="w-[100%] text-white">
                                    <div className="flex flex-row font-Kanit items-center w-full border-2 border-slate-300 rounded-lg">
                                        <div className="basis-1/7 pl-2 py-3">
                                            <MdOutlineSubscriptions className="w-[1.5rem] h-[1.5rem] text-black" />
                                        </div>
                                        <div className="basis-5/7 flex justify-start pl-3 w-full font-Kanit text-[1.5rem] font-bold text-black py-3">
                                            Creator
                                        </div>
                                        <button className="basis-1/7 bg-slate-100 flex justify-center px-3 py-3">
                                            <IoIosAdd className="w-[2rem] h-[2rem] hover:cursor-pointer text-black" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Animal */}
                            <div className="w-full flex justify-center pt-4">
                                <div className="w-[100%] text-white">
                                    <div className="flex flex-row font-Kanit items-center w-full border-2 border-slate-300 rounded-lg">
                                        <div className="basis-1/7 pl-2 py-3">
                                            <IoPawSharp className="w-[1.5rem] h-[1.5rem] text-black" />
                                        </div>
                                        <div className="basis-5/7 flex justify-start pl-3 w-full font-Kanit text-[1.5rem] font-bold text-black py-3">
                                            Animal
                                        </div>
                                        <button className="basis-1/7 bg-slate-100 flex justify-center px-3 py-3">
                                            <IoIosAdd className="w-[2rem] h-[2rem] hover:cursor-pointer text-black" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                </div>
                <div className="basis-full lg:basis-3/4 flex justify-center items-center space-x-4 lg:max-h-screen">
                    <section className="relative w-full min-h-screen flex justify-center items-center overflow-hidden section_shi">
                        <div className="relative z-10 mt-8 mx-auto max-w-3xl flex flex-col items-center">

                            <div>
                                <div className="py-4 flex justify-center">
                                    <div className="flex justify-center basis-1/2">
                                        <button
                                            className={`px-4 py-4 rounded-2xl hover:cursor-pointer shadow-lg bg-green-500 hover:bg-green-600`}
                                        >
                                            <div className="flex flex-row">
                                                <div className="flex items-center px-2">
                                                    <BsQrCodeScan
                                                        className={`w-[1rem] h-[1rem] text-white`}
                                                    />
                                                </div>
                                                <div
                                                    className={`flex items-center font-semibold text-white`}
                                                >
                                                    Botanical Data
                                                </div>
                                            </div>
                                        </button>
                                    </div>

                                    <div className="basis-1/2 flex justify-center tab:hidden">
                                        <button
                                            className={`px-4 py-4 rounded-2xl hover:cursor-pointer`}
                                        >
                                            <div className={`flex flex-row text-green-700`}>
                                                <div className="flex items-center px-2">
                                                    <BsQrCodeScan
                                                        className={`w-[1rem] h-[1rem]`}
                                                    />
                                                </div>
                                                <div
                                                    className={`flex items-center font-semibold`}
                                                >
                                                    Other QRs
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="flex flex-col py-6">
                                    <div className="flex justify-center">
                                        <p className="">Share this QR Code to share your</p>
                                    </div>
                                    <div className="flex justify-center font-bold text-2xl font-Alice">
                                        Botanical Data
                                    </div>
                                </div>
                            </div>

                            <div>

                                <div className="flex flex-row pt-10 pb-6 tab:hidden space-x-8">
                                    <div className="basis-1/5 flex items-center justify-center">
                                        <div className="w-[2.5rem] h-[2.5rem] rounded-full bg-slate-300 flex justify-center items-center hover:cursor-pointer">
                                            <IoIosArrowBack className={`w-[2rem] h-[2rem]`} />
                                        </div>
                                    </div>
                                    <div className="basis-3/5 relative">
                                        <div className="flex flex-row justify-center">
                                            <div className="flex flex-col w-[14rem] h-[14rem]">
                                                <img src={qr} className="rounded-lg" alt="qrt" />
                                                <div className="flex items-center justify-center mt-2 text-2xl font-semibold font-Alice">
                                                    Name
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="basis-1/5 flex justify-center items-center">
                                        <div className="w-[2.5rem] h-[2.5rem] rounded-full bg-slate-300 flex justify-center items-center hover:cursor-pointer">
                                            <MdOutlineNavigateNext className="w-[2rem] h-[2rem]" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <div>
                                <div className={`-mb-4 hidden md:block lg:block`}>
                                    <div className="py-6 -mt-[2rem]">
                                        <div className="mt-[4rem] flex flex-row">
                                            <div className="basis-1/2 flex justify-end pr-[2rem]">
                                                <button
                                                    className={`px-10 pt-2 pb-4 rounded-md hover:cursor-pointer text-white shadow-lg bg-green-500 hover:bg-green-600 disabled:bg-green-500 disabled:hover:cursor-not-allowed `}
                                                >
                                                    <div className="flex flex-col">
                                                        <div className="flex justify-center items-center">
                                                            <IoShareOutline className="w-[1.5rem] h-[1.5rem] pr-2" />
                                                        </div>
                                                        <div className="flex items-center font-semibold">
                                                            Share Card
                                                        </div>
                                                    </div>
                                                </button>
                                            </div>
                                            <div className="basis-1/2 flex justify-start pl-[1rem]">
                                                <button
                                                    className={`px-8 pt-2 pb-4 mr-8 rounded-md hover:cursor-pointer text-white shadow-xl bg-green-500 hover:bg-green-600 disabled:bg-green-500 disabled:hover:cursor-not-allowed`}
                                                >
                                                    <div className="flex flex-col">
                                                        <div className="flex justify-center items-center">
                                                            <IoDownloadOutline className="w-[1.5rem] h-[1.5rem] pr-2" />
                                                        </div>
                                                        <div className="flex items-center font-semibold">
                                                            Download Card
                                                        </div>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>

                                        <div className="">
                                            <div className="w-full">
                                                <div className="flex justify-center w-full py-6">
                                                    <button
                                                        className={`px-[8rem] py-2 text-white rounded-md hover:cursor-pointer text-lg font-Kanit shadow-lg bg-green-500 hover:bg-green-600`}
                                                    >
                                                        Add a new Vcard
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div
                                    className={`py-6 -mt-[2rem] lg:hidden tab:hidden`}
                                >
                                    <div className="mt-[4rem] flex flex-row">
                                        <div className="basis-1/2 flex justify-center hover:cursor-pointer">
                                            <button
                                                className={`px-12 py-2 rounded-3xl hover:cursor-pointer shadow-lg bg-green-300`}
                                            >
                                                <div className="flex flex-col">
                                                    <div className="flex justify-center items-center">
                                                        <IoShareOutline className="w-[2rem] h-[2rem]" />
                                                    </div>
                                                    <div className="flex items-center pt-2 font-semibold">
                                                        Share
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                        <div className="basis-1/2 flex justify-center">
                                            <button
                                                className={`px-10 py-8 rounded-3xl hover:cursor-pointer shadow-xl bg-green-300`}
                                            >
                                                <div className="flex flex-col">
                                                    <div className="flex justify-center items-center">
                                                        <IoDownloadOutline className="w-[2rem] h-[2rem]" />
                                                    </div>
                                                    <div className="flex items-center pt-2 font-semibold">
                                                        Download
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full lg:hidden tab:hidden">
                                    <div className="flex justify-center w-full py-6">
                                        <button
                                            className={`px-[5rem] py-3 text-white rounded-lg hover:cursor-pointer text-lg font-Kanit shadow-lg bg-green-500`}
                                        >
                                            Add a new Vcard
                                        </button>
                                    </div>
                                </div>
                            </div> */}

                            <div>
                                <div className="py-6 -mt-[2rem]">
                                    <div className="mt-[4rem] flex flex-row justify-center md:justify-between">
                                        <div className="basis-1/2 flex justify-center md:justify-end md:pr-[2rem]">
                                            <button
                                                className={`px-10 md:px-12 pt-2 md:py-2 pb-4 md:rounded-md rounded-3xl text-white shadow-lg md:shadow-xl bg-green-500 md:bg-green-300 hover:bg-green-600 md:hover:bg-green-300 disabled:bg-green-500 disabled:hover:cursor-not-allowed hover:cursor-pointer`}
                                            >
                                                <div className="flex flex-col">
                                                    <div className="flex justify-center items-center">
                                                        <IoShareOutline className="w-[1.5rem] md:w-[2rem] h-[1.5rem] md:h-[2rem] pr-2 md:pr-0" />
                                                    </div>
                                                    <div className="flex items-center font-semibold">
                                                        <span className="hidden md:block">Share Card</span>
                                                        <span className="md:hidden pt-2">Share</span>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                        <div className="basis-1/2 flex justify-center md:justify-start md:pl-[1rem]">
                                            <button
                                                className={`px-8 md:px-10 pt-2 md:py-8 pb-4 md:rounded-md rounded-3xl text-white shadow-xl md:shadow-lg bg-green-500 md:bg-green-300 hover:bg-green-600 md:hover:bg-green-300 disabled:bg-green-500 disabled:hover:cursor-not-allowed hover:cursor-pointer`}
                                            >
                                                <div className="flex flex-col">
                                                    <div className="flex justify-center items-center">
                                                        <IoDownloadOutline className="w-[1.5rem] md:w-[2rem] h-[1.5rem] md:h-[2rem] pr-2 md:pr-0" />
                                                    </div>
                                                    <div className="flex items-center font-semibold">
                                                        <span className="hidden md:block">Download Card</span>
                                                        <span className="md:hidden pt-2">Download</span>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="w-full">
                                        <div className="flex justify-center w-full py-6">
                                            <button
                                                className={`px-[5rem] md:px-[8rem] py-3 md:py-2 text-white rounded-lg md:rounded-md text-lg font-Kanit shadow-lg bg-green-500 hover:bg-green-600 hover:cursor-pointer`}
                                            >
                                                Add a new Vcard
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                    <div className="hidden md:block lg:block xl:block">
                        <p className="text-center text-xl font-semibold mt-6">
                            Other Cards
                        </p>
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
            </div>
        </div>
    )
}

export default App
