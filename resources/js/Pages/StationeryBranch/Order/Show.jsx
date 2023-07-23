import PrimaryButton from '@/Components/PrimaryButton';
import PrintableLayout from '@/Layouts/PrintableLayout';
import { Head, Link } from '@inertiajs/react';
import moment from 'moment/min/moment-with-locales';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Show({ auth, order }) {
    const [options, setOptions] = useState(null);
    useEffect(() => {
        const decodedOptions = JSON.parse(order.options);

        setOptions(decodedOptions);
    }, [order.options])

    const printInvoice = () => {
        const divToPrint = document.getElementById('divToPrint');
        html2canvas(divToPrint, {
            logging: false,
            scale: 2
        })
            .then((canvas) => {
                const convertToImage = canvas.toDataURL('image/png');
                const PDF = new jsPDF();
                PDF.addImage(convertToImage, 'PNG', 0, 0, 214, 150);
                PDF.save('فاتورة راحة - ' + order.id + '.pdf');
            }).catch(error => {
                alert('هناك خطأ في تحميل الفاتورة، يمكنك عمل تصوير للشاشة');
            })
    }

    return (
        <PrintableLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">تفاصيل الطلب #{order.id}</h2>}
        >
            <Head title={`تفاصل الطلب #${order.id}`} />
            <div className="max-h-screen max-w-max mx-auto py-6" id="divToPrint">
                <div className='flex  items-center justify-between px-6 pb-10'>
                    <Link href="/">
                        <ApplicationLogo className=" w-20 h-20 fill-current text-gray-500" />
                    </Link>
                    <Link href={route('stationery_branch.branch.stationery.orders')} id='goBack' data-html2canvas-ignore>
                        <PrimaryButton>
                            العودة
                        </PrimaryButton>
                    </Link>
                </div>
                <div className="sm:px-6 lg:px-8">
                    <div className=''>
                        <div className='w-full flex items-center justify-between'>
                            <div className='flex flex-col gap-3'>
                                <h1 className='text-lg  text-gray-600'>رقم الطلب : {order.id}</h1>
                                <h1 className='text-lg  text-gray-600'>تاريخ الإنشاء : {moment(order.created_at).locale('ar').format('MMMM Do YYYY')}</h1>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h1 className='text-lg  text-gray-600'>{order.user.username}</h1>
                                <h1 className='text-lg  text-gray-600'>{order.user.phone}</h1>
                                {order.user.city && order.user.district &&
                                    <h1 className='text-lg  text-gray-600'>
                                        {order.user.city + ' - ' + order.user.district}
                                    </h1>
                                }
                            </div>
                        </div>
                        <div className="relative overflow-x-auto">
                            <h1 className='py-4 text-xl font-semibold'>الطلبات</h1>
                            <table className="w-full text-xs sm:text-lg text-right text-gray-500 shadow border">
                                <thead className="text-xs sm:text-lg text-gray-700  border ">
                                    <tr>
                                        <th scope="col" className="px-3 py-3">
                                            القرطاسية
                                        </th>
                                        <th scope="col" className="px-3 py-3">
                                            المذكرة
                                        </th>
                                        <th scope="col" className="px-3 py-3">
                                            عدد الصفحات
                                        </th>
                                        <th scope="col" className="px-3 py-3">
                                            خيارات الطباعة
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border">
                                        <th scope="row" className="px-3 py-4 text-gray-600 whitespace-nowrap ">
                                            {order.stationery_branch.name}
                                            {order.stationery_branch.city && order.stationery_branch.district &&
                                                <h1 className='text-sm text-gray-400'>
                                                    {order.stationery_branch.city + ' - ' + order.stationery_branch.district}
                                                </h1>
                                            }
                                        </th>
                                        <th scope="row" className="px-3 py-4 text-gray-600 whitespace-nowrap ">
                                            <a href={order.note.url} target='blank'>
                                                <PrimaryButton>مشاهدة</PrimaryButton>
                                            </a>
                                        </th>
                                        <th scope="row" className="px-3 py-4 text-gray-600 whitespace-nowrap ">
                                            {order.selected_pages} صفحة
                                        </th>
                                        <th scope="row" className="px-3 py-4  text-gray-600 whitespace-nowrap ">
                                            {options?.map((option) => {
                                                return (
                                                    <div key={option.id} className='flex flex-col items-center gap-3'>
                                                        <h3 className='text-md'>
                                                            {option.display_name}
                                                        </h3>
                                                    </div>
                                                )
                                            })}
                                        </th>

                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className='w-full flex flex-col items-center justify-between pt-10'>
                            <div>
                                <h1 className='flex flex-col items-center gap-3 text-lg font-semibold text-gray-700'>
                                    <span>إجمالي قيمة المشتريات</span>
                                    <span>{order.total} ريال</span>
                                </h1>
                            </div>
                            <div className='mt-3'>
                                <p className='text-lg text-gray-700'>هذي الفاتورة تقوم بعرضعها على اصحاب المكتبات التي قمت بالطلب منها .</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center mt-10'>
                <PrimaryButton onClick={printInvoice}>
                    تحميل الفاتورة
                </PrimaryButton>
            </div>
        </PrintableLayout>
    )
}