import db from "@/db/connector";

// Fetch all categories
interface OrderInterface {
	order_id: string
}

export async function read_order_menus ({
	order_id
}: OrderInterface) {
	try {

		// Fetching the record
		const result = await db.orderMenus.findMany({
			where: {
				OrderId: order_id,
			},
			include: {
				Order: true
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

// Fetch single
interface MenuOrderInterface {
	menu_order_id: string
}

export async function read_order_menu ({
	menu_order_id
}: MenuOrderInterface) {
	try {

		// Fetching the record
		const result = await db.orderMenus.findMany({
			where: {
				id: menu_order_id,
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
