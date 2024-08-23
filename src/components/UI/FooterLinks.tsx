import { Link } from 'react-router-dom';
import { FooterItem } from '../../constants/footerItems';
import { textBody3 } from '../../constants/styles';
import { cn } from '../../utils/lib/cn';

type Props = {
    data: FooterItem[];
    type: string;
    title: string;
};

const FooterLinks = ({ data, type, title }: Props) => {
    return (
        <div className='flex-1 flex flex-col gap-2 min-w-40 mt-4'>
            <span className='border-b-2 border-main-gray-200 border-solid pb-2 max-w-[10rem]'>{title}</span>
            <ul className='flex flex-col gap-1'>
                {data.map(item =>
                    type === 'image' ? (
                        <li key={item.key} className='transition-transform duration-300 hover:-translate-x-2'>
                            <a className='flex flex-col gap-1' href={item.link} target='_blank' rel='noopener noreferrer'>
                                <img className={cn('w-28', item.needInvert && 'invert')} src={item.image} alt={item.name} />
                                <span className={textBody3}>{item.imgTitle}</span>
                            </a>
                        </li>
                    ) : (
                        <li key={item.key} className='transition-transform duration-300 hover:-translate-x-2'>
                            <Link to={item.link}>{item.name}</Link>
                        </li>
                    )
                )}
                {type === 'image' && (
                    <a
                        className='w-40 h-13 max-w-fit'
                        referrerPolicy='origin'
                        target='_blank'
                        href='https://trustseal.enamad.ir/?id=519024&Code=Nr6Kxy3QNinJ3N8mhOiw7K4W5t1LVVyV'>
                        <img
                            // @ts-ignore
                            code='Nr6Kxy3QNinJ3N8mhOiw7K4W5t1LVVyV'
                            referrerPolicy='origin'
                            src='https://trustseal.enamad.ir/logo.aspx?id=519024&Code=Nr6Kxy3QNinJ3N8mhOiw7K4W5t1LVVyV'
                            alt=''
                            style={{ cursor: 'pointer' }}
                        />
                    </a>
                )}
            </ul>
        </div>
    );
};

export default FooterLinks;
