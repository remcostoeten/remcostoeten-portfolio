import PreLoader from '@/components/ui-elements/Preloader';
import './globals.scss';
import { Roboto } from 'next/font/google';
import Logo from '@/components/icons/logo';
import ParallaxEffect from '@/components/ParallaxEffect';
import AlertMessage from '@/components/ui-elements/AlertMessage';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700', '900'],
    style: ['italic', 'normal'],
});

export const metadata = {
    title: 'Hello i am remco from ...🔥',
    description:
        'Remco Stoeten, front-end developer with six years experience aspiring to be more than just a so called "divjesschuiver. Site for contact information, showcase of projects (Works in progress) and several tools like URL Extract tools and todo / kanban board"',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={roboto.className + ''}>
                <AlertMessage id="toast-warning" type="warning" message="Site is currently under construction. Hence (most likely) broken UI." />
                <div className="flex  md:flex-row flex-col">
                    <PreLoader />
                    <>
                        <div className="initialHide"> {children}</div>
                    </>
                </div>
            </body>
        </html>
    );
}
