import PropTypes from 'prop-types';

export function OrdersCard({ totalPrice, totalProducts, date }) {
    return (
        <div className="flex justify-between items-center mb-3 border border-gray-300 hover:border-[#ff6c00] shadow-md w-80 p-4 rounded-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            <div className="flex flex-col">
                <span className="font-light text-gray-600">{date}</span>
                <span className="font-light text-gray-700">{totalProducts} artículos</span>
            </div>
            <span className="font-medium text-2xl text-gray-900">{totalPrice}</span>
        </div>
    );
}


OrdersCard.propTypes = {
    totalPrice: PropTypes.number.isRequired,
    totalProducts: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired
};

OrdersCard.defaultProps = {
    totalPrice: 0,
    totalProducts: 0,
    date: "No Date",
};