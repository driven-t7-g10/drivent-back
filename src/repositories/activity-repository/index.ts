import { prisma } from "@/config";

async function findMany() {
  return prisma.activity.findMany({
    include: {
      Entry: {
        select: {
          id: true
        }
      }
    }
  });
}

const activityRepository = {
  findMany
};

export default activityRepository;
