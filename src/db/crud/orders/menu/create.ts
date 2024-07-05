import db from "@/db/connector";

interface MenuOrderInterface {
	quantity: string,
	note: string | null,
	total_amount: number,
	menu_id: string,
	order_id: string,
}

export async function create_menu_of_order({
	quantity,
	note,
	total_amount,
	menu_id,
	order_id
}: MenuOrderInterface) {
	try {


		// Inserting the record
		const result = await db.orderMenus.create({
			data: {
				Quantity: quantity,
				Note: note,
				TotalAmount: total_amount,
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
