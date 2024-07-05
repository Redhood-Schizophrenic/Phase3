import db from "@/db/connector";

// Fetch menus of order
interface OrderInterface {
	order_id: string
}

export async function read_cancelled_order_menus ({
	order_id
}: OrderInterface) {
	try {

		// Fetching the record
		const result = await db.cancelledOrders.findMany({
			where: {
				OrderId: order_id,
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

// Fetch Hotel Cancelled Orders
interface HotelInterface {
	hotel_id: string
}

export async function read_hotel_cancelled_orders ({
	hotel_id
}: HotelInterface) {
	try {

		// Fetching the record
		const result = await db.cancelledOrders.findMany({
			where: {
				Order: {
					HotelId: hotel_id
				},
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
