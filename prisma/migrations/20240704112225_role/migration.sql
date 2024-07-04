/*
  Warnings:

  - Added the required column `Designation` to the `Staffs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Role` to the `Staffs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Staffs" ADD COLUMN     "Designation" TEXT NOT NULL,
ADD COLUMN     "Role" TEXT NOT NULL;
