import { FunctionComponent } from "react";
import Component from "./components/Component";
import FrameComponent from "./components/FrameComponent";
import GroupComponent from "./components/GroupComponent";

const Botany: FunctionComponent = () => {
    return (
        <div className="w-full relative bg-whitesmoke-100 overflow-hidden flex flex-col items-end justify-start gap-[17.5px] leading-[normal] tracking-[normal] text-center text-sm text-darkslategray font-inter">
            <section className="self-stretch flex flex-col items-start justify-start pt-[58px] px-0 pb-0 relative text-left text-base text-lightseagreen font-inter">
                <Component />
                <img
                    className="self-stretch relative max-w-full overflow-hidden max-h-full z-[3]"
                    alt=""
                    src="/union.png"
                />
                <button className="cursor-pointer [border:none] py-3.5 px-[21px] bg-lightseagreen !m-[0] absolute top-[88px] left-[33px] rounded-xl flex flex-row items-start justify-start gap-[10px] whitespace-nowrap z-[4] hover:bg-darkcyan">
                    <img
                        className="h-6 w-6 relative object-contain min-h-[24px]"
                        alt=""
                        src="/qricon.png"
                    />
                    <a className="[text-decoration:none] relative text-base leading-[24px] font-semibold font-inter text-neutral-6 text-left inline-block min-w-[99px]">
                        Botanical QR
                    </a>
                </button>
                <div className="!m-[0] absolute top-[88px] right-[33px] rounded-[18px] flex flex-row items-start justify-start py-3.5 px-[25px] gap-[10px] z-[4]">
                    <img
                        className="h-6 w-6 relative object-contain min-h-[24px]"
                        loading="lazy"
                        alt=""
                        src="/qricon.png"
                    />
                    <a className="[text-decoration:none] relative leading-[24px] font-semibold text-[inherit] inline-block min-w-[72px]">
                        Other QR
                    </a>
                </div>
                <div className="w-[217px] h-[217px] absolute !m-[0] bottom-[118px] left-[98px] z-[4]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_4px_10px_rgba(0,_0,_0,_0.08)] rounded-xl bg-neutral-6 flex flex-col items-center justify-center p-2 box-border">
                        <img
                            className="w-[176.2px] h-[176.2px] relative hidden"
                            alt=""
                            src="/qr.png"
                        />
                    </div>
                    <img
                        className="absolute h-[80.41%] w-[80.41%] top-[9.63%] right-[9.95%] bottom-[9.95%] left-[9.63%] max-w-full overflow-hidden max-h-full z-[1]"
                        loading="lazy"
                        alt=""
                        src="/qr.png"
                    />
                </div>
            </section>
            <div className="w-[226px] absolute !m-[0] top-[171px] left-[calc(50%_-_113px)] leading-[24px] inline-block z-[4]">
                <p className="m-0 font-medium">{`Share this QR Code to share your `}</p>
                <p className="m-0 text-lg">
                    <b>Botanical Data</b>
                </p>
            </div>
            <FrameComponent />
            <h3 className="!m-[0] w-full absolute bottom-[357px] left-[0px] text-lg leading-[24px] font-bold font-inherit inline-block z-[4]">
                Coconut Tree
            </h3>
            {/* <GroupComponent /> */}
            <img
                className="w-[45px] h-[45px] absolute !m-[0] top-[336px] left-[31px] z-[4]"
                loading="lazy"
                alt=""
                src="/left.png"
            />
            <img
                className="w-[45px] h-[45px] absolute !m-[0] top-[336px] right-[32px] z-[4]"
                loading="lazy"
                alt=""
                src="/right.png"
            />
        </div>
    );
};

export default Botany;