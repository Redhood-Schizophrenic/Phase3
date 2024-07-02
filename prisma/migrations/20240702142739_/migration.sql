/*
  Warnings:

  - Added the required column `Date` to the `PurchasedInvoice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PurchasedInvoice" ADD COLUMN     "Date" TEXT NOT NULL;
