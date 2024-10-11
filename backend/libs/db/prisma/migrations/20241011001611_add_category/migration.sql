/*
  Warnings:

  - Added the required column `category` to the `asset` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `creator_id` on the `asset` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "category" AS ENUM ('HeroesAndEvents', 'Activity', 'HistoricalSites', 'DigitalArt');

-- DropForeignKey
ALTER TABLE "asset" DROP CONSTRAINT "asset_creator_id_fkey";

-- AlterTable
ALTER TABLE "asset" ADD COLUMN     "category" "category" NOT NULL,
DROP COLUMN "creator_id",
ADD COLUMN     "creator_id" BIGINT NOT NULL;

-- AddForeignKey
ALTER TABLE "asset" ADD CONSTRAINT "asset_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "users"("telegram_id") ON DELETE RESTRICT ON UPDATE CASCADE;
