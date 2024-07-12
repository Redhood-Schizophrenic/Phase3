import db from "@/db/connector";

interface OrderInterface {
	type: string,
	table_id: string | null,
	waiter_id: string,
	hotel_id: string
}

export async function create_order ({
	type,
	table_id,
	waiter_id,
	hotel_id
}: OrderInterface) {
	try {

		// Inserting the record
		const result = await db.orders.create({
			data: {
				Type: type,
				TableId: table_id,
				WaiterId: waiter_id,
				HotelId: hotel_id
			}
		});

		// Database is disconnected
		db.$disconnect();

		return {
			returncode: 200,
			message: "Data Inserted",
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
