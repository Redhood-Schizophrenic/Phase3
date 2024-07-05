import { ApiResponse } from "@/types/ApiResponse";
import { read_order_menus } from "@/db/crud/orders/menu/read";

export async function fetch_all_order_menus(data: any): Promise<ApiResponse> {
	try {

		const order_id: string | null = data['order_id'];

		// Default Invalid Checker
		if ( order_id == null ) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		// Getting the Orders
		const result = await read_order_menus({
			order_id
		});

		return {
			returncode: 200,
			message: "Hotel's Order Menus Fetched",
			output: result.output
		};

	} catch (error: any) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};
	}
}
