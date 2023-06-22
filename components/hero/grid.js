'use client';
import { useState, useEffect } from 'react';
import anime from 'animejs';

const Grid = () => {
    const [columns, setColumns] = useState(0);
    const [rows, setRows] = useState(0);
    const [toggled, setToggled] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            createGrid();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggle = () => {
        setToggled(!toggled);
        document.body.classList.toggle('toggled');
    };

    const handleOnClick = (index) => {
        toggle();

        anime({
            targets: '.tile',
            opacity: toggled ? 0 : 1,
            delay: anime.stagger(50, {
                grid: [columns, rows],
                from: index,
            }),
        });
    };

    const createTile = (index) => {
        return <div className="tile" style={{ opacity: toggled ? 0 : 1 }} onClick={() => handleOnClick(index)} key={index}></div>;
    };

    const createGrid = () => {
        const size = window.innerWidth > 800 ? 100 : 50;
        const newColumns = Math.floor(window.innerWidth / size);
        const newRows = Math.floor(window.innerHeight / size);

        setColumns(newColumns);
        setRows(newRows);
    };

    useEffect(() => {
        createGrid();
    }, []);

    const tiles = Array.from(Array(columns * rows)).map((_, index) => createTile(index));

    return (
        <>
            <div id="tiles">{tiles}</div>

            <h1 id="title" className="centered">
                The name of the game is <span className="fancy">Chess</span>.
            </h1>

            <i id="icon" className="fa-solid fa-chess centered"></i>

            <a id="source-link" className="meta-link" href="https://cdpn.io/YzXOGpm" target="_blank">
                <i className="fa-solid fa-link"></i>
                <span>Source</span>
            </a>

            <a id="yt-link" className="meta-link" href="https://youtu.be/bAwEj_mSzOs" target="_blank">
                <i className="fa-brands fa-youtube"></i>
                <span>5 min tutorial</span>
            </a>
        </>
    );
};

export default Grid;
