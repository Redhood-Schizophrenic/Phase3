-- DropForeignKey
ALTER TABLE "Orders" DROP CONSTRAINT "Orders_CustomerId_fkey";

-- AlterTable
ALTER TABLE "Orders" ALTER COLUMN "CustomerId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_CustomerId_fkey" FOREIGN KEY ("CustomerId") REFERENCES "Customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
