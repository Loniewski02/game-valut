/*
  Warnings:

  - You are about to drop the column `addedAt` on the `Game` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Game" DROP COLUMN "addedAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "genres" TEXT[],
ADD COLUMN     "platforms" TEXT[];
