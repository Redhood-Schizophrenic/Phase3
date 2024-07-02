/*
  Warnings:

  - Added the required column `HotelId` to the `AvailableStock` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AvailableStock" ADD COLUMN     "HotelId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "AvailableStock" ADD CONSTRAINT "AvailableStock_HotelId_fkey" FOREIGN KEY ("HotelId") REFERENCES "Hotels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
