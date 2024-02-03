import React from "react";
import { IEvent } from "@/lib/database/models/event.model";
type CollectionProps = {
  data: IEvent[];
  emptyTitle: string;
  emptyStateSubtext: string;
  collectionType?: "EVENTS_ORGANIZED" | "MY_TICKETS" | "ALL_EVENTS";
  limit: number;
  page: number;
  totalPages?: number;
  urlParamName?: string;
};
const Collections = ({
  data,
  emptyTitle,
  emptyStateSubtext,
  collectionType,
  limit,
  page,
  totalPages = 0,
  urlParamName,
}: CollectionProps) => {
  return <div>Collections</div>;
};

export default Collections;
