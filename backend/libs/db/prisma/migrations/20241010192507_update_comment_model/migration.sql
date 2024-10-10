/*
  Warnings:

  - Changed the type of `creator_id` on the `comment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "comment" DROP CONSTRAINT "comment_creator_id_fkey";

-- AlterTable
ALTER TABLE "comment" DROP COLUMN "creator_id",
ADD COLUMN     "creator_id" BIGINT NOT NULL;

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "users"("telegram_id") ON DELETE RESTRICT ON UPDATE CASCADE;
