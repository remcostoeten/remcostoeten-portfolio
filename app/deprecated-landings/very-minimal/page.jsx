import Image from 'next/image';
import Text from '../../components/Text';
import { Info } from '@mui/icons-material';
export default function Home() {
    return (
        <>
            <div className="container">
                <h1 className="font-inter font-black italic text-white text-4xl mb-4">Remco Stoeten</h1>
                <div className="w-9/12 flex flex-col">
                    <Text text="Front-end developer & knowsitall!" />
                    <Text text="I design and build website templates so you can launch your website in minutes. Check out my latest projects, templates and what I’m up to right now." />
                    <span className="flex flex-col ">
                        <div className="flex">
                            <span className="absolute mt-1">
                                <Info />
                            </span>
                            <span className="ml-6 text-white">
                                <Text text="Friesland, NL" />
                            </span>
                            <span className="work ml-12">
                                <Text text="Employed, but happy to help"></Text>
                            </span>
                        </div>
                        <div className="flex "></div>
                    </span>
                </div>
            </div>
        </>
    );
}
