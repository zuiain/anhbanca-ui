import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faEarthAsia, faGear, faKeyboard, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';

export const defaultMenu = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                    children: {
                        title: 'English',
                        data: [{ title: 'English 2' }, { title: 'English 3' }],
                    },
                },
                {
                    type: 'language',
                    code: 'vn',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'tl',
                    title: 'Thailand',
                },
                {
                    type: 'language',
                    code: 'laos',
                    title: 'Laos',
                },
                {
                    type: 'language',
                    code: 'cn',
                    title: 'Chinese',
                },
                {
                    type: 'language',
                    code: 'jn',
                    title: 'Japanese',
                },
                {
                    type: 'language',
                    code: 'kr',
                    title: 'Korean',
                },
                {
                    type: 'language',
                    code: 'vn',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'tl',
                    title: 'Thailand',
                },
                {
                    type: 'language',
                    code: 'laos',
                    title: 'Laos',
                },
                {
                    type: 'language',
                    code: 'cn',
                    title: 'Chinese',
                },
                {
                    type: 'language',
                    code: 'jn',
                    title: 'Japanese',
                },
                {
                    type: 'language',
                    code: 'kr',
                    title: 'Korean',
                },
                {
                    type: 'language',
                    code: 'laos',
                    title: 'Laos',
                },
                {
                    type: 'language',
                    code: 'cn',
                    title: 'Chinese',
                },
                {
                    type: 'language',
                    code: 'jn',
                    title: 'Japanese',
                },
                {
                    type: 'language',
                    code: 'kr',
                    title: 'Korean',
                },
                {
                    type: 'language',
                    code: 'laos',
                    title: 'Laos',
                },
                {
                    type: 'language',
                    code: 'cn',
                    title: 'Chinese',
                },
                {
                    type: 'language',
                    code: 'jn',
                    title: 'Japanese',
                },
                {
                    type: 'language',
                    code: 'kr',
                    title: 'Korean',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and Help',
        to: './feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard Shortcuts',
    },
];

export const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View Profile',
        to: './profile',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get Coins',
        to: './coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: './settings',
    },
    ...defaultMenu,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log Out',
        to: './logout',
        separate: true,
    },
];
