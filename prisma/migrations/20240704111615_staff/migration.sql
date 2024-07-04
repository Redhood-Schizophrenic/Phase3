-- CreateTable
CREATE TABLE "Staffs" (
    "id" TEXT NOT NULL,
    "FirstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "Address" TEXT NOT NULL,
    "Contact" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "HashedPassword" TEXT NOT NULL,
    "SaltPassword" TEXT NOT NULL,
    "DepartmentName" TEXT NOT NULL,
    "Salary" DOUBLE PRECISION NOT NULL,
    "Incentive" DOUBLE PRECISION,
    "HotelId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Staffs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StaffAttendance" (
    "id" TEXT NOT NULL,
    "Date" TEXT NOT NULL,
    "Arrival" TEXT NOT NULL,
    "Departure" TEXT NOT NULL,
    "Type" TEXT NOT NULL DEFAULT 'Absent',
    "Note" TEXT,
    "StaffId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StaffAttendance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Staffs_id_key" ON "Staffs"("id");

-- CreateIndex
CREATE UNIQUE INDEX "StaffAttendance_id_key" ON "StaffAttendance"("id");

-- AddForeignKey
ALTER TABLE "Staffs" ADD CONSTRAINT "Staffs_HotelId_fkey" FOREIGN KEY ("HotelId") REFERENCES "Hotels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StaffAttendance" ADD CONSTRAINT "StaffAttendance_StaffId_fkey" FOREIGN KEY ("StaffId") REFERENCES "Staffs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
