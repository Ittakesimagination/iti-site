export default function Footer() {
  return (
    <footer className="section pt-8">
      <div className="border-t border-neutral-200 dark:border-neutral-800 pt-6 text-sm text-neutral-600 dark:text-neutral-400">
        <p>© {new Date().getFullYear()} It Takes Imagination™ — All rights reserved.</p>
      </div>
    </footer>
  );
}
