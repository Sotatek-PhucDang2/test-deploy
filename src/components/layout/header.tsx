"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/lib/auth";
import { Menu, Search } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";

const ThemeToggle = dynamic(() => import("./theme-toggle"), { ssr: false });

export function Header() {
  const { user, login, logout } = useAuth();

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search logic here
    console.log("Searching for:", searchQuery);
  };

  return (
    <header className="border-b">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 text-sm border-b">
          <div className="flex items-center gap-4">
            <span className="text-blue-700">ETH Price: ${"0.00"}</span>
            <span className="text-muted-foreground">Gas: 0 Gwei</span>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            {user ? (
              <Button variant="outline" onClick={logout}>
                {user.address.substring(0, 6)}...{user.address.substring(38)}
              </Button>
            ) : (
              <Button variant="outline" onClick={login}>
                Sign In
              </Button>
            )}
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold">Helios Explorer</span>
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Blockchain</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[200px]">
                      <li>
                        <Link
                          href="/blocks"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          View Blocks
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/txs"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          View Transactions
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Tokens</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-3 p-4 md:grid-cols-2">
                      <li>
                        <Link
                          href="/tokens"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          ERC-20 Top Tokens
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/token-transfers"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          Token Transfers
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>NFTs</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[200px]">
                      <li>
                        <Link
                          href="/nft-top-contracts"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          Top NFTs
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/nft-transfers"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          NFT Transfers
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[200px]">
                      <li>
                        <Link
                          href="/charts"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          Charts
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/directory"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          Directory
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>More</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[200px]">
                      <li>
                        <Link
                          href="/apis"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          APIs
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/verify"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          Verify Contract
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-4">
            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="grid gap-4 py-4">
                  <Link href="/" className="text-sm">
                    Home
                  </Link>
                  <Link href="/blocks" className="text-sm">
                    Blockchain
                  </Link>
                  <Link href="/tokens" className="text-sm">
                    Tokens
                  </Link>
                  <Link href="/nft-top-contracts" className="text-sm">
                    NFTs
                  </Link>
                  <Link href="/resources" className="text-sm">
                    Resources
                  </Link>
                  <Link href="/more" className="text-sm">
                    More
                  </Link>
                  {user ? (
                    <Button
                      variant="outline"
                      onClick={logout}
                      className="w-full"
                    >
                      Sign Out
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      onClick={login}
                      className="w-full"
                    >
                      Sign In
                    </Button>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Search bar */}
        <div className="py-5">
          <form onSubmit={handleSearch}>
            <div className="relative">
              <Search className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search by Address / Txn Hash / Block / Token / Domain Name"
                className="pl-10 h-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}
