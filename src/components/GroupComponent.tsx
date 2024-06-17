import { FunctionComponent } from "react";

export type GroupComponentType = {
    className?: string;
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
    className = "",
}) => {
    return (
        <footer
            className={`self-stretch shadow-[0px_0px_6px_rgba(0,_0,_0,_0.25)] bg-whitesmoke-100 flex flex-col items-start justify-start py-[9px] pr-[31px] pl-10 box-border relative gap-[2px] max-w-full text-left text-xs text-gainsboro font-inter ${className}`}
        >
            <div className="w-[414px] h-[62px] relative shadow-[0px_0px_6px_rgba(0,_0,_0,_0.25)] bg-whitesmoke-100 hidden max-w-full z-[0]" />
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-4 pl-1.5 box-border max-w-full">
                <img
                    className="h-[27px] flex-1 relative max-w-full overflow-hidden z-[1]"
                    alt=""
                    src="/group-26087200.svg"
                />
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq357:flex-wrap">
                <div className="relative font-semibold inline-block min-w-[35px] z-[1]">
                    Home
                </div>
                <div className="relative font-semibold text-royalblue inline-block min-w-[58px] z-[1]">
                    QR Codes
                </div>
                <div className="relative font-semibold inline-block min-w-[74px] z-[1]">
                    Subscription
                </div>
                <div className="relative font-semibold inline-block min-w-[59px] z-[1]">
                    My Profile
                </div>
            </div>
            <img
                className="w-7 h-[25px] absolute !m-[0] top-[10px] right-[152px] z-[2]"
                loading="lazy"
                alt=""
                src="/vector-2.svg"
            />
        </footer>
    );
};

export default GroupComponent;