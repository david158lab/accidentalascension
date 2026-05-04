type SocialLinkProps = {
  href: string;
  label: string;
  children: React.ReactNode;
};

export function SocialLink({ href, label, children }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center gap-3 px-6 py-3 rounded-full
        bg-charcoal/5 dark:bg-off-white/5
        border border-silver/20 dark:border-silver/10
        hover:border-magenta/40 dark:hover:border-magenta/40
        hover:bg-charcoal/10 dark:hover:bg-off-white/10
        transition-all duration-300 group"
    >
      <span className="w-5 h-5 text-mid-grey group-hover:text-magenta transition-colors duration-300">
        {children}
      </span>
      <span className="text-sm font-medium text-charcoal dark:text-off-white">
        {label}
      </span>
    </a>
  );
}
