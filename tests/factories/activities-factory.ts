import { prisma } from "@/config";
import faker from "@faker-js/faker";
import { Event } from "@prisma/client";
import dayjs from "dayjs";
import { createEvent } from "./events-factory";

export async function createActivity(event: Event) {
  const incomingEvent = event;
  return prisma.activity.create({
    data: {
      name: faker.name.findName(),
      startsAt: dayjs().add(1, "day").toDate(),
      endsAt: dayjs().add(1, "day").add(1, "hour").toDate(),
      eventId: incomingEvent.id
    }
  });
}
