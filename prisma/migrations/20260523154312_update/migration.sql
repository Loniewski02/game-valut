/*
  Warnings:

  - Made the column `image` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Game" ALTER COLUMN "genres" SET DEFAULT ARRAY[]::TEXT[],
ALTER COLUMN "platforms" SET DEFAULT ARRAY[]::TEXT[];

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "backgroundImage" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "description" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "favoriteGameId" TEXT,
ALTER COLUMN "image" SET NOT NULL,
ALTER COLUMN "image" SET DEFAULT '';

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_favoriteGameId_fkey" FOREIGN KEY ("favoriteGameId") REFERENCES "Game"("id") ON DELETE SET NULL ON UPDATE CASCADE;
