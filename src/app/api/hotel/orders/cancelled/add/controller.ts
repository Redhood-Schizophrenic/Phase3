import { ApiResponse } from "@/types/ApiResponse";
import { create_cancelled_menu_of_order } from "@/db/crud/orders/cancelled_orders/create";
export async function add_cancelled_menu_order(data: any): Promise<ApiResponse> {
	try {

		const menu_id: string | null = data['menu_id'];
		const order_id: string | null = data['order_id'];
		const reason: string | null = data['reason'];

		// Default Invalid Checker
		if ( menu_id == null || order_id == null || reason == null ) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		// Inserting the Cancelled Order
		const result = await create_cancelled_menu_of_order({
			reason,
			order_id,
			menu_id
		});

		if (result.returncode != 200) {
			return {
				returncode: 200,
				message: "Cancelled Order Added",
				output: result.output
			};
		}
		else {
			return result;
		}

	} catch (error: any) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};
	}
}
