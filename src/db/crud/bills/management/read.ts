import db from "@/db/connector";

// Check order
interface OrderInterface {
	order_id: string
}
export async function check_order_exists({
	order_id
}: OrderInterface) {
	try {

		// Fetching the record
		const result = await db.bills.findMany({
			where: {
				OrderId: order_id,

				NOT: {
					Status: "Inactive"
				},
			},
		});

		// Database is disconnected
		db.$disconnect();

		if (result.length == 0) {
			return {
				returncode: 400,
				message: "Data doesn't exists",
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

// Fetch orders
interface OrdersInterface {
	hotel_id: string
}
export async function read_bills({
	hotel_id
}: OrdersInterface) {
	try {

		// Fetching the record
		const result = await db.bills.findMany({
			where: {
				Order: {
					HotelId: hotel_id,
				},

				NOT: {
					Status: "Inactive"
				},
			},
			include: {
				Order: {
					include: {
						Menu: true
					}
				}
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
