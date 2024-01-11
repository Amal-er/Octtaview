import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../store';
import { setPageTitle, toggleRTL } from '../../store/themeConfigSlice';
import { useEffect, useState } from 'react';
import Dropdown from '../../components/Dropdown';
import i18next from 'i18next';
import IconCaretDown from '../../components/Icon/IconCaretDown';
import IconUser from '../../components/Icon/IconUser';
import IconMail from '../../components/Icon/IconMail';
import IconLockDots from '../../components/Icon/IconLockDots';
import IconInstagram from '../../components/Icon/IconInstagram';
import IconFacebookCircle from '../../components/Icon/IconFacebookCircle';
import IconTwitter from '../../components/Icon/IconTwitter';
import IconGoogle from '../../components/Icon/IconGoogle';

//
import QRCode from 'react-qr-code';

// Assuming your QR code images are in the 'assets' folder
import QRCode1 from '../../../public/assets/qrcodes/QRcode1.png';
import QRcode2 from '../../../public/assets/qrcodes/QRcode2.png';
import QRcode3 from '../../../public/assets/qrcodes/QRcode3.png';
import QRcode4 from '../../../public/assets/qrcodes/QRcode4.png';
import QRcode5 from '../../../public/assets/qrcodes/QRcode5.png';
import QRcode6 from '../../../public/assets/qrcodes/QRcode6.png';
import QRcode7 from '../../../public/assets/qrcodes/QRcode7.png';
import QRcode8 from '../../../public/assets/qrcodes/QRcode8.png';
import QRcode9 from '../../../public/assets/qrcodes/QRcode9.png';
import QRcode10 from '../../../public/assets/qrcodes/QRcode10.png';

//

const Depositfund = () => {
    const [amount, setAmount] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle('Register Boxed'));
    }, [dispatch]);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform any form submission logic here
        console.log('Amount:', amount);
        // Redirect to another page
        navigate(`/qr-page?amount=${amount}`); // Change '/your-target-page' to the desired path
    };

    const isDark = useSelector((state: IRootState) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const setLocale = (flag: string) => {
        setFlag(flag);
        if (flag.toLowerCase() === 'ae') {
            dispatch(toggleRTL('rtl'));
        } else {
            dispatch(toggleRTL('ltr'));
        }
    };
    const [flag, setFlag] = useState(themeConfig.locale);

    // const submitForm = () => {
    //     navigate('/');
    // };

    return (
        <div>
            <div className="absolute inset-0">
                <img src="/assets/images/auth/bg-gradient.png" alt="image" className="h-full w-full object-cover" />
            </div>

            <div className="relative flex min-h-screen items-center justify-center bg-[url(/assets/images/auth/map.png)] bg-cover bg-center bg-no-repeat px-6 py-10 dark:bg-[#060818] sm:px-16">
                <img src="/assets/images/auth/coming-soon-object1.png" alt="image" className="absolute left-0 top-1/2 h-full max-h-[893px] -translate-y-1/2" />
                <img src="/assets/images/auth/coming-soon-object2.png" alt="image" className="absolute left-24 top-0 h-40 md:left-[30%]" />
                <img src="/assets/images/auth/coming-soon-object3.png" alt="image" className="absolute right-0 top-0 h-[300px]" />
                <img src="/assets/images/auth/polygon-object.svg" alt="image" className="absolute bottom-0 end-[28%]" />

                <div className="relative w-full max-w-[870px] rounded-md bg-[linear-gradient(45deg,#fff9f9_0%,rgba(255,255,255,0)_25%,rgba(255,255,255,0)_75%,_#fff9f9_100%)] p-2 dark:bg-[linear-gradient(52.22deg,#0E1726_0%,rgba(14,23,38,0)_18.66%,rgba(14,23,38,0)_51.04%,rgba(14,23,38,0)_80.07%,#0E1726_100%)]">
                    <div className="flex justify-center">
                        <h1 className="text-white font-extrabold text-2xl">Add Funds</h1>
                    </div>
                    <div className="relative flex flex-col justify-center rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50 px-6 lg:min-h-[758px] py-20">
                        {/* <div className="absolute top-6 end-6">
                            <div className="dropdown">
                                <Dropdown
                                    offset={[0, 8]}
                                    placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                    btnClassName="flex items-center gap-2.5 rounded-lg border border-white-dark/30 bg-white px-2 py-1.5 text-white-dark hover:border-primary hover:text-primary dark:bg-black"
                                    button={
                                        <>
                                            <div>
                                                <img src={`/assets/images/flags/${flag.toUpperCase()}.svg`} alt="image" className="h-5 w-5 rounded-full object-cover" />
                                            </div>
                                            <div className="text-base font-bold uppercase">{flag}</div>
                                            <span className="shrink-0">
                                                <IconCaretDown />
                                            </span>
                                        </>
                                    }
                                >
                                    <ul className="!px-2 text-dark dark:text-white-dark grid grid-cols-2 gap-2 font-semibold dark:text-white-light/90 w-[280px]">
                                        {themeConfig.languageList.map((item: any) => {
                                            return (
                                                <li key={item.code}>
                                                    <button
                                                        type="button"
                                                        className={`flex w-full hover:text-primary rounded-lg ${flag === item.code ? 'bg-primary/10 text-primary' : ''}`}
                                                        onClick={() => {
                                                            i18next.changeLanguage(item.code);
                                                            // setFlag(item.code);
                                                            setLocale(item.code);
                                                        }}
                                                    >
                                                        <img src={`/assets/images/flags/${item.code.toUpperCase()}.svg`} alt="flag" className="w-5 h-5 object-cover rounded-full" />
                                                        <span className="ltr:ml-3 rtl:mr-3">{item.name}</span>
                                                    </button>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </Dropdown>
                            </div>
                        </div> */}
                        {/*  */}

                        <div className="mb-5 flex flex-col sm:flex-row items-center justify-center">
                            <div className="max-w-[19rem] w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none flex flex-col justify-center items-center mb-5 sm:mb-0">
                                <h1 className="text-white">Available Balance</h1>
                                <div className="py-7 px-6">
                                    <div className="bg-[#3b3f5c] mb-5 inline-block p-3 text-[#f1f2f3] rounded-full">0</div>
                                    <h5 className="text-[#3b3f5c] text-xl font-semibold mb-4 dark:text-white-light">0</h5>
                                </div>
                            </div>

                            <div className="max-w-[19rem] ml-0 sm:ml-10 w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                                <div className="flex flex-col">
                                    <h1 className="text-white">You can only transfer TRON-Based Tokens </h1>
                                </div>
                                <form className="py-5" onSubmit={handleSubmit}>
                                    <label htmlFor="fullname">Add Amount</label>
                                    <input type="number" placeholder="Amount" className="form-input" required />
                                    <div className="flex justify-center items-center">
                                        <button type="submit" className="btn btn-primary mt-6">
                                            Add Funds
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/*  */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Depositfund;
