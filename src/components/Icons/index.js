//import Images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartFlatbed } from '@fortawesome/free-solid-svg-icons';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
    faArrowRightToBracket,
    faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';

export const LoginIcon = ({ className, width = '1.6rem', height = '1.6rem' }) => {
    return (
        <>
            <FontAwesomeIcon icon={faArrowRightToBracket} className={className} width={width} height={height} />
        </>
    );
};

export const RegisterIcon = ({ className, width = '1.6rem', height = '1.6rem' }) => {
    return (
        <>
            <FontAwesomeIcon icon={faUserPlus} className={className} width={width} height={height} />
        </>
    );
};

export const XMarkIcon = ({ className, width = '1.6rem', height = '1.6rem' }) => {
    return (
        <>
            <FontAwesomeIcon icon={faCircleXmark} className={className} width={width} height={height} />
        </>
    );
};

export const SpinnerIcon = ({ className, width = '1.6rem', height = '1.6rem' }) => {
    return (
        <>
            <FontAwesomeIcon icon={faSpinner} className={className} width={width} height={height} />
        </>
    );
};

export const SearchIcon = ({ className, width = '1.6rem', height = '1.6rem' }) => {
    return (
        <>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={className} width={width} height={height} />
        </>
    );
};

export const HeartIcon = ({ className, width = '1.6rem', height = '1.6rem' }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            width={width}
            height={height}
            fill="currentColor"
            viewBox="0 0 16 16"
        >
            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
        </svg>
    );
};

export const CartIcon = ({ className, width = '1.6rem', height = '1.6rem' }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
        >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
        </svg>
    );
};

export const PhoneIcon = ({ className, width = '1.6rem', height = '1.6rem' }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
        >
            <path
                fillRule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
            />
        </svg>
    );
};

export const LocationIcon = ({ className, width = '1.6rem', height = '1.6rem' }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            width={width}
            height={height}
            fill="currentColor"
            viewBox="0 0 16 16"
        >
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
        </svg>
    );
};

export const HomeIcon = ({ className, width = '1.6rem', height = '1.6rem' }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            width={width}
            height={height}
            fill="currentColor"
            viewBox="0 0 16 16"
        >
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
            <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
        </svg>
    );
};

// category icons
export const FilterIcon = ({ className, width = '16px', height = '16px' }) => {
    return (
        <Image
            className={className}
            width={width}
            height={height}
            src="//bizweb.dktcdn.net/thumb/icon/100/344/954/themes/705100/assets/link_icon_1.png?1672232161194"
            alt="category-icons"
        />
    );
};

export const OxiIcon = ({ className, width = '16px', height = '16px' }) => {
    return (
        <Image
            className={className}
            width={width}
            height={height}
            src="//bizweb.dktcdn.net/thumb/icon/100/344/954/themes/705100/assets/link_icon_2.png?16722321611944"
            alt="category-icons"
        />
    );
};

export const AquaSoilIcon = ({ className, width = '16px', height = '16px' }) => {
    return (
        <Image
            className={className}
            width={width}
            height={height}
            src="//bizweb.dktcdn.net/thumb/icon/100/344/954/themes/705100/assets/link_icon_3.png?1672232161194"
            alt="category-icons"
        />
    );
};

export const AquaGadgetIcon = ({ className, width = '16px', height = '16px' }) => {
    return (
        <Image
            className={className}
            width={width}
            height={height}
            src="//bizweb.dktcdn.net/thumb/icon/100/344/954/themes/705100/assets/link_icon_4.png?1672232161194"
            alt="category-icons"
        />
    );
};

export const FoodForFishIcon = ({ className, width = '16px', height = '16px' }) => {
    return (
        <Image
            className={className}
            width={width}
            height={height}
            src="//bizweb.dktcdn.net/thumb/icon/100/344/954/themes/705100/assets/link_icon_5.png?1672232161194"
            alt="category-icons"
        />
    );
};

export const AquaMedicineIcon = ({ className, width = '16px', height = '16px' }) => {
    return (
        <Image
            className={className}
            width={width}
            height={height}
            src="//bizweb.dktcdn.net/thumb/icon/100/344/954/themes/705100/assets/link_icon_6.png?1672232161194"
            alt="category-icons"
        />
    );
};

export const AquaPlant = ({ className, width = '16px', height = '16px' }) => {
    return (
        <Image
            className={className}
            width={width}
            height={height}
            src="//bizweb.dktcdn.net/thumb/icon/100/344/954/themes/705100/assets/link_icon_7.png?1672232161194"
            alt="category-icons"
        />
    );
};

export const FishIcon = ({ className, width = '16px', height = '16px' }) => {
    return (
        <Image
            className={className}
            width={width}
            height={height}
            src="//bizweb.dktcdn.net/thumb/icon/100/344/954/themes/705100/assets/link_icon_8.png?1672232161194"
            alt="category-icons"
        />
    );
};

export const ShrimpIcon = ({ className, width = '16px', height = '16px' }) => {
    return (
        <Image
            className={className}
            width={width}
            height={height}
            src="//bizweb.dktcdn.net/thumb/icon/100/344/954/themes/705100/assets/link_icon_9.png?1672232161194"
            alt="category-icons"
        />
    );
};

export const LeftButtonIcon = ({ className, width = '1.6rem', height = '1.6rem' }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            width={width}
            height={height}
            fill="currentColor"
            viewBox="0 0 16 16"
        >
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
        </svg>
    );
};

export const RightButtonIcon = ({ className, width = '1.6rem', height = '1.6rem' }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            width={width}
            height={height}
            fill="currentColor"
            viewBox="0 0 16 16"
        >
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
        </svg>
    );
};
