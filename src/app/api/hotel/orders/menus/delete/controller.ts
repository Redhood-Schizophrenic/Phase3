import { ApiResponse } from "@/types/ApiResponse";
import { delete_order_menus } from "@/db/crud/orders/menu/delete";
import { read_order_menu } from "@/db/crud/orders/menu/read";
import { create_cancelled_menu_of_order } from "@/db/crud/orders/cancelled_orders/create";

export async function delete_an_order(data: any): Promise<ApiResponse> {
	try {

		const menu_order_id: string | null = data['menu_order_id'];
		const reason: string | null = data['reason'];

		// Default Invalid Checker
		if ( menu_order_id == null || reason == null ) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		// Fetch existing order menu
		const existingOrderMenu = await read_order_menu({ menu_order_id });
		const menu_id = existingOrderMenu.output[0].MenuId;
		const order_id = existingOrderMenu.output[0].OrderId;

		// Adding in Cancelled Orders
		await create_cancelled_menu_of_order({
			reason,
			menu_id,
			order_id
		})

		// Deleting the Order
		await delete_order_menus({
			menu_order_id
		});

		return {
			returncode: 200,
			message: "Hotel's Order Menu Deleted",
			output: []
		};

	} catch (error: any) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};
	}
}
