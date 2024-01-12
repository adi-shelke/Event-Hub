"use server";
import { CreateEventParams } from "@/types";
import Event from "../database/models/event.model";
import { connectToDatabase } from "../database";
import { handleError } from "../utils";
import User from "../database/models/user.model";
import Category from "../database/models/category.model";

const populateevent = async (query: any) => {
  return query.populate({
    path: "organizer",
    model: User,
    select: "_id firstName lastName",
  })
  .populate({
    path:"category", model: Category, select :"_id name"
  })
  ;
};

export const createEvent = async ({
  event,
  userId,
  path,
}: CreateEventParams) => {
  try {
    await connectToDatabase();
    const organizer = await User.findById(userId);
    if (!organizer) {
      throw new Error("Organizer not found");
    }

    const newEvent = await Event.create({
      ...event,
      organizer: userId,
      category: event.categoryId,
    });

    return JSON.parse(JSON.stringify(newEvent));
  } catch (error) {
    handleError(error);
  }
};

export const getEventDetails = async (eventId: string) => {
  try {
    await connectToDatabase();
    const event = await populateevent(Event.findById(eventId));
    if (!event) throw new Error("Event not found");

    return JSON.parse(JSON.stringify(event));
  } catch (error) {
    handleError(error);
  }
};
