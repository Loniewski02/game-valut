/*
  Warnings:

  - The values [COMPLETED] on the enum `GameStatus` will be removed. If these variants are still used in the database, this will fail.
  - A unique constraint covering the columns `[usernameLower]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `addedByName` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userImage` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usernameLower` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "GameStatus_new" AS ENUM ('WANT_TO_PLAY', 'PLAYING', 'PLAYED');
ALTER TABLE "GameList" ALTER COLUMN "status" TYPE "GameStatus_new" USING ("status"::text::"GameStatus_new");
ALTER TYPE "GameStatus" RENAME TO "GameStatus_old";
ALTER TYPE "GameStatus_new" RENAME TO "GameStatus";
DROP TYPE "public"."GameStatus_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Game" DROP CONSTRAINT "Game_addedById_fkey";

-- DropForeignKey
ALTER TABLE "GameList" DROP CONSTRAINT "GameList_userId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_userId_fkey";

-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "addedByName" TEXT NOT NULL,
ALTER COLUMN "addedById" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "userImage" TEXT NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL,
ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "usernameLower" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_usernameLower_key" ON "User"("usernameLower");

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_addedById_fkey" FOREIGN KEY ("addedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameList" ADD CONSTRAINT "GameList_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
