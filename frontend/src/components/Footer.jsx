import React from 'react';
import { BsArrowUpCircleFill } from 'react-icons/bs';

const Footer = () => {
    window.onload = (function () {
        setTimeout(() => {
            const chatBtn = document.getElementById("chat-icon");
            chatBtn.classList.toggle("expanded");
        }, 3000);
    });

    window.onscroll = (function () {
        if (window.scrollY > 15) {
            document.getElementById("sticky").classList.add("popup");
            document.getElementById("sticky2").classList.add("popup2");
        } else {
            document.getElementById("sticky").classList.remove("popup");
            document.getElementById("sticky2").classList.remove("popup2");
        }
    });

    function topFunction() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div>
            <div className="h-[100px] bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-100 block w-full flex justify-center">
                <h3 className='text-small pt-10'>Powered by
                    <a href="https://github.com/ebercalderon" target="_blank" rel="noreferrer"> <u>Eber Calderon</u></a>
                </h3>
            </div>
            <button className="stickyGoToTop fixed right-5 btn btn-ghost rounded-btn m-5 dark:text-slate-200" id="sticky2" onClick={topFunction}>
                <BsArrowUpCircleFill style={{ fontSize: 25 }} />
            </button>
            <div className="sticky-footer hidden md:block w-full fixed left-0 right-0 bottom-0" id="sticky">
            </div>
        </div>
    );
};

export default Footer;