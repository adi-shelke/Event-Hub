"use client";
import { IEvent } from "@/lib/database/models/event.model";
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import CheckoutPage from "./CheckoutPage";

const CheckoutButton = ({ event }: { event: IEvent }) => {
  const hasEventClosed = new Date(event.endDateTime) < new Date();
  const { user } = useUser();
  const userId = user?.publicMetadata?.userId as string;
  return (
    <div className="flex items-center gap-3">
      {hasEventClosed ? (
        <p className="p-2 text-red-400">Sorry, the event has finished</p>
      ) : (
        <>
          <SignedOut>
            <Button asChild className="button rounded-full " size="lg">
              <Link href="/sign-in">Get Tickets</Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <CheckoutPage event={event} userId={userId}/>
          </SignedIn>
        </>
      )}
    </div>
  );
};

export default CheckoutButton;
