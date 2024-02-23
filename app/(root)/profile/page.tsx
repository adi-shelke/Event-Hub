import Collections from "@/components/shared/Collections";
import { Button } from "@/components/ui/button";
import { getEventsByUser } from "@/lib/actions/event.actions";
import { getOrdersByUser } from "@/lib/actions/order.actions";
import { IOrder } from "@/lib/database/models/order.model";
import { SearchParamProps } from "@/types";
import { auth } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const page = async ({ searchParams }: SearchParamProps) => {
  const { sessionClaims } = auth();

  const ordersPage = Number(searchParams?.ordersPage) || 1;
  const eventsPage = Number(searchParams?.eventsPage) || 1;
  const userId = sessionClaims?.userId as string;
  const orders = await getOrdersByUser({ userId, page: ordersPage });
  const orderedEvents = orders?.data.map((order: IOrder) => order.event) || [];
  const organizedEvents = await getEventsByUser({ userId, page: eventsPage });

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">My Tickets</h3>
          <Button asChild className="button hidden sm:flex" size="lg">
            <Link href="/#events">Explore More Events</Link>
          </Button>
        </div>
      </section>
      <section className="wrapper my-8">
        <Collections
          data={orderedEvents}
          emptyTitle="No Tickets Found!"
          emptyStateSubtext="Browse Events and get your tickets now!"
          collectionType="MY_TICKETS"
          limit={3}
          page={ordersPage}
          totalPages={orders?.totalPages}
          urlParamName="ordersPage"
        />
      </section>

      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">
            Events Organized by you
          </h3>
          <Button asChild className="button hidden sm:flex" size="lg">
            <Link href="/events/create">Create New Event</Link>
          </Button>
        </div>
      </section>

      <section className="wrapper my-8">
        <Collections
          data={organizedEvents?.data}
          emptyTitle="Nothinhg Organized by you!"
          emptyStateSubtext="Create an event now!"
          collectionType="EVENTS_ORGANIZED"
          limit={6}
          page={eventsPage}
          totalPages={organizedEvents?.totalPages}
          urlParamName="eventsPage"
        />
      </section>
    </>
  );
};

export default page;
