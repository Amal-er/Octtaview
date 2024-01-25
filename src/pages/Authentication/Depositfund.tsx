// import React from 'react';
// import Headers from '../../components/Layouts/Header';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// // import { IRootState } from '../../Slice';
// import { setPageTitle, toggleRTL } from '../../Slice/themeConfigSlice';
// import { useEffect, useState } from 'react';
// import Dropdown from '../../components/Dropdown';
// import i18next from 'i18next';
// import IconCaretDown from '../../components/Icon/IconCaretDown';
// import IconUser from '../../components/Icon/IconUser';
// import IconMail from '../../components/Icon/IconMail';
// import IconLockDots from '../../components/Icon/IconLockDots';
// import IconInstagram from '../../components/Icon/IconInstagram';
// import IconFacebookCircle from '../../components/Icon/IconFacebookCircle';
// import IconTwitter from '../../components/Icon/IconTwitter';
// import IconGoogle from '../../components/Icon/IconGoogle';
// import { IRootState, useAppDispatch, useAppSelector } from '../../Slice/index';
// import { addNewFund } from '../../Slice/userSlice';

// const Depositfund = () => {
//     const [amount, setAmount] = useState('');
//     // const [trxnpassword, setTrxnPassword] = useState('');
//     const dispatch = useAppDispatch();
//     const navigate = useNavigate();

//     const { userInfo } = useAppSelector((state: any) => state.getAddNewFundReducer);

//     useEffect(() => {
//         dispatch(setPageTitle('Deposit Fund'));
//         if (userInfo) navigate(`/qrpage`);
//     }, [userInfo, navigate]);

//     const handleSubmit = (e: any) => {
//         e.preventDefault();
//         dispatch(addNewFund({ amount }));

//         //         // Perform any form submission logic here
//         console.log('Amount:', amount);
//         //         // Redirect to another page
//         navigate(`/qr-page?amount=${amount}`); // Change '/your-target-page' to the desired path
//     };
//     return (
//         <div>
//             <Headers />
//             <div className="panel mt-6">
//                 <div>
//                     <h2 className="text-xl text-white">Deposit Fund</h2>
//                 </div>
//             </div>
//             <div className="mb-5 flex flex-col sm:flex-row items-center justify-center mt-10">
//                 {/* <div className="max-w-[19rem] w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none flex flex-col justify-center items-center mb-5 sm:mb-0">
//                     <h1 className="text-white">Available Balance</h1>
//                     <div className="py-7 px-6">
//                         {' '}
//                         <div className="bg-[#3b3f5c] mb-5 inline-block p-3 text-[#f1f2f3] rounded-full">0</div>
//                         <h5 className="text-[#3b3f5c] text-xl font-semibold mb-4 dark:text-white-light">0</h5>
//                     </div>
//                 </div> */}

//                 {/* <div className="max-w-[19rem] ml-0 sm:ml-10 w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
//                     <div className="flex flex-col">
//                         <h1 className="text-white">You can only transfer TRON-Based Tokens </h1>
//                     </div>
//                     <form className="py-5" onSubmit={handleSubmit}>
//                         <label htmlFor="fullname">Add Amount</label>
//                         <input type="number" placeholder="Amount" className="form-input" required />
//                         <label htmlFor="fullname">Transaction Password</label>
//                         <input type="number" placeholder="*******" className="form-input" required />
//                         <p className="text-red-600">Minimum withdrawal $50.</p>
//                         <div className="flex justify-center items-center">
//                             <button type="submit" className="btn btn-primary mt-6">
//                                 Add Funds
//                             </button>
//                         </div>
//                     </form>
//                 </div> */}
//                 <div className="flex justify-center items-center mt-10 ml-10 ">
//                     <form onSubmit={handleSubmit}>
//                         {' '}
//                         {/* Move onSubmit to the form element */}
//                         <p className="text-white">Add Amount</p>
//                         <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount" className="form-input w-96" required />
//                         <p className="text-red-600">Depositfund only tron TRC-20.</p>
//                         {/* <div className="py-6">
//                             <p className="text-white ">Transaction Password</p>
//                             <input
//                                 type="text"
//                                 value={trxnpassword}
//                                 onChange={(e) => setTrxnPassword(e.target.value)}
//                                 placeholder="Enter your Transaction Password"
//                                 className="form-input w-96"
//                                 required
//                             />
//                         </div> */}
//                         <button type="submit" className="btn btn-primary mt-3">
//                             Add fund
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Depositfund;

// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { IRootState } from '../../store';
// import { setPageTitle, toggleRTL } from '../../store/themeConfigSlice';
// import { useEffect, useState } from 'react';
// import Dropdown from '../../components/Dropdown';
// import i18next from 'i18next';
// import IconCaretDown from '../../components/Icon/IconCaretDown';
// import IconUser from '../../components/Icon/IconUser';
// import IconMail from '../../components/Icon/IconMail';
// import IconLockDots from '../../components/Icon/IconLockDots';
// import IconInstagram from '../../components/Icon/IconInstagram';
// import IconFacebookCircle from '../../components/Icon/IconFacebookCircle';
// import IconTwitter from '../../components/Icon/IconTwitter';
// import IconGoogle from '../../components/Icon/IconGoogle';
// import { useParams } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

// //
// import QRCode from 'react-qr-code';

// // Assuming your QR code images are in the 'assets' folder
// import QRcode1 from '../../../public/assets/qrcodes/QRcode1.png';
// import QRcode2 from '../../../public/assets/qrcodes/QRcode2.png';
// import QRcode3 from '../../../public/assets/qrcodes/QRcode3.png';
// import QRcode4 from '../../../public/assets/qrcodes/QRcode4.png';
// import QRcode5 from '../../../public/assets/qrcodes/QRcode5.png';
// import QRcode6 from '../../../public/assets/qrcodes/QRcode6.png';
// import QRcode7 from '../../../public/assets/qrcodes/QRcode7.png';
// import QRcode8 from '../../../public/assets/qrcodes/QRcode8.png';
// import QRcode9 from '../../../public/assets/qrcodes/QRcode9.png';
// import QRcode10 from '../../../public/assets/qrcodes/QRcode10.png';
// import { link } from 'fs';

// //

// const Qrpage = () => {
//     const location = useLocation();
//     // const [amount, setAmount] = useState('');
//     const [currentQRIndex, setCurrentQRIndex] = useState(0);
//     const searchParams = new URLSearchParams(location.search);
//     const amount = searchParams.get('amount');

//     const dispatch = useDispatch();
//     useEffect(() => {
//         dispatch(setPageTitle('Register Boxed'));
//     });

//     const qrCodeData = [
//         { code: QRcode1, link: 'TCbs7bXoq99eHxquaBUpBptQy9rAM2x15P' },
//         { code: QRcode2, link: 'TAKAkCCK7o426yYjHh2kpPadYhWRsbxRNS' },
//         { code: QRcode3, link: 'TYmnBnbok3khnd3YQjanVHrpLPhvCwPWvR' },
//         { code: QRcode4, link: 'TW3J65Pnxm9WDNUAgJz9Los1J8Lab5J9Ks' },
//         { code: QRcode5, link: 'TEPc9WfK7CwgHV9QnVt1znhpTn1JxdLL9y' },
//         { code: QRcode6, link: 'TScvoAtZwN4ouoSPN8reZSrWGF5BKNxyMK' },
//         { code: QRcode7, link: 'TSXHQyM1JxjD94JbrCFeJQSVPPet269tc5' },
//         { code: QRcode8, link: 'TEoYeyUrDZAbNGYKoVdmh9Nue61p1xi7pN' },
//         { code: QRcode9, link: 'TTXzewFCuXAFSPL9u9Z1ST1KGWSyj3MD6q' },
//         { code: QRcode10, link: 'TSqeTCsVwBziBEMT5DpbSFMkgrNjjVM6rr' },
//     ];

//     const [selectedQRCode, setSelectedQRCode] = useState({ code: '', link: '' });

//     useEffect(() => {
//         // Set a random QR code and its link on component mount or page refresh
//         const randomIndex = Math.floor(Math.random() * qrCodeData.length);
//         setSelectedQRCode(qrCodeData[randomIndex]);
//     }, []);

