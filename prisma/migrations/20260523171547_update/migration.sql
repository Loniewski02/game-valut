/*
  Warnings:

  - You are about to drop the column `addedByName` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `userImage` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `Review` table. All the data in the column will be lost.
  - Made the column `addedById` on table `Game` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `Review` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Game" DROP CONSTRAINT "Game_addedById_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_userId_fkey";

-- AlterTable
ALTER TABLE "Game" DROP COLUMN "addedByName",
ALTER COLUMN "addedById" SET NOT NULL;

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "userImage",
DROP COLUMN "username",
ALTER COLUMN "userId" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "deletedAt" TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_addedById_fkey" FOREIGN KEY ("addedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
