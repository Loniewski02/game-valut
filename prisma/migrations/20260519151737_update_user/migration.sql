/*
  Warnings:

  - The `developer` column on the `Game` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `publisher` column on the `Game` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `cover` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `esrb` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `Game` required. This step will fail if there are existing NULL values in that column.
  - Made the column `image` on table `Game` required. This step will fail if there are existing NULL values in that column.
  - Made the column `releaseDate` on table `Game` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "cover" TEXT NOT NULL,
ADD COLUMN     "esrb" TEXT NOT NULL,
ADD COLUMN     "modes" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "screenshots" TEXT[] DEFAULT ARRAY[]::TEXT[],
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "image" SET NOT NULL,
DROP COLUMN "developer",
ADD COLUMN     "developer" TEXT[] DEFAULT ARRAY[]::TEXT[],
DROP COLUMN "publisher",
ADD COLUMN     "publisher" TEXT[] DEFAULT ARRAY[]::TEXT[],
ALTER COLUMN "releaseDate" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "image" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
