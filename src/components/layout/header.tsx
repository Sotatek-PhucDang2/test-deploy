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
import { Menu, Search,Settings,DollarSign,Globe } from "lucide-react";
import dynamic from "next/dynamic";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { Global } from "recharts";

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
            <span className="text-green-600  rounded-full bg-green-100">+ ${"4.50%"}</span>
            <span className="text-muted-foreground">Gas: 0 Gwei</span>
          </div>
          <div className="flex items-center gap-8">
          <ThemeToggle />
              
              <span className="text-muted-foreground flex items-center gap-2 cursor-pointer" ><Settings size={16} />Setting</span>  
              <span className="text-muted-foreground flex items-center gap-2 cursor-pointer"><DollarSign size={16}/>USD</span>
              <span className="text-muted-foreground flex items-center gap-2 cursor-pointer"><Globe size ={16}/>English</span>
            
          </div>
        </div>
            {/* header */}
            <div className="w-[1569px] h-[629px]  "
            style={{
              backgroundImage: "url('/Maskgroup.png')" 
            }}>



        {/* Main header */}
        <div className="flex items-center justify-between py-4 ">
          <div className="flex items-center gap-8">
            <Link href="/" className=" flex items-center gap-2 whitespace-nowrap">
              <span className=" pl-4 text-2xl text-white font-bold">Heli<img src="Logo.png" className="inline-block w-4 h-4 translate-y-"/>s Explorer</span>
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
                    <ul className="grid gap-3 p-4 w-[200px] ">
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
          <div className=" w-full flex justify-end pr-8">
            <button className=" w-20 h-10 bg-[#002DCB] rounded-xl  text-white ">sign In</button>
            </div>

          {/* User actions */}
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

        <div className="m-10 flex flex-col items-center justify-center text-white font-bold text-center">
          <h2 className="flex gap-2text-[20px] rounded-full bg-white/50 px-2 py-1 "  ><img src="Logo.png" className="w-6 h-6 px-1 py-1"/> Helios Explorer</h2>
          <h1 className="flex mt-5  text-[40px]">Welcome to Heli
           
            <img src="Logo.png" className="w-8 h-8 translate-y-4"/>s Explorer

            </h1>
        </div>    
        {/* <img src="/Vector.png" alt="" />     */}
        {/* Search bar */}
        <div className="flex justify-center py-5  h-[65] ">
          <form onSubmit={handleSearch} className="w-[960]">
            <div className="relative">
              <Search className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground " />
              <Input
                placeholder="Search by Address / Txn Hash / Block / Token / Domain Name"
                className="pl-10 h-12 w-full rounded-[30] text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>
        </div>
           {/* Total TVL */}
            <div className="flex justify-center gap-10  mt-10 ">
             <div className="w-[632] h-[193] bg-white/5 rounded-3xl flex">
             <div>
              <div>
              <div className="text-white/50 inline-flex m-4 ">Total TVL </div>
              <div className=" inline-flex  items-center gap 3 text-sm rounded-xl bg-green-500/10  text-green-500  "> 
              {"+4.50%"}
              </div>
              </div>
              <div className="text-white text-5xl flex items-center gap-2 m-3"><DollarSign className="w-[50] h-[50]"/>14,772,525</div>
              <div className="text-white/50 m-5 text ">Restaked Assets: 145 Tokens</div>
             </div>
              <div className="w-[260] h-[153] bg-white/10 rounded-2xl  border border-none m-4 flex items-center ml-auto">
             <img src="Vector@.png" className="pt-5" /></div>
            </div>
              
            
                
            <div className="w-[632] h-[193] bg-white/5 rounded-3xl flex">
             <div>
              <div>
              <div className="text-white/50 inline-flex m-4 ">Active Validators </div>
              <div className=" inline-flex  items-center gap 3 text-sm rounded-xl bg-green-500/10  text-green-500  "> 
              {"+4.50%"}
              </div>
              </div>
              <div className="text-white text-5xl flex items-center gap-2 m-3"><DollarSign className="w-[50] h-[50]"/>54,858,9925</div>
              <div className="text-white/50 m-5 text ">Governance Votes: 478,655,021</div>
             </div>
              <div className="w-[260] h-[153] bg-white/10 rounded-2xl  border border-none m-4 flex items-center ml-auto">
             <img src="Vector@.png" className="pt-5" /></div>
            </div>
              
                  
            </div>
        </div>
        <div className="flex justify-center ml-20 mt-[-40] w-79 h-79 ">
          <img src="Group 2.png" className="bg-white rounded-full p-3" />
        </div>

      </div>
    </header>
  );
}
