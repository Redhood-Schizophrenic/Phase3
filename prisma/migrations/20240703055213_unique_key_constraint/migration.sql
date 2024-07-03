/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `AvailableStock` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `CustomerOccassion` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Customers` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `DailyStock` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Dishes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Hotel_Subscription` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Hotels` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `ItemCategories` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Items` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `MenuCategory` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Menus` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `PurchasedInvoice` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `PurchasedStock` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Sections` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Subscriptions` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Suppliers` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `TableReservation` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Tables` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "AvailableStock_id_key" ON "AvailableStock"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CustomerOccassion_id_key" ON "CustomerOccassion"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Customers_id_key" ON "Customers"("id");

-- CreateIndex
CREATE UNIQUE INDEX "DailyStock_id_key" ON "DailyStock"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Dishes_id_key" ON "Dishes"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Hotel_Subscription_id_key" ON "Hotel_Subscription"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Hotels_id_key" ON "Hotels"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ItemCategories_id_key" ON "ItemCategories"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Items_id_key" ON "Items"("id");

-- CreateIndex
CREATE UNIQUE INDEX "MenuCategory_id_key" ON "MenuCategory"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Menus_id_key" ON "Menus"("id");

-- CreateIndex
CREATE UNIQUE INDEX "PurchasedInvoice_id_key" ON "PurchasedInvoice"("id");

-- CreateIndex
CREATE UNIQUE INDEX "PurchasedStock_id_key" ON "PurchasedStock"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Sections_id_key" ON "Sections"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Subscriptions_id_key" ON "Subscriptions"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Suppliers_id_key" ON "Suppliers"("id");

-- CreateIndex
CREATE UNIQUE INDEX "TableReservation_id_key" ON "TableReservation"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Tables_id_key" ON "Tables"("id");
