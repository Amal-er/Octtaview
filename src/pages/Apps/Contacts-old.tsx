// import { useState, Fragment, useEffect } from 'react';
// import { Dialog, Transition } from '@headlessui/react';
// import Swal from 'sweetalert2';
// import { useDispatch } from 'react-redux';
// import { setPageTitle } from '../../Slice/themeConfigSlice';
// import IconUserPlus from '../../components/Icon/IconUserPlus';
// import IconListCheck from '../../components/Icon/IconListCheck';
// import IconLayoutGrid from '../../components/Icon/IconLayoutGrid';
// import IconSearch from '../../components/Icon/IconSearch';
// import IconUser from '../../components/Icon/IconUser';
// import IconFacebook from '../../components/Icon/IconFacebook';
// import IconInstagram from '../../components/Icon/IconInstagram';
// import IconLinkedin from '../../components/Icon/IconLinkedin';
// import IconTwitter from '../../components/Icon/IconTwitter';
// import IconX from '../../components/Icon/IconX';
// import { Header } from '@mantine/core';
// import Headers from '../../components/Layouts/Header';
// import { IRootState, useAppDispatch, useAppSelector } from '../../Slice/index';
// import { fetchAddFundHistory } from '../../Slice/packageSlice';

// const Contacts1 = () => {
//     const dispatch = useAppDispatch();

//     // console.log('Data:', data);
//     // console.log('Loading:', loading);
//     // console.log('Error:', error);
//     const { data, loading, error } = useAppSelector((state) => state.addFundHistoryReducer);
//     let statusData;
//     if (data) {
//         // statusData = data.addFundHistory;
//         console.log(statusData);
//     }

//     useEffect(() => {
//         dispatch(fetchAddFundHistory());
//     }, [dispatch]);

//     // if (loading) {
//     //     return <p>Loading...</p>;
//     // }

//     // if (error) {
//     //     return <p>Error: {error}</p>;
//     // }

//     return (
//         <>
//             <Headers />
//             <div className="md:w-full md:h-full p-4 flex flex-col justify-center items-center">
//                 <h1 className="text-2xl font-bold mb-4">View Details</h1>
//                 <div className="flex flex-col md:flex-row w-full md:w-full md:h-full">
//                     <div className="md:w-1/2">
//                         <table className="w-full border md:w-full">
//                             <thead>
//                                 <tr className="border-b">
//                                     <th className="p-2">slno</th>
//                                     <th className="p-2">email</th>
//                                     <th className="p-2">Phone number</th>
//                                     <th className="p-2">Transaction Password</th>
//                                     <th className="p-2">Amount</th>
//                                     <th className="p-2">Status</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {statusData &&
//                                     statusData.map((item: any, index: any) => (
//                                         <tr key={item._id} className="border-b">
//                                             <td className="p-2">
//                                                 <div className="font-semibold text-red">{index + 1}</div>
//                                             </td>
//                                             <td className="p-2">
//                                                 <div className="font-semibold">{item && item.name}</div>
//                                             </td>
//                                             <td className="p-2">
//                                                 <div className="font-semibold">{item && item.phone}</div>
//                                             </td>
//                                             <td className="p-2">
//                                                 <div className="font-semibold">{item && item.transactionPassword}</div>
//                                             </td>
//                                             <td className="p-2">
//                                                 <div className="font-semibold">{item && item.email}</div>
//                                             </td>
//                                             <td className="p-2">
//                                                 <div className="font-semibold">{item && item.status}</div>
//                                             </td>
//                                         </tr>
//                                     ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Contacts1;
