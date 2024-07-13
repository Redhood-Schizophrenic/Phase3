import { ApiResponse } from "@/types/ApiResponse";
import { kot_display } from "@/db/crud/orders/management/read";

export async function fetch_kot_bill(data: any): Promise<ApiResponse> {
	try {

		const bill_id: string | null = data['bill_id'];

		// Default Invalid Checker
		if ( bill_id == null ) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		// Getting the Items
		const result = await kot_display({
			bill_id
		});

		return {
			returncode: 200,
			message: "Kot orders Fetched",
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
