
export default function PrintableLayout({ children }) {
    return (
        <div className="pt-0 px-6 bg-white" >
            <div className="w-full mt-6 ">
                {children}
            </div>
        </div>
    );
}
