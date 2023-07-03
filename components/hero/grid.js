import React, { useState, useRef, useEffect } from 'react';
import { useWindowSize } from 'usehooks-ts';
import anime from 'animejs';

function Tile({ index, click }) {
    return <div className="tile" id={`tile-${index}`} onClick={click}></div>;
}

const useCreateTiles = () => {
    const [tiles, setTiles] = useState([]);
    const { width, height } = useWindowSize();
    const ref = useRef(null);

    const handleStagger = (i, columns, rows) => {
        const element = document.getElementById('tile-' + i);
        const opacity = element?.style.opacity;
        anime({
            targets: '.tile',
            opacity: opacity === '0' ? 1 : 0,
            delay: anime.stagger(50, { grid: [columns, rows], from: i }),
        });
    };

    useEffect(() => {
        const columns = Math.floor(width / 50);
        const rows = Math.floor(height / 50);
        const totalTiles = rows * columns;

        if (ref.current) {
            ref.current.style.setProperty('--columns', columns.toString());
            ref.current.style.setProperty('--rows', rows.toString());
        }

        const newTiles = [];
        for (let i = 0; i < totalTiles; i++) {
            newTiles.push(<Tile index={i} key={i} click={() => handleStagger(i, columns, rows)} />);
        }
        setTiles(newTiles);
    }, [width, height]);

    return [tiles, ref]; // Return as an array
};

export default useCreateTiles;
