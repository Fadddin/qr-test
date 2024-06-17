import { FunctionComponent } from "react";

export type ComponentType = {
    className?: string;
};

const Component: FunctionComponent<ComponentType> = ({ className = "" }) => {
    return (
        <header
            className={`w-full !m-[0] absolute top-[0px] right-[0px] left-[0px] shadow-[0px_2px_2px_rgba(0,_0,_0,_0.11)] flex flex-row items-start justify-between py-[19px] pr-[49px] pl-6 box-border gap-[20px] text-center text-sm text-snow font-roboto ${className}`}
        >
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-whitesmoke-200" />
            <img
                className="h-[22px] w-[37px] relative z-[1]"
                loading="lazy"
                alt=""
                src="/vector.svg"
            />
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div className="flex flex-row items-start justify-start relative">
                    <div className="h-[35.2px] w-[107px] absolute !m-[0] bottom-[-10.6px] left-[calc(50%_-_53.5px)] rounded-6xs bg-royalblue z-[1]" />
                    <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[49px] whitespace-nowrap z-[2]">
                        Sign Up
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Component;