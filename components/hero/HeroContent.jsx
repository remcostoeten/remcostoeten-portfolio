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
            </div>
        </section>
    );
}
