import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function main() {
  const pushups = await prisma.exercise.upsert({
    where: { id: 1 },
    update: {},
    create: { title: 'Video', description: 'des', linkToVideo: 'text' },
  });
  const press = await prisma.exercise.upsert({
    where: { id: 2 },
    update: {},
    create: { title: 'Пресс', description: 'des' },
  });
  console.log({ pushups, press });
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (er) => {
    console.error(er);
    await prisma.$disconnect();
    process.exit(1);
  });
