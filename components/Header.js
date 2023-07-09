import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

function Header() {
    return (
        <header className="bg-offwhite text-offblack flex justify-around p-4 items-start content-center">
            <SignedIn>
                <UserButton />
            </SignedIn>
            <SignedOut>
                <SignInButton />
            </SignedOut>
        </header>
    );
}

export default Header;