//     const copyToClipboard = () => {
//         try {
//             const textField = document.createElement('textarea');
//             textField.innerText = selectedQRCode.link;
//             document.body.appendChild(textField);
//             textField.select();
//             document.execCommand('copy');
//             document.body.removeChild(textField);
//             console.log('Link copied to clipboard!');
//             alert('Link copied to clipboard!');
//         } catch (err) {
//             console.error('Error copying to clipboard: ', err);
//             alert('Error copying to clipboard!');
//         }
//     };

//     const handlePayment = () => {
//         // ... (implement your payment logic here)
//     };

//     const navigate = useNavigate();
//     const isDark = useSelector((state: IRootState) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);
//     const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;
//     const themeConfig = useSelector((state: IRootState) => state.themeConfig);
//     const setLocale = (flag: string) => {
//         setFlag(flag);
//         if (flag.toLowerCase() === 'ae') {
//             dispatch(toggleRTL('rtl'));
//         } else {
//             dispatch(toggleRTL('ltr'));
//         }
//     };
//     const [flag, setFlag] = useState(themeConfig.locale);

//     // const submitForm = () => {
//     //     navigate('/');
//     // };

//     return (
//         <div>
//             <div className="absolute inset-0">
//                 <img src="/assets/images/auth/bg-gradient.png" alt="image" className="h-full w-full object-cover" />
//             </div>

//             <div className="relative flex min-h-screen items-center justify-center bg-[url(/assets/images/auth/map.png)] bg-cover bg-center bg-no-repeat px-6 py-10 dark:bg-[#060818] sm:px-16">
//                 <img src="/assets/images/auth/coming-soon-object1.png" alt="image" className="absolute left-0 top-1/2 h-full max-h-[893px] -translate-y-1/2" />
//                 <img src="/assets/images/auth/coming-soon-object2.png" alt="image" className="absolute left-24 top-0 h-40 md:left-[30%]" />
//                 <img src="/assets/images/auth/coming-soon-object3.png" alt="image" className="absolute right-0 top-0 h-[300px]" />
//                 <img src="/assets/images/auth/polygon-object.svg" alt="image" className="absolute bottom-0 end-[28%]" />
//                 <div className="relative w-full max-w-[870px] rounded-md bg-[linear-gradient(45deg,#fff9f9_0%,rgba(255,255,255,0)_25%,rgba(255,255,255,0)_75%,_#fff9f9_100%)] p-2 dark:bg-[linear-gradient(52.22deg,#0E1726_0%,rgba(14,23,38,0)_18.66%,rgba(14,23,38,0)_51.04%,rgba(14,23,38,0)_80.07%,#0E1726_100%)]">
//                     <div className="relative flex flex-col justify-center rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50 px-6 lg:min-h-[758px] py-20">
//                         <div className="flex justify-center py-5">
//                             <h1 className="text-white font-extrabold text-2xl">Make Payment To Add Funds</h1>
//                         </div>
//                         <p>Amount: {amount}</p>
//                         {/*  */}
//                         <div className="flex justify-center py-5">
//                             <h1 className="text-white font-extrabold text-2xl">{amount}</h1>
//                         </div>
//                         {/*  */}
//                         <div className="absolute top-6 end-6">
//                             <div className="dropdown">
//                                 <Dropdown
//                                     offset={[0, 8]}
//                                     placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
//                                     btnClassName="flex items-center gap-2.5 rounded-lg border border-white-dark/30 bg-white px-2 py-1.5 text-white-dark hover:border-primary hover:text-primary dark:bg-black"
//                                     button={
//                                         <>
//                                             <div>
//                                                 <img src={`/assets/images/flags/${flag.toUpperCase()}.svg`} alt="image" className="h-5 w-5 rounded-full object-cover" />
//                                             </div>
//                                             <div className="text-base font-bold uppercase">{flag}</div>
//                                             <span className="shrink-0">
//                                                 <IconCaretDown />
//                                             </span>
//                                         </>
//                                     }
//                                 >
//                                     <ul className="!px-2 text-dark dark:text-white-dark grid grid-cols-2 gap-2 font-semibold dark:text-white-light/90 w-[280px]">
//                                         {themeConfig.languageList.map((item: any) => {
//                                             return (
//                                                 <li key={item.code}>
//                                                     <button
//                                                         type="button"
//                                                         className={`flex w-full hover:text-primary rounded-lg ${flag === item.code ? 'bg-primary/10 text-primary' : ''}`}
//                                                         onClick={() => {
//                                                             i18next.changeLanguage(item.code);
//                                                             // setFlag(item.code);
//                                                             setLocale(item.code);
//                                                         }}
//                                                     >
//                                                         <img src={`/assets/images/flags/${item.code.toUpperCase()}.svg`} alt="flag" className="w-5 h-5 object-cover rounded-full" />
//                                                         <span className="ltr:ml-3 rtl:mr-3">{item.name}</span>
//                                                     </button>
//                                                 </li>
//                                             );
//                                         })}
//                                     </ul>
//                                 </Dropdown>
//                             </div>
//                         </div>
//                         {/*  */}

