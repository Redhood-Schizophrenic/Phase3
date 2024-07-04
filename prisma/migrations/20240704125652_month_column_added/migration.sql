/*
  Warnings:

  - Added the required column `Month` to the `StaffAttendance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "StaffAttendance" ADD COLUMN     "Month" TEXT NOT NULL;
