import AppsSort from "./UI/icons/AppsSort";
import BottomArrow from "./UI/icons/BottomArrow";
import { textBody1, textBody2, textBody1Bold } from "../constants/styles";
import { cn } from "../utils/lib/cn";
import { useState } from "react";

const CourseContent = () => {

    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isHovered2, setIsHovered2] = useState<boolean>(false);

    return (
        <div className="flex flex-col gap-4 justify-center my-6">
            <section className="flex flex-row items-center gap-5">
                <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={`cursor-pointer flex justify-center items-center gap-2 bg-main-green-300 w-56 h-14 rounded-small ${cn("", textBody2)}`}>
                    <div className="w-40 flex justify-between">
                        <div className={`flex gap-2`}>
                            <AppsSort className="fill-main-black" />
                            <p className={`${cn("", textBody1Bold)} text-black`}>دسته بندی</p>
                        </div>
                        <BottomArrow className="fill-main-black" />
                    </div>
                </div>
                <div onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)} className={`cursor-pointer flex justify-center items-center gap-2 border-2 border-white w-56 h-14 rounded-small ${cn("", textBody2)}`}>
                    <div className="w-40 flex justify-between">
                        <div className={`flex gap-2`}>
                            <AppsSort className="fill-main-white" />
                            <p className={`${cn("", textBody1Bold)}`}>مرتب سازی</p>
                        </div>
                        <BottomArrow className="fill-main-white" />
                    </div>
                </div>
            </section>
            <div className="flex flex-row gap-5">
                <ul onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={`z-50 transiton-all duration-200 w-56 h-72 gap-1 p-3 border-2 bg-main-gray-500 border-main-gray-400 box-shadow-1 rounded-small ${cn("", textBody1), isHovered ? 'visible' : 'invisible'}`}>
                    <li className={`w-48 h-11 flex items-center cursor-pointer gap-4 p-3 transition-all duration-200 hover:bg-main-gray-400 rounded-small hover:w-48 ${isHovered ? 'visible' : 'invisible'}`}>زیست شناسی</li>
                    <li className={`w-48 h-11 flex items-center cursor-pointer gap-4 p-3 transition-all duration-200 hover:bg-main-gray-400 rounded-small hover:w-48 ${isHovered ? 'visible' : 'invisible'}`}>ژنتیک</li>
                    <li className={`w-48 h-11 flex items-center cursor-pointer gap-4 p-3 transition-all duration-200 hover:bg-main-gray-400 rounded-small hover:w-48 ${isHovered ? 'visible' : 'invisible'}`}>بیوفیزیک</li>
                    <li className={`w-48 h-11 flex items-center cursor-pointer gap-4 p-3 transition-all duration-200 hover:bg-main-gray-400 rounded-small hover:w-48 ${isHovered ? 'visible' : 'invisible'}`}>ژنتیک گیاهی</li>
                    <li className={`w-48 h-11 flex items-center cursor-pointer gap-4 p-3 transition-all duration-200 hover:bg-main-gray-400 rounded-small hover:w-48 ${isHovered ? 'visible' : 'invisible'}`}>بیوتکنولوژی</li>
                    <li className={`w-48 h-11 flex items-center cursor-pointer gap-4 p-3 transition-all duration-200 hover:bg-main-gray-400 rounded-small hover:w-48 ${isHovered ? 'visible' : 'invisible'}`}>گیاه شناسی</li>
                </ul>
                <ul onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)} className={`z-50 transiton-all duration-200 w-56 h-40 gap-1 p-3 border-2 bg-main-gray-500 border-main-gray-400 box-shadow-1 rounded-small ${cn("", textBody1), isHovered2 ? 'visible' : 'invisible'}`}>
                    <li className={`w-48 h-11 flex items-center cursor-pointer gap-4 p-3 transition-all duration-200 hover:bg-main-gray-400 rounded-small hover:w-48 ${isHovered2 ? 'visible' : 'invisible'}`}>محبوبیت</li>
                    <li className={`w-48 h-11 flex items-center cursor-pointer gap-4 p-3 transition-all duration-200 hover:bg-main-gray-400 rounded-small hover:w-48 ${isHovered2 ? 'visible' : 'invisible'}`}>ارزان ترین</li>
                    <li className={`w-48 h-11 flex items-center cursor-pointer gap-4 p-3 transition-all duration-200 hover:bg-main-gray-400 rounded-small hover:w-48 ${isHovered2 ? 'visible' : 'invisible'}`}>گران ترین</li>
                </ul>
            </div>
        </div>
    )
}

export default CourseContent