export default function Loader({ label = 'Loading' }) { return <div className="animate-pulse text-sm text-ink/45 dark:text-white/45" role="status">{label}...</div>; }
