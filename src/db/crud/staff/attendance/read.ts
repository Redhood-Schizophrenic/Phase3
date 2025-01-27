import db from "@/db/connector";
import { getCurrentMonthName } from "@/helpers/monthName";

// Fetch all categories
interface AttendanceInterface {
	hotel_id: string,
	date: string
}

export async function read_hotel_staffs_attendance({
	hotel_id,
	date
}: AttendanceInterface) {
	try {

		// Fetching the record
		const result = await db.staffAttendance.findMany({
			where: {
				Staff: {
					HotelId: hotel_id,
					NOT: {
						Status: "Inactive"
					}
				},
				Date: date
			},
			include: {
				Staff: true
			}
		});

		// Database is disconnected
		db.$disconnect();

		return {
			returncode: 200,
			message: "Data Fetched",
			output: result
		};

	} catch (error: any) {

		return {
			returncode: 500,
			message: error.message,
			output: []
		};

	}
}

// Check if attendance exists
interface AttendanceCheckerInterface {
	date: string,
	staff_id: string
}

export async function check_staff_attendance({
	date,
	staff_id
}: AttendanceCheckerInterface) {
	try {

		// Fetching the record
		const result = await db.staffAttendance.findMany({
			where: {
				Date: date,
				StaffId: staff_id,
			}
		});

		// Database is disconnected
		db.$disconnect();

		if (result.length == 0) {
			return {
				returncode: 400,
				message: "Attendance doesn't exist",
				output: []
			}
		}

		return {
			returncode: 200,
			message: "Data Fetched",
			output: result
		};

	} catch (error: any) {

		return {
			returncode: 500,
			message: error.message,
			output: []
		};

	}
}

// Single Staff Attendance Fetch
interface StaffInterface {
	staff_id: string
}

export async function read_staff_attendance({
	staff_id
}: StaffInterface) {
	try {

		// Fetching the record
		const result = await db.staffAttendance.findMany({
			where: {
				StaffId: staff_id,
			}
		});

		// Database is disconnected
		db.$disconnect();

		if (result.length == 0) {
			return {
				returncode: 400,
				message: "Attendance doesn't exist",
				output: []
			}
		}

		return {
			returncode: 200,
			message: "Data Fetched",
			output: result
		};

	} catch (error: any) {

		return {
			returncode: 500,
			message: error.message,
			output: []
		};

	}
}
