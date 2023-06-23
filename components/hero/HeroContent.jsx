'use client';
import 'animate.css';
import Link from 'next/link';
import Logo from '../icons/logo';
import CursorPointer from '../Cursor';
import ToggleColor from '../ToggleColor';
import LinkIcon from '@/components/icons/Link';
import { Fragment, useState } from 'react';
import IconGrid from './IconGrid';
export default function HeroContent() {
    const [mouseSize, setMouseSize] = useState(25);
    const [emoji, setEmoji] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };
    return (
        <section className="hero-height bg-themered">
            <div className="flex  flex-col color-theme mb-72 md:row-end-auto md:justify-self-start md:self-start md:pt-60">
                <IconGrid />
                {/* <h1
                    className="w-fit text-bold relative text-6xl font-bold scroll-m-80 snap-center caret-yellow-300 scroll-smooth mb-3 2xl:w-3/5"
                    onMouseEnter={() => {
                        setMouseSize(155);
                    }}
                    onMouseLeave={() => {
                        setMouseSize(25);
                    }}
                >
                    Hello.. my name is{' '}
                    <span
                        onMouseEnter={() => {
                            setMouseSize(70);
                            setEmoji('👀');
                        }}
                        onMouseLeave={() => {
                            setMouseSize(25);
                            setEmoji(null);
                        }}
                        onClick={handleOpenModal}
                        className="relative cursor-Link"
                    >
                        Remco <LinkIcon />
                    </span>
                    <span
                        className="absolute font-sm"
                        onMouseEnter={() => {
                            setMouseSize(90);
                        }}
                        onMouseLeave={() => {
                            setMouseSize(25);
                        }}
                    ></span>
                    from the Netherlands
                </h1>
                <p
                    className="text-xl font-normal"
                    onMouseEnter={() => {
                        setMouseSize(120);
                    }}
                    onMouseLeave={() => {
                        setMouseSize(25);
                    }}
                >
                    I create things, mostly with code. Shift divs around and make them look pretty. Or well, at least I try to.
                </p>
                <button
                    className="text-theme bg-transparent align-baseline border-2 color-theme rounded-full py-7 px-11 transition duration-250 ease-in-out select-none hover:bg-themered hover:text-themeblue self-start text-base mt-6 font-bold"
                    onMouseEnter={() => {
                        setMouseSize(55);
                        setEmoji('😀');
                    }}
                    onMouseLeave={() => {
                        setMouseSize(25);
                        setEmoji(null);
                    }}
                >
                    <Link target="_blank" href="https://previous.remcostoeten.com/">
                        goto previous site
                    </Link>
                </button>{' '} */}
                <CursorPointer size={mouseSize} emoji={emoji} />
            </div>
        </section>
    );
}
