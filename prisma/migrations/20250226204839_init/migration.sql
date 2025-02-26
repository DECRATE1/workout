-- DropIndex
DROP INDEX "users_password_key";

-- CreateTable
CREATE TABLE "Exercise" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "linkToVideo" TEXT,

    CONSTRAINT "Exercise_pkey" PRIMARY KEY ("id")
);
