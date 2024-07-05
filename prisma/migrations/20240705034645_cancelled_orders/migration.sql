-- CreateTable
CREATE TABLE "CancelledOrders" (
    "id" TEXT NOT NULL,
    "Reason" TEXT NOT NULL,
    "MenuId" TEXT NOT NULL,
    "OrderId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CancelledOrders_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CancelledOrders_id_key" ON "CancelledOrders"("id");

-- AddForeignKey
ALTER TABLE "CancelledOrders" ADD CONSTRAINT "CancelledOrders_MenuId_fkey" FOREIGN KEY ("MenuId") REFERENCES "Menus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CancelledOrders" ADD CONSTRAINT "CancelledOrders_OrderId_fkey" FOREIGN KEY ("OrderId") REFERENCES "Orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
