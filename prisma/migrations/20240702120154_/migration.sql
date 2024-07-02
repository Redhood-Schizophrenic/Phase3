-- AlterTable
ALTER TABLE "ItemCategories" ADD COLUMN     "Status" TEXT NOT NULL DEFAULT 'Active';

-- AlterTable
ALTER TABLE "Items" ADD COLUMN     "Status" TEXT NOT NULL DEFAULT 'Active';

-- AlterTable
ALTER TABLE "PurchasedInvoice" ADD COLUMN     "Status" TEXT NOT NULL DEFAULT 'Active';

-- AlterTable
ALTER TABLE "Suppliers" ADD COLUMN     "Status" TEXT NOT NULL DEFAULT 'Active';
