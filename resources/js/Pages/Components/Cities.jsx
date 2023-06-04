export default function Cities({ className, cities, onChange, ...props }) {
    return (
        <select
            {...props}
            onChange={onChange}
            className={`w-full mt-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ` + className}>
            <option value="">أختر المدينة</option>
            {
                cities.map(city =>
                    <option value={city.name} key={city.id}>{city.name}</option>
                )
            }
        </select>
    )
}