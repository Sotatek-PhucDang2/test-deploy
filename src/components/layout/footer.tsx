import { DiscIcon as Discord, Github, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-blue-700"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/brand"
                  className="text-sm text-muted-foreground hover:text-blue-700"
                >
                  Brand Assets
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-blue-700"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sm text-muted-foreground hover:text-blue-700"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/api-docs"
                  className="text-sm text-muted-foreground hover:text-blue-700"
                >
                  API Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/knowledge"
                  className="text-sm text-muted-foreground hover:text-blue-700"
                >
                  Knowledge Base
                </Link>
              </li>
              <li>
                <Link
                  href="/bugs"
                  className="text-sm text-muted-foreground hover:text-blue-700"
                >
                  Bug Bounty
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Products & Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/advertise"
                  className="text-sm text-muted-foreground hover:text-blue-700"
                >
                  Advertise
                </Link>
              </li>
              <li>
                <Link
                  href="/explorer"
                  className="text-sm text-muted-foreground hover:text-blue-700"
                >
                  Explorer-as-a-Service
                </Link>
              </li>
              <li>
                <Link
                  href="/api-plans"
                  className="text-sm text-muted-foreground hover:text-blue-700"
                >
                  API Plans
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                href="https://twitter.com"
                className="text-muted-foreground hover:text-blue-700"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com"
                className="text-muted-foreground hover:text-blue-700"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://discord.com"
                className="text-muted-foreground hover:text-blue-700"
              >
                <Discord className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2024 Helios Explorer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
