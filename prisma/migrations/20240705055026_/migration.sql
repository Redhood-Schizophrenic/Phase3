/*
  Warnings:

  - You are about to drop the column `Note` on the `Orders` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "OrderMenus" ADD COLUMN     "Note" TEXT;

-- AlterTable
ALTER TABLE "Orders" DROP COLUMN "Note";
