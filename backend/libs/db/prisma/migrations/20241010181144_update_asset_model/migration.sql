/*
  Warnings:

  - The `consumer_id` column on the `asset` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "asset" DROP CONSTRAINT "asset_consumer_id_fkey";

-- AlterTable
ALTER TABLE "asset" DROP COLUMN "consumer_id",
ADD COLUMN     "consumer_id" BIGINT;

-- AddForeignKey
ALTER TABLE "asset" ADD CONSTRAINT "asset_consumer_id_fkey" FOREIGN KEY ("consumer_id") REFERENCES "users"("telegram_id") ON DELETE SET NULL ON UPDATE CASCADE;
