import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function main() {
  await prisma.exercise.upsert({
    where: { id: 1 },
    update: { title: 'Отжимания' },
    create: { title: 'Отжимания', description: 'des', linkToVideo: 'text' },
  });
  await prisma.exercise.upsert({
    where: { id: 2 },
    update: {},
    create: { title: 'Пресс', description: 'des' },
  });
  await prisma.exercise.upsert({
    where: { id: 3 },
    update: {},
    create: {
      title: 'Алмазные отжимания',
      description: 'des',
      linkToVideo: 'text',
    },
  });
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (er) => {
    console.error(er);
    await prisma.$disconnect();
    process.exit(1);
  });
