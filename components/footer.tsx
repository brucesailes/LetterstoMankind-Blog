import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-blue-600 py-4 text-center">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="text-center lg:text-left">
          <ul className="flex space-x-4 text-sm lg:text-base">
            <li>
            <a className="transition-transform transform hover:scale-105"  href="https://www.linkedin.com/in/brucesailes" target="_blank" rel="noopener noreferrer"  title="Bruce Sailes on LinkedIn">
            <Image src="/favicon/linkedin.svg" alt="LinkedIn"  width={20} height={20} />
          </a>
            </li>
            <li>
            <a className="transition-transform transform hover:scale-105"  href="https://www.youtube.com/@BruceSailes" target="_blank" rel="noopener noreferrer"  title="Bruce Sailes on YouTube">
            <Image src="/favicon/youtube.svg" alt="YouTube"  width={20} height={20} />
          </a>
            </li>
            <li>
              <a className="transition-transform transform hover:scale-105" href="https://www.instagram.com/thebrucesailes" target="_blank" rel="noopener noreferrer"  title="Bruce Sailes on Instagram">
              <Image src="/favicon/instagram.svg" alt="Instagram"  width={20} height={20} />
              </a>
            </li>
            <li>
            <a className="transition-transform transform hover:scale-105"  href="https://github.com/brucesailes" target="_blank" rel="noopener noreferrer"  title="Bruce Sailes on GitHub">
          <Image src="/favicon/github.svg" alt="GitHub"  width={20} height={20} />
          </a>
            </li>
          </ul>
        </div>
        <div className="text-center lg:text-right">
          <p>
            &copy; All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
