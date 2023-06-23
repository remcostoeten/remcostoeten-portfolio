import GithubLogo from './ui-elements/GithubLogo';
import Gitlab from './icons/Gitlab';
import LinkedIn from './icons/LinkedIn';
export default function Navigation() {
    return (
        <header className="header-icons flex gap-3">
            <GithubLogo /> <Gitlab />
            <LinkedIn />
        </header>
    );
}
