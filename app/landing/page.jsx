'use client';
import React from 'react';
import useCreateTiles from './../../components/hero/grid';
export default function page() {
    const [tiles, ref] = useCreateTiles();
    return (
        <>
            <useCreateTiles />
            <div className=" text-offwhite ">
                <div className="mx-auto w-[1050px]">
                    <div className="text-wrapper p-20">
                        <h1 className="text-7xl font-bold">
                            Hey, I'm remco<span className="text-themeorange">.</span>
                        </h1>
                        <h2 className="font-semibold text-3xl pt-3">
                            I'm a <span className="text-themeorange">front-end developer</span>
                        </h2>
                        <p className="text-sm mt-3">
                            I create things, mostly with code. Shift divs around and make them look pretty. Or well, at least I try to. Aspiring to be somewhat of an fullstack engineer and even some
                            dev-ops.
                        </p>
                        <a
                            href="https://previous.remcostoeten.com/"
                            target="_blank"
                            className="mt-8 relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
                        >
                            <span className="w-48 h-48 rounded rotate-[-40deg] bg-themeorange absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">go to previous site</span>
                        </a>
                        <div className="btn"></div>
                    </div>
                    <div ref={ref}>{tiles}</div>{' '}
                </div>
            </div>
        </>
    );
}
