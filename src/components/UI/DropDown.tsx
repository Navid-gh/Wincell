import { useQuery } from "@tanstack/react-query";
import { textBody2, textBody1Bold } from "../../constants/styles";
import { cn } from "../../utils/lib/cn";
import AppsSort from "./icons/AppsSort";
import LeftArrow from "./icons/LeftArrow";
import { useState } from "react";
import { getCategories } from "../../api/category";
import { getCourses } from "../../api/course";
import { sortItems } from "../../constants/sortItems";

const DropDown = () => {

    const [isHovered1, setIsHovered1] = useState<boolean>(false);
    const [isHovered2, setIsHovered2] = useState<boolean>(false);
    const [categoriesId, setCategoriesId] = useState<string | undefined>(undefined);
    const [filter, setFilter] = useState<string | undefined>(undefined);

    const { data: categoriesData } = useQuery({
        queryKey: ['courses-categories'],
        queryFn: () => getCategories('course')
    });

    const { data: coursesData } = useQuery({
        queryKey: ['courses', categoriesId, filter],
        queryFn: () => getCourses(categoriesId, undefined, filter),
        enabled: !!categoriesId
    });

    const handleCategory = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, id: string) => {
        e.preventDefault();
        setCategoriesId(id);
    }

    const handleSort = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, id: string) => {
        e.preventDefault();
        setFilter(id);
    }

    return (
        <div className="flex gap-5 my-2">
            <section className="flex flex-col w-[218px] h-[347px] gap-2">
                <div onMouseEnter={() => setIsHovered1(true)} onMouseLeave={() => setIsHovered1(false)} className={`${cn("", textBody2)} flex justify-center items-center gap-2 bg-main-green-300 rounded-small h-[57px] cursor-pointer`}>
                    <div className='flex justify-between items-center w-[163px] h-[25px]'>
                        <div className='flex gap-2'>
                            <AppsSort className="fill-main-black" />
                            <p className={`${cn("", textBody1Bold)} text-main-black`}>دسته بندی</p>
                        </div>
                        <LeftArrow className="w-4 h-4 -rotate-90" />
                    </div>
                </div>
                <ul onMouseEnter={() => setIsHovered1(true)} onMouseLeave={() => setIsHovered1(false)} className={`flex flex-col max-h-[300px] rounded-small border-[1.5px] bg-main-gray-500 border-main-gray-400 box-shadow-1 gap-[2px] p-[10px] cursor-pointer z-50 transiton-all duration-200 ${cn("", textBody2)} ${isHovered1 ? 'visible' : 'invisible'}`}>
                    {categoriesData && categoriesData.map((category) => {
                        return (
                            <li onClick={(e) => handleCategory(e, category._id)} key={category._id} className="w-[198px] h-[42px] rounded-small gap-4 pt-[10px] pr-[10px] pb-[10px] pl-[103px] text-main-white hover:bg-main-gray-400">
                                {category.title}
                            </li>
                        )
                    })}
                </ul>
            </section>
            <section className="flex flex-col w-[218px] h-[347px] gap-2">
                <div onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)} className={`${cn("", textBody2)} flex justify-center items-center gap-2 rounded-small h-[57px] border-2 border-main-white cursor-pointer`}>
                    <div className='flex justify-between items-center w-[163px] h-[25px]'>
                        <div className='flex gap-2'>
                            <AppsSort className="fill-main-white" />
                            <p className={`${cn("", textBody1Bold)}`}>مرتب سازی</p>
                        </div>
                        <LeftArrow className="w-4 h-4 -rotate-90 fill-main-white" />
                    </div>
                </div>
                <ul onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)} className={`flex flex-col max-h-[300px] rounded-small border-[1.5px] bg-main-gray-500 border-main-gray-400 box-shadow-1 gap-[2px] p-[10px] cursor-pointer z-50 transiton-all duration-200 ${cn("", textBody2)} ${isHovered2 ? 'visible' : 'invisible'}`}>
                    {sortItems?.map((item) => {
                        return (
                            <li onClick={(e) => handleSort(e, item.id)} key={item.id} className="w-[198px] h-[42px] rounded-small gap-4 pt-[10px] pr-[10px] pb-[10px] pl-[103px] text-main-white hover:bg-main-gray-400">
                                {item.title}
                            </li>
                        )
                    })}
                </ul>
            </section>

        </div>
    );
};

export default DropDown;