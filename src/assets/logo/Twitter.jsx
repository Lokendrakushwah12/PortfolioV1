import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext';

const Twitter = ({ url }) => {
    const { darkMode } = useContext(ThemeContext);
    return (
        <a className="gap-1 font-normal shrink-0 rounded-full ring-control focus-visible:ring-2 outline-none outline-0 block aspect-square p-0.5 hover:brightness-75 dark:brightness-50 hover:dark:brightness-75" target="_blank" href={url} contenteditable="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 22" fill="none">
                <path d="M18.9014 0.15332H22.5816L14.5415 9.34258L24 21.8471H16.5941L10.7935 14.2632L4.15631 21.8471H0.473926L9.07356 12.0182L0 0.15332H7.59394L12.8372 7.08532L18.9014 0.15332ZM17.6098 19.6444H19.649L6.48589 2.24037H4.29759L17.6098 19.6444Z" fill={darkMode ? "#D4D4D8" : "#777"} />
                <script xmlns="" />
            </svg>
        </a>
    )
}

export default Twitter