"use client";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
import UserNav from "./UserNav";

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto p-4 border-b">
      <div className="flex items-center justify-between">
        <Link href={"/"}>
          <h1 className="font-bold text-3xl">
            alex <span className="text-primary">Saas</span>
          </h1>
        </Link>
        <div className="flex items-center gap-x-5">
          <ModeToggle />
          <SignedIn>
            <UserNav />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-x-5">
              <SignInButton>
                <Button>Sign In</Button>
              </SignInButton>
              <SignUpButton>
                <Button variant={"secondary"}>Sign Up</Button>
              </SignUpButton>
            </div>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
}
