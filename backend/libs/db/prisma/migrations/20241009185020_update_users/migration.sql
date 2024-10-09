/*
  Warnings:

  - You are about to drop the column `telegram_hash` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "telegram_hash";
