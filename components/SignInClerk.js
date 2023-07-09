import { SignIn } from '@clerk/nextjs';

const SignIn = () => (
    <SignIn
        appearance={{
            elements: {
                formButtonPrimary: 'bg-slate-500 hover:bg-slate-400 text-sm normal-case px=-10',
            },
        }}
    />
);

export default SignIn;
