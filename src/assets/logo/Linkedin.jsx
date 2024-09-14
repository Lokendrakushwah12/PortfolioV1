import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const Linkedin = ({ url }) => {
    const { darkMode } = useContext(ThemeContext);

    return (
        <a className="gap-1 font-normal shrink-0 rounded-full ring-control focus-visible:ring-2 outline-none outline-0 block aspect-square p-0.5 hover:brightness-75 dark:brightness-50 hover:dark:brightness-75" target="_blank" href={url} contenteditable="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 18 18" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.91756 0.697641C1.24413 0.697641 0.698242 1.23036 0.698242 1.8871V16.1129C0.698242 16.7698 1.24413 17.3023 1.91756 17.3023H15.9789C16.6523 17.3023 17.1982 16.7698 17.1982 16.1129V1.8871C17.1982 1.23036 16.6523 0.697641 15.9789 0.697641H1.91756ZM5.70078 7.09953V14.5975H3.20861V7.09953H5.70078ZM5.86468 4.78052C5.86468 5.50005 5.32376 6.07581 4.45468 6.07581H4.43844C3.60209 6.07581 3.06128 5.50005 3.06128 4.78052C3.06128 4.0448 3.61867 3.48501 4.47117 3.48501C5.32376 3.48501 5.84849 4.0448 5.86468 4.78052ZM9.57194 14.5975H7.07978C7.07978 14.5975 7.11256 7.80309 7.07985 7.09953H9.57201V8.1611C9.9032 7.65019 10.496 6.92359 11.818 6.92359C13.4576 6.92359 14.6871 7.99523 14.6871 10.2983V14.5975H12.1952V10.5862C12.1952 9.57828 11.8344 8.8907 10.9326 8.8907C10.2442 8.8907 9.8341 9.35441 9.65394 9.80215C9.58813 9.96234 9.57194 10.1862 9.57194 10.4103V14.5975ZM9.57201 8.1611L9.55536 8.18692H9.57201V8.1611Z" fill={darkMode ? "#D4D4D8" : "#777"} />
                <script xmlns="" />
            </svg>
        </a>
    )
}

export default Linkedin