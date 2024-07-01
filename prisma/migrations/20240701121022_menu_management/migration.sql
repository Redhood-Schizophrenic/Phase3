-- CreateTable
CREATE TABLE "MenuCategory" (
    "id" TEXT NOT NULL,
    "CategoryName" TEXT NOT NULL,
    "Description" TEXT,
    "HotelId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MenuCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dishes" (
    "id" TEXT NOT NULL,
    "DishName" TEXT NOT NULL,
    "Code" TEXT NOT NULL,
    "Description" TEXT,
    "Type" TEXT NOT NULL,
    "DishImage" BYTEA,
    "Status" TEXT NOT NULL DEFAULT 'Active',
    "CategoryId" TEXT NOT NULL,
    "HotelId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Dishes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Menus" (
    "id" TEXT NOT NULL,
    "SectionId" TEXT NOT NULL,
    "DishId" TEXT NOT NULL,
    "Code" TEXT,
    "Price" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Menus_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MenuCategory" ADD CONSTRAINT "MenuCategory_HotelId_fkey" FOREIGN KEY ("HotelId") REFERENCES "Hotels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dishes" ADD CONSTRAINT "Dishes_CategoryId_fkey" FOREIGN KEY ("CategoryId") REFERENCES "MenuCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dishes" ADD CONSTRAINT "Dishes_HotelId_fkey" FOREIGN KEY ("HotelId") REFERENCES "Hotels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Menus" ADD CONSTRAINT "Menus_SectionId_fkey" FOREIGN KEY ("SectionId") REFERENCES "Sections"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Menus" ADD CONSTRAINT "Menus_DishId_fkey" FOREIGN KEY ("DishId") REFERENCES "Dishes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
