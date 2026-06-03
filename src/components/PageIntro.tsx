type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string; // Add this optional prop
};

export default function PageIntro({ eyebrow, title, description, className = "bg-white" }: PageIntroProps) {
  return (
    // We replace the hardcoded "bg-white" with the dynamic ${className}
    <section className={`relative overflow-hidden px-6 pb-14 pt-32 lg:px-[6%] lg:pb-16 ${className}`}>
      {/* Background decoration layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,184,0,0.16),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(0,0,0,0.06),transparent_24%)]" />
      
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[4px] text-[#F5B800]">
            {eyebrow}
          </p>
          <h1 className="font-display text-[clamp(3rem,7vw,5.8rem)] leading-none tracking-[2px] text-gray-900">
            {title}
          </h1>
          <div className="my-6 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#F5B800] via-amber-400 to-transparent" />
          <p className="max-w-2xl text-lg leading-8 text-gray-700">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}