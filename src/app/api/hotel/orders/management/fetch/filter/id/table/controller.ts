import { ApiResponse } from "@/types/ApiResponse";
import { read_orders_by_table_id } from "@/db/crud/orders/management/read";

export async function fetch_all_orders(data: any): Promise<ApiResponse> {
	try {

		const table_id: string | null = data['table_id'];

		// Default Invalid Checker
		if ( table_id == null ) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		// Getting the Sections
		const result = await read_orders_by_table_id({
			table_id
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
