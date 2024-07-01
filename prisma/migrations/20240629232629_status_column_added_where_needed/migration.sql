/*
  Warnings:

  - You are about to drop the column `TableId` on the `TableReservation` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "TableReservation" DROP CONSTRAINT "TableReservation_TableId_fkey";

-- AlterTable
ALTER TABLE "Sections" ADD COLUMN     "Status" TEXT NOT NULL DEFAULT 'Active';

-- AlterTable
ALTER TABLE "TableReservation" DROP COLUMN "TableId",
ADD COLUMN     "Status" TEXT NOT NULL DEFAULT 'Active';
