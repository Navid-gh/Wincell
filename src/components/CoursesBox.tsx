import bactery from '../assets/Bactery.png';
import wincell from '../assets/Wincell.png';
import discount from '../assets/Discount.png';
import star from '../assets/star.png';
import { textBody2Bold, bgTextColor, textBody3, textBody3Bold } from '../constants/styles';
import { cn } from '../utils/lib/cn';

const CoursesBox = () => {

  const courseList: any[] = [
    {
      title: 'ضروریات ویروس شناسی 2',
      univercity: 'دانشگاه آکسفورد',
      price: '1,230,000 تومان',
      discount: '950,000 تومان',
      point: '(12)4.4',
      image: bactery
    },
  ]

  return (
    <div className="flex flex-wrap gap-10 -mt-60">
      {
        courseList.map((item, i) => {
          return (
              <li key={i} className="w-72 h-72 bg-main-gray-500 rounded-big gap-5 p-4 pr-4 felx flex-col items-center justify-center cursor-pointer list-none">
                <div className='gap-4'>
                  <img className='w-72' src={item.image} alt="" />
                  <img className='w-18 h-11 rounded-small -mt-14 mr-2' src={wincell} alt="" />
                  {item.discount ? <img className='-mt-44 mr-56' src={discount} alt="" /> : ''}
                </div>
                <div className='flex flex-col w-72 h-14 gap-2 mt-36'>
                  <div className='flex w-full gap-7 items-center'>
                    <p className={`${cn('', textBody2Bold)}`}>{item.title}</p>
                    <div className='flex gap-1'>
                      <p className={`${cn('', textBody3Bold)}`}>{item.point}</p>
                      <img className='w-3 h-3' src={star} alt="" />
                    </div>
                  </div>
                  <div className='w-full h-7 gap-2 flex flex-col'>
                    <p className={`${cn('', textBody3)} text-main-gray-50`}>{item.univercity}</p>
                    <div className='flex w-72 h-4 gap-3 items-center'>
                      <p className={`${cn('', textBody3)} text-main-gray-50`}>قیمت دوره:</p>
                      {item.discount ? <p className={`${cn('', textBody3)} line-through text-main-gray-50`}>{item.price}</p> : <p className={`${cn('', textBody3)} text-main-gray-50`}>{item.price}</p>}
                      {item.discount ? <p className={`${cn('', bgTextColor, textBody3Bold)} rounded-big`}>{item.discount}</p> : ''}
                    </div>
                  </div>
                </div>
              </li>
          )
        })
      }
    </div>
  )
}

export default CoursesBox;