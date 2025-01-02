import PropTypes from 'prop-types';
export const Layout = ({ children })=> {
    return (
        <div className="relative flex flex-col items-center sm:pt-[81px] pt-28 bg-[#FEFEFE]">
            {children}
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
};
