-- CreateTable
CREATE TABLE "Suppliers" (
    "id" TEXT NOT NULL,
    "SupplierName" TEXT NOT NULL,
    "Contact" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "GSTIN" TEXT NOT NULL,
    "Address" TEXT,
    "HotelId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Suppliers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemCategories" (
    "id" TEXT NOT NULL,
    "CategoryName" TEXT NOT NULL,
    "Description" TEXT,
    "HotelId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ItemCategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Items" (
    "id" TEXT NOT NULL,
    "ItemName" TEXT NOT NULL,
    "Description" TEXT,
    "HotelId" TEXT NOT NULL,
    "CategoryId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PurchasedInvoice" (
    "id" TEXT NOT NULL,
    "PaymentMode" TEXT NOT NULL,
    "TotalAmount" DOUBLE PRECISION NOT NULL,
    "BalanceAmount" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
    "PaymentStatus" TEXT NOT NULL DEFAULT 'Paid',
    "SupplierId" TEXT NOT NULL,
    "HotelId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PurchasedInvoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PurchasedStock" (
    "id" TEXT NOT NULL,
    "InvoiceId" TEXT NOT NULL,
    "ItemId" TEXT NOT NULL,
    "Quantity" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PurchasedStock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AvailableStock" (
    "id" TEXT NOT NULL,
    "ItemId" TEXT NOT NULL,
    "Quantity" TEXT NOT NULL,
    "Status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AvailableStock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DailyStock" (
    "id" TEXT NOT NULL,
    "ItemId" TEXT NOT NULL,
    "Quantity" TEXT NOT NULL,
    "Status" TEXT NOT NULL,
    "Date" TEXT NOT NULL,

    CONSTRAINT "DailyStock_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Suppliers" ADD CONSTRAINT "Suppliers_HotelId_fkey" FOREIGN KEY ("HotelId") REFERENCES "Hotels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemCategories" ADD CONSTRAINT "ItemCategories_HotelId_fkey" FOREIGN KEY ("HotelId") REFERENCES "Hotels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Items" ADD CONSTRAINT "Items_HotelId_fkey" FOREIGN KEY ("HotelId") REFERENCES "Hotels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Items" ADD CONSTRAINT "Items_CategoryId_fkey" FOREIGN KEY ("CategoryId") REFERENCES "ItemCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchasedInvoice" ADD CONSTRAINT "PurchasedInvoice_SupplierId_fkey" FOREIGN KEY ("SupplierId") REFERENCES "Suppliers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchasedInvoice" ADD CONSTRAINT "PurchasedInvoice_HotelId_fkey" FOREIGN KEY ("HotelId") REFERENCES "Hotels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchasedStock" ADD CONSTRAINT "PurchasedStock_InvoiceId_fkey" FOREIGN KEY ("InvoiceId") REFERENCES "PurchasedInvoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchasedStock" ADD CONSTRAINT "PurchasedStock_ItemId_fkey" FOREIGN KEY ("ItemId") REFERENCES "Items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AvailableStock" ADD CONSTRAINT "AvailableStock_ItemId_fkey" FOREIGN KEY ("ItemId") REFERENCES "Items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DailyStock" ADD CONSTRAINT "DailyStock_ItemId_fkey" FOREIGN KEY ("ItemId") REFERENCES "Items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
