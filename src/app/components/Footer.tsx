import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white py-6 px-4 md:px-6 border-t text-black">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} NewsletterHub. All rights reserved.
        </p>
        <nav className="mt-4 sm:mt-0">
          <ul className="flex space-x-4">
            <li>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:underline"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:underline"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
