export default function ErrorMessage({ message = 'Something went wrong.' }) { return <p role="alert" className="rounded-xl bg-coral/10 p-3 text-sm text-coral">{message}</p>; }
