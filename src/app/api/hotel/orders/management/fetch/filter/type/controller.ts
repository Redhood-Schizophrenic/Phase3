import { ApiResponse } from "@/types/ApiResponse";
import { read_order_filter } from "@/db/crud/orders/management/read";

export async function fetch_all_orders(data: any): Promise<ApiResponse> {
	try {

		const hotel_id: string | null = data['hotel_id'];
		const type: string | null = data['type'];

		// Default Invalid Checker
		if ( hotel_id == null || type == null ) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		// Getting the Sections
		const result = await read_order_filter({
			hotel_id,
			type
		});

		return {
			returncode: 200,
			message: "Hotel's Orders Fetched",
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
