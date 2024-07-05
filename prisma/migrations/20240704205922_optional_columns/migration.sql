-- DropForeignKey
ALTER TABLE "Orders" DROP CONSTRAINT "Orders_TableId_fkey";

-- AlterTable
ALTER TABLE "Orders" ALTER COLUMN "TableId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_TableId_fkey" FOREIGN KEY ("TableId") REFERENCES "Tables"("id") ON DELETE SET NULL ON UPDATE CASCADE;