//                         <div className="mb-5 flex   items-center justify-center ">
//                             <div className="max-w-[19rem] w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none  ">
//                                 <div className="py-7 px-2">
//                                     <img src={selectedQRCode.code} alt="QR Code" />
//                                     <p className="mt-4 text-center text-blue-500 underline">
//                                         <a href={selectedQRCode.link} target="_blank" rel="noopener noreferrer">
//                                             {selectedQRCode.link}
//                                         </a>
//                                     </p>

//                                     <div className="flex justify-center items-center mt-4 space-x-2 ">
//                                         <button className="flex justify-center items-center w-10 h-5 bg-orange-600 text-white" onClick={copyToClipboard}>
//                                             Copy
//                                         </button>
//                                         {/* <button onClick={handlePayment}>Make Payment</button> */}
//                                     </div>
//                                 </div>
//                             </div>
//                             {/*  */}

//                             {/*  */}
//                         </div>

//                         <div className="flex justify-center items-center">
//                             <button className="bg-green-500 text-white w-40 h-10 rounded-sm " onClick={handlePayment}>
//                                 Confirm Deposit
//                             </button>
//                         </div>

//                         {/*  */}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Qrpage;

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState, useAppSelector } from '../../Slice';
import { setPageTitle, toggleRTL } from '../../Slice/themeConfigSlice';
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
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Headers from '../../components/Layouts/Header';
import { addNewFund } from '../../Slice/userSlice';
//
import QRCode from 'react-qr-code';

// Assuming your QR code images are in the 'assets' folder
import QRcode1 from '../../../public/assets/qrcodes/QRcode1.png';
import QRcode2 from '../../../public/assets/qrcodes/QRcode2.png';
import QRcode3 from '../../../public/assets/qrcodes/QRcode3.png';
import QRcode4 from '../../../public/assets/qrcodes/QRcode4.png';
import QRcode5 from '../../../public/assets/qrcodes/QRcode5.png';
import QRcode6 from '../../../public/assets/qrcodes/QRcode6.png';
import QRcode7 from '../../../public/assets/qrcodes/QRcode7.png';
import QRcode8 from '../../../public/assets/qrcodes/QRcode8.png';
import QRcode9 from '../../../public/assets/qrcodes/QRcode9.png';
import QRcode10 from '../../../public/assets/qrcodes/QRcode10.png';
import { link } from 'fs';

//

