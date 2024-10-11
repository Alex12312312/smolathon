-- DropForeignKey
ALTER TABLE "asset" DROP CONSTRAINT "asset_creator_id_fkey";

-- AlterTable
ALTER TABLE "asset" ALTER COLUMN "creator_id" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "asset" ADD CONSTRAINT "asset_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
