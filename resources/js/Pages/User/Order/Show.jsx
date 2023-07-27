import PrimaryButton from '@/Components/PrimaryButton';
import PrintableLayout from '@/Layouts/PrintableLayout';
import { Head, Link } from '@inertiajs/react';
import moment from 'moment/min/moment-with-locales';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

export default function Show({ auth, order }) {

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
                    <Link href={route('user.order.index')} id='goBack' data-html2canvas-ignore>
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
                                            المكتبة
                                        </th>
                                        <th scope="col" className="px-3 py-3">
                                            الكتاب
                                        </th>
                                        <th scope="col" className="px-3 py-3">
                                            العرض
                                        </th>
                                        <th scope="col" className="px-3 py-3">
                                            الإجمالي
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {order.details.map(detail => {
                                        return (
                                            <tr key={detail.id} className="bg-white border">
                                                <th scope="row" className="px-3 py-4 text-gray-600 whitespace-nowrap ">
                                                    {detail.book.library !== null ?
                                                        <div>
                                                            <h1> {detail.book.library.name}</h1>
                                                            {detail.book.library.city && detail.book.library.district &&
                                                                <h1 className='text-sm text-gray-400'>
                                                                    {detail.book.library.city + ' - ' + detail.book.library.district}
                                                                </h1>
                                                            }
                                                        </div> :
                                                        <div>
                                                            <h1> {detail.book.branch.name}</h1>
                                                            {detail.book.branch.city && detail.book.branch.district &&
                                                                <h1 className='text-sm text-gray-400'>
                                                                    {detail.book.branch.city + ' - ' + detail.book.branch.district}
                                                                </h1>
                                                            }
                                                        </div>
                                                    }
                                                </th>
                                                <th scope="row" className="px-3py-4  text-gray-600 whitespace-nowrap ">
                                                    <div>
                                                        <h1>
                                                            {detail.book.book.book_name}
                                                        </h1>
                                                        <span className='text-sm text-gray-400'>
                                                            {detail.book.book.author_name + ' - ' + detail.book.book.edition_number + ' - ' + detail.book.book.volume_number}
                                                        </span>
                                                    </div>
                                                </th>
                                                <th scope="row" className="px-3 py-4  text-gray-600 whitespace-nowrap ">
                                                    {detail.book.offer ? detail.book.offer : 'لايوجد'}
                                                </th>
                                                <th scope="row" className="px-3 py-4  text-gray-600 whitespace-nowrap ">
                                                    {detail.book.price} ريال
                                                </th>
                                            </tr>
                                        )
                                    })}


                                </tbody>
                            </table>
                        </div>

                        <div className='w-full flex items-center justify-between pt-10'>
                            <div>
                                <p className='text-lg text-gray-700'>هذي الفاتورة تقوم بعرضعها على اصحاب المكتبات التي قمت بالطلب منها .</p>
                            </div>
                            <div>
                                <h1 className='flex flex-col gap-3 text-lg font-semibold text-gray-700'>
                                    <span>إجمالي قيمة المشتريات</span>
                                    <span>{order.total_payment} ريال</span>
                                </h1>
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