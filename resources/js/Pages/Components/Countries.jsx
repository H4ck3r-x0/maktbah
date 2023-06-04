export default function Countries({ className, countries, onChange, isFocused = false, ...props }) {
    return (
        <select
            {...props}
            onChange={onChange}
            className={`w-full mt-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ` + className}
            autoFocus={isFocused}
        >
            <option value="">أختر الدولة</option>
            {
                countries.map(country =>
                    <option value={country.name} key={country.id}>{country.name}</option>
                )
            }
        </select>
    )
}