-- AlterTable
ALTER TABLE "AvailableStock" ALTER COLUMN "Status" SET DEFAULT 'Active';

-- AlterTable
ALTER TABLE "DailyStock" ALTER COLUMN "Status" SET DEFAULT 'Active';

-- AlterTable
ALTER TABLE "PurchasedStock" ADD COLUMN     "Status" TEXT NOT NULL DEFAULT 'Active';
