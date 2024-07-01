import { ApiResponse } from "@/types/ApiResponse";
import { read_reservations } from "@/db/crud/reservations/read";

export async function fetch_reservations(data: any): Promise<ApiResponse> {
	try {

		const hotel_id: string | null = data['hotel_id'];
		const date: string | null = data['date'];

		// Default Invalid Checker
		if ( hotel_id == null || date == null ) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}

		}

		// Getting the Sections
		const result = await read_reservations({
			hotel_id,
			date
		});

		return {
			returncode: 200,
			message: "Reservations Fetched",
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
