import db from "@/db/connector";

interface DeleteOrderInterface {
	menu_order_id: string
}

export async function delete_order_menus ({
	menu_order_id
}: DeleteOrderInterface) {
	try {

		// Fetching the record
		const result = await db.orderMenus.delete({
			where: {
				id: menu_order_id,
			}
		});

		// Database is disconnected
		db.$disconnect();

		return {
			returncode: 200,
			message: "Data deleted",
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
