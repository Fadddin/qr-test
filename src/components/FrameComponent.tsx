import { FunctionComponent } from "react";

export type FrameComponentType = {
    className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
    className = "",
}) => {
    return (
        <section
            className={`self-stretch flex flex-row items-start justify-end py-0 pr-[41px] pl-[45px] box-border max-w-full ${className}`}
        >
            <div className="flex-1 flex flex-col items-start justify-start gap-[23px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-center py-0 pr-6 pl-5">
                    <img
                        className="h-2.5 w-[74px] relative"
                        loading="lazy"
                        alt=""
                        src="/dots.png"
                    />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[19px] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-center gap-[20px] mq348:flex-wrap">
                        <button className="cursor-pointer [border:none] py-3 px-[55px] bg-neutral-6 flex-[0.5789] shadow-[0px_4px_20px_rgba(145,_150,_171,_0.12)] rounded-xl flex flex-col items-start justify-start box-border gap-[8px] min-w-[100px] mq348:flex-1">
                            <div className="flex flex-row items-start justify-start py-0 px-2.5">
                                <img className="h-6 w-6 relative" alt="" src="/icon.svg" />
                            </div>
                            <a className="[text-decoration:none] relative text-base leading-[24px] font-inter text-neutral-2 text-left inline-block min-w-[44px]">
                                Share
                            </a>
                        </button>
                        <button className="cursor-pointer [border:none] py-3 px-[39px] bg-neutral-6 flex-1 shadow-[0px_4px_20px_rgba(145,_150,_171,_0.12)] rounded-xl flex flex-col items-start justify-start box-border gap-[8px] min-w-[100px] mq348:flex-1">
                            <div className="flex flex-row items-start justify-start py-0 px-[26px]">
                                <img className="h-6 w-6 relative" alt="" src="/icon-1.svg" />
                            </div>
                            <div className="relative text-base leading-[24px] font-inter text-neutral-2 text-left inline-block min-w-[76px]">
                                Download
                            </div>
                        </button>
                    </div>
                    <button className="cursor-pointer [border:none] p-5 bg-lightseagreen self-stretch rounded-md flex flex-row items-start justify-center box-border gap-[4px] max-w-full">
                        <div className="h-14 w-[328px] relative rounded-md bg-lightseagreen hidden max-w-full" />
                        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                            <img
                                className="w-3.5 h-3.5 relative z-[1]"
                                alt=""
                                src="/vector-1.svg"
                            />
                        </div>
                        <div className="relative text-sm font-semibold font-inter text-whitesmoke-100 text-left inline-block min-w-[115px] z-[1]">
                            Add a new Vcard
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FrameComponent;