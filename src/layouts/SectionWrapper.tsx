type SectionWrapperProps = {
    children: React.ReactNode;
    fullWidth?: boolean;
    className?: string;
};

export default function SectionWrapper({ children, fullWidth = false, className = "" }: SectionWrapperProps) {
    return (
        <section className={`${fullWidth ? "w-full" : "max-w-[1440px] mx-auto"} ${className}`}>
            <div className="w-full flex justify-center">
                <div className="w-full max-w-[1440px] px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 py-16">
                    {children}
                </div>
            </div>
        </section>
    );
}

