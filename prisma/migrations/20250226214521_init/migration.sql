-- CreateTable
CREATE TABLE "WorkOut" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "WorkOut_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WorkOut_authorId_key" ON "WorkOut"("authorId");

-- AddForeignKey
ALTER TABLE "WorkOut" ADD CONSTRAINT "WorkOut_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
