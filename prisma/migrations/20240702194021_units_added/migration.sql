/*
  Warnings:

  - Added the required column `Unit` to the `PurchasedStock` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PurchasedStock" ADD COLUMN     "Unit" TEXT NOT NULL;
