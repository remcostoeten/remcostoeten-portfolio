export default function Text({ text, className }) {
    return (
        <>
            <p className={`font-mono text-base font-normal tracking-tight leading-7 my-5 text-left text-grey mb-4 ${className}`}>{text}</p>
        </>
    );
}