const Depositfund = () => {
    const location = useLocation();

    const [amount, setAmount] = useState('');
    const [transactionid, setTransactionid] = useState('');

    const [currentQRIndex, setCurrentQRIndex] = useState(0);

    // const searchParams = new URLSearchParams(location.search);
    const { data } = useAppSelector((state: any) => state.getAddNewFundReducer);
    // const amount = searchParams.get('amount');

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Register Boxed'));
    });

    const handlePayment = (e: any) => {
        e.preventDefault();
        dispatch(addNewFund({ amount, transactionid }));
        if (data) navigate('/deposithistory');
        alert('Deposit confirmed!');
    };

    const qrCodeData = [
        { code: QRcode1, link: 'TCbs7bXoq99eHxquaBUpBptQy9rAM2x15P' },
        { code: QRcode2, link: 'TAKAkCCK7o426yYjHh2kpPadYhWRsbxRNS' },
        { code: QRcode3, link: 'TYmnBnbok3khnd3YQjanVHrpLPhvCwPWvR' },
        { code: QRcode4, link: 'TW3J65Pnxm9WDNUAgJz9Los1J8Lab5J9Ks' },
        { code: QRcode5, link: 'TEPc9WfK7CwgHV9QnVt1znhpTn1JxdLL9y' },
        { code: QRcode6, link: 'TScvoAtZwN4ouoSPN8reZSrWGF5BKNxyMK' },
        { code: QRcode7, link: 'TSXHQyM1JxjD94JbrCFeJQSVPPet269tc5' },
        { code: QRcode8, link: 'TEoYeyUrDZAbNGYKoVdmh9Nue61p1xi7pN' },
        { code: QRcode9, link: 'TTXzewFCuXAFSPL9u9Z1ST1KGWSyj3MD6q' },
        { code: QRcode10, link: 'TSqeTCsVwBziBEMT5DpbSFMkgrNjjVM6rr' },
    ];

    const [selectedQRCode, setSelectedQRCode] = useState({ code: '', link: '' });

    useEffect(() => {
        // Set a random QR code and its link on component mount or page refresh
        const randomIndex = Math.floor(Math.random() * qrCodeData.length);
        setSelectedQRCode(qrCodeData[randomIndex]);
    }, []);

    const copyToClipboard = () => {
        try {
            const textField = document.createElement('textarea');
            textField.innerText = selectedQRCode.link;
            document.body.appendChild(textField);
            textField.select();
            document.execCommand('copy');
            document.body.removeChild(textField);
            console.log('Link copied to clipboard!');
            alert('Link copied to clipboard!');
        } catch (err) {
            console.error('Error copying to clipboard: ', err);
            alert('Error copying to clipboard!');
        }
    };

    const navigate = useNavigate();
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
    return (
        <div>
            <Headers />
            <div className="panel mt-6">
                <div>
                    <h2 className="text-xl text-white">Deposit Fund</h2>
                </div>
            </div>
            <div className="relative flex flex-col justify-center rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50 px-6 lg:min-h-[758px] ">
                <div className="flex justify-center   ">
                    <p className="text-white font-extrabold  sm:text-3xl md:text-3xl lg:text-3xl">Make Payment To Add Funds</p>
                </div>
                {/* <p className="text-white">Amount: {amount}</p> */}

                <div className="flex justify-center ">
                    <h1 className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{amount}</h1>
                </div>

                <div className="mb-5 flex flex-col lg:flex-row items-center lg:justify-evenly space-y-4 lg:space-y-0">
                    <div className="max-w-[19rem] w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                        <div className="py-7 px-2">
                            <img src={selectedQRCode.code} alt="QR Code" className="max-w-full h-auto" />
                            <p className="mt-4 text-center text-blue-500 underline">
                                <a href={selectedQRCode.link} target="_blank" rel="noopener noreferrer">
                                    {selectedQRCode.link}
                                </a>
                            </p>

                            <div className="flex justify-center items-center mt-4 space-x-2">
                                <button className="flex justify-center items-center w-10 h-5 bg-orange-600 text-white" onClick={copyToClipboard}>
                                    Copy
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* --------------------------------------- */}
                    <div className="flex flex-col items-center space-y-4 mt-4 lg:mt-0">
                        <div>
                            <p className="text-white">Add Amount</p>
                            <input
                                type="number"
                                placeholder="Enter Amount"
                                className="form-input w-full max-w-[19rem] lg:w-72 mt-2"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                required
                            />
                            <p className="text-red-600">Depositfund only tron TRC-20.</p>
                        </div>

                        <div className="flex flex-col ">
                            <p className="text-white">Transaction ID</p>
                            <input
                                type="text"
                                placeholder="Enter your transaction ID"
                                className="form-input w-full max-w-[19rem] lg:w-72 mt-2 "
                                value={transactionid}
                                onChange={(e) => setTransactionid(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex justify-center items-center py-4">
                            <button className="bg-green-500 text-white w-full max-w-[19rem] lg:w-40 h-10 rounded-sm " onClick={handlePayment}>
                                Confirm Deposit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Depositfund;
