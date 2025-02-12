"use client";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
} from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto p-4 border-b">
      <div className="flex items-center justify-between">
        <Link href={"/"}>
          <h1 className="font-bold text-3xl">alexSaas</h1>
        </Link>
        <div className="flex items-center gap-x-5">
          <ModeToggle />
          <SignedIn>
            <SignOutButton>
              <Button>Logout</Button>
            </SignOutButton>
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
