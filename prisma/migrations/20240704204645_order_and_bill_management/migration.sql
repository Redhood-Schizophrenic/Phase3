-- CreateTable
CREATE TABLE "Bills" (
    "id" TEXT NOT NULL,
    "OrderId" TEXT NOT NULL,
    "TotalAmount" DOUBLE PRECISION NOT NULL,
    "GSTAmount" DOUBLE PRECISION NOT NULL,
    "MenuTotal" DOUBLE PRECISION NOT NULL,
    "BalanceAmount" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "DiscountPrice" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "PaymentMode" TEXT NOT NULL,
    "Status" TEXT NOT NULL,
    "StaffId" TEXT NOT NULL,

    CONSTRAINT "Bills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Orders" (
    "id" TEXT NOT NULL,
    "Type" TEXT NOT NULL,
    "TableId" TEXT NOT NULL,
    "CustomerId" TEXT NOT NULL,
    "WaiterId" TEXT NOT NULL,
    "HotelId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderMenus" (
    "id" TEXT NOT NULL,
    "Quantity" TEXT NOT NULL,
    "TotalAmount" DOUBLE PRECISION NOT NULL,
    "MenuId" TEXT NOT NULL,
    "OrderId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OrderMenus_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Bills_id_key" ON "Bills"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Orders_id_key" ON "Orders"("id");

-- CreateIndex
CREATE UNIQUE INDEX "OrderMenus_id_key" ON "OrderMenus"("id");

-- AddForeignKey
ALTER TABLE "Bills" ADD CONSTRAINT "Bills_OrderId_fkey" FOREIGN KEY ("OrderId") REFERENCES "Orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bills" ADD CONSTRAINT "Bills_StaffId_fkey" FOREIGN KEY ("StaffId") REFERENCES "Staffs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_TableId_fkey" FOREIGN KEY ("TableId") REFERENCES "Tables"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_CustomerId_fkey" FOREIGN KEY ("CustomerId") REFERENCES "Customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_WaiterId_fkey" FOREIGN KEY ("WaiterId") REFERENCES "Staffs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_HotelId_fkey" FOREIGN KEY ("HotelId") REFERENCES "Hotels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderMenus" ADD CONSTRAINT "OrderMenus_MenuId_fkey" FOREIGN KEY ("MenuId") REFERENCES "Menus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderMenus" ADD CONSTRAINT "OrderMenus_OrderId_fkey" FOREIGN KEY ("OrderId") REFERENCES "Orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
