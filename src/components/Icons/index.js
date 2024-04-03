//import Images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
    faArrowRightToBracket,
    faUserPlus,
    faCircleExclamation,
    faTrash,
    faWrench,
} from '@fortawesome/free-solid-svg-icons';

import ListImages from '~/assets/img';
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
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
        </svg>
    );
};

export const BagIcon = ({ className, width = '1.6rem', height = '1.6rem' }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
        >
            <path
                fillRule="evenodd"
                d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0m-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"
            />
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

export const FireIcon = ({ className, width = '1.6rem', height = '1.6rem' }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            width={width}
            height={height}
            fill="currentColor"
            viewBox="0 0 16 16"
        >
            <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15" />
        </svg>
    );
};

export const NewIcon = ({ className, width = '16px', height = '16px', title }) => {
    return (
        <Image
            className={className}
            width={width}
            height={height}
            src="//bizweb.dktcdn.net/100/344/954/themes/705100/assets/category_2_image.png?1672232161194"
            alt={title}
        />
    );
};

export const EmailIcon = ({ className, width = '1.6rem', height = '1.6rem' }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            width={width}
            height={height}
            fill="currentColor"
            viewBox="0 0 16 16"
        >
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
        </svg>
    );
};

export const ErrorIcon = ({ className, width = '1.6rem', height = '1.6rem' }) => {
    return (
        <>
            <FontAwesomeIcon icon={faCircleExclamation} className={className} width={width} height={height} />
        </>
    );
};

export const TrashIcon = ({ className, width = '1.6rem', height = '1.6rem' }) => {
    return (
        <>
            <FontAwesomeIcon icon={faTrash} className={className} width={width} height={height} />
        </>
    );
};

export const BasketIcon = ({ className, width = '16px', height = '16px' }) => {
    return <Image className={className} width={width} height={height} src={ListImages.basket} alt="category-icons" />;
};

export const FixIcon = ({ className, width = '1.6rem', height = '1.6rem' }) => {
    return (
        <>
            <FontAwesomeIcon icon={faWrench} className={className} width={width} height={height} />
        </>
    );
};
