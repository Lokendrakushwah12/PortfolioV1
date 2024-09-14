import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext';

const GitHub = ({ url }) => {
    const { darkMode } = useContext(ThemeContext);
    return (
        <a className="gap-1 font-normal shrink-0 rounded-full ring-control focus-visible:ring-2 outline-none outline-0 block aspect-square p-0.5 hover:brightness-75 dark:brightness-50 hover:dark:brightness-75" target="_blank" href={url} contenteditable="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g id="github" clip-path="url(#clip0_7514_111)">
                    <path id="Vector" d="M12 0.299805C5.36229 0.299805 0 5.78284 0 12.57C0 17.9759 3.45086 22.579 8.21143 24.2267C8.81143 24.3424 9.03771 23.9585 9.03771 23.6518V21.5816C5.7 22.3091 4.98686 19.9322 4.98686 19.9322C4.42457 18.5123 3.63771 18.1302 3.63771 18.1302C2.55086 17.3624 3.71314 17.401 3.71314 17.401C4.91314 17.4781 5.54914 18.6666 5.54914 18.6666C6.63771 20.5457 8.36229 20.0093 9.03771 19.7008C9.15086 18.8962 9.44914 18.3598 9.78686 18.0531C7.12457 17.7463 4.31314 16.6735 4.31314 11.9951C4.31314 10.6524 4.76229 9.5796 5.54914 8.69789C5.43771 8.39114 5.02457 7.12555 5.66229 5.43752C5.66229 5.43752 6.67371 5.0922 8.96229 6.70311C9.93996 6.42919 10.9486 6.28775 11.9623 6.28241C12.9737 6.28241 14.0246 6.43491 14.9623 6.70311C17.2509 5.13077 18.2623 5.43752 18.2623 5.43752C18.9 7.12555 18.4869 8.39114 18.3754 8.69789C19.164 9.53928 19.6131 10.6524 19.6131 11.9933C19.6131 16.7103 16.8 17.7463 14.1377 18.0531C14.5491 18.4369 14.9623 19.1644 14.9623 20.3143V23.6903C14.9623 24.0357 15.1869 24.4178 15.7869 24.2653C20.5509 22.5773 24 17.9759 24 12.57C24 5.78284 18.6377 0.299805 12 0.299805Z" fill={darkMode ? "#D4D4D8" : "#777"} />
                </g>
                <defs>
                    <clipPath id="clip0_7514_111">
                        <rect width="24" height="24" fill="white" />
                    </clipPath>
                </defs>
                <script xmlns="" />
            </svg>
        </a>
    )
}

export default GitHub