import db from "@/db/connector";

interface CancelledOrderInterface {
	reason: string,
	menu_id: string,
	order_id: string,
}

export async function create_cancelled_menu_of_order({
	reason,
	menu_id,
	order_id
}: CancelledOrderInterface) {
	try {


		// Inserting the record
		const result = await db.cancelledOrders.create({
			data: {
				Reason: reason,
				MenuId: menu_id,
				OrderId: order_id
			}
		});

		// Database is disconnected
		await db.$disconnect();

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
