import {features} from "../../data/features";
export const Features = ()=> {
    return (
        <div className="bg-white py-12 ">
            <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 sm:gap-x-10 md:gap-0 md:grid-cols-4 gap-6 text-center  rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.2)]">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center p-4 border-r last:border-r-0"
                    >
                        {feature.icon}
                        <h3 className="text-lg font-medium text-gray-800 mt-4">{feature.title}</h3>
                        <p className="text-gray-500 text-sm">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
