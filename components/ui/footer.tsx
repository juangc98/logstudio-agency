import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/images/logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 border-t border-zinc-200 py-8 sm:flex-row md:py-12">
          {/* Logo */}
          <Link
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-white shadow-xs shadow-zinc-950/20"
            href="/"
          >
            <Image src={Logo} width={24} height={24} alt="Logo" />
          </Link>

          {/* Copyright */}
          <div className="text-center text-sm text-zinc-500">
            &copy;{" "}
            <a href="https://cruip.com" target="_blank" rel="noopener noreferrer">
              Cruip.com
            </a>
            . All rights reserved.
          </div>

          {/* Social links */}
          <ul className="flex shrink-0 space-x-4">
            <li>
              <a
                className="flex items-center justify-center text-zinc-700 transition hover:text-zinc-900"
                href="https://x.com/Cruip_com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="m7.063 3 3.495 4.475L14.601 3h2.454l-5.359 5.931L18 17h-4.938l-3.866-4.893L4.771 17H2.316l5.735-6.342L2 3h5.063Zm-.74 1.347H4.866l8.875 11.232h1.36L6.323 4.347Z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                className="flex items-center justify-center text-zinc-700 transition hover:text-zinc-900"
                href="https://github.com/cruip"
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
              >
                <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M10 1.667c-4.603 0-8.333 3.73-8.333 8.333 0 3.677 2.404 6.792 5.729 7.896.42.105.521-.21.521-.417v-1.452c-2.315.525-2.836-1.01-2.836-1.01-.388-.875-.875-1.167-.875-1.167-.729-.525.073-.525.073-.525.84.105 1.26.84 1.26.84.729 1.365 1.99.962 2.417.729.021-.417.146-.875.271-1.156-2.073-.23-4.146-.94-4.146-4.188 0-.938.323-1.667.844-2.188-.094-.23-.365-1.052.073-2.208 0 0 .688-.21 2.188.84a7.52 7.52 0 0 1 2.083-.292c.729 0 1.458.104 2.083.292 1.5-.965 2.188-.84 2.188-.84.438 1.156.167 1.978.083 2.208.521.542.844 1.25.844 2.188 0 3.26-1.99 3.885-4.167 4.063.333.354.667.833.667 1.458v2.188c0 .208.104.521.625.417 3.323-1.146 5.729-4.271 5.729-7.896-.042-4.603-3.771-8.333-8.375-8.333Z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                className="flex items-center justify-center text-zinc-700 transition hover:text-zinc-900"
                href="#"
                aria-label="Medium"
              >
                <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M17 2H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm-1.708 3.791-.858.823a.251.251 0 0 0-.1.241V12.9a.251.251 0 0 0 .1.241l.838.823v.181h-4.215v-.181l.868-.843c.085-.085.085-.11.085-.241V7.993L9.6 14.124h-.329l-2.81-6.13V12.1a.567.567 0 0 0 .156.472l1.129 1.37v.181h-3.2v-.181l1.129-1.37a.547.547 0 0 0 .146-.472V7.351A.416.416 0 0 0 5.683 7l-1-1.209V5.61H7.8l2.4 5.283 2.122-5.283h2.971l-.001.181Z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
