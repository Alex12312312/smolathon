/*
  Warnings:

  - Added the required column `price` to the `asset` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "asset" ADD COLUMN     "price" INTEGER NOT NULL;
