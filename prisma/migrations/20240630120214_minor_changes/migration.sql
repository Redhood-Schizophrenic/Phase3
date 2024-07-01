/*
  Warnings:

  - A unique constraint covering the columns `[SubscriptionName]` on the table `Subscriptions` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Subscriptions_SubscriptionName_key" ON "Subscriptions"("SubscriptionName");
