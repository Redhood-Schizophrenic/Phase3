/*
  Warnings:

  - Added the required column `Unit` to the `AvailableStock` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AvailableStock" ADD COLUMN     "Unit" TEXT NOT NULL;
