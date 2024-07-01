import { ApiResponse } from "@/types/ApiResponse";

export async function add_tables(data: any): Promise<ApiResponse> {
	try {
		const hotel_id: string | null = data['hotel_id'];
		const section_id: string | null = data['section_id'];
		const count: number | null = data['count'];

		// Default Invalid Checker
		if (!hotel_id || !section_id || typeof count !== 'number' || count <= 0) {
			return {
				returncode: 400,
				message: 'Invalid Input',
				output: []
			}
		}

		let data1, table_name, persons_occupiable;
		for (let table_index = 1; table_index <= count; table_index++) { // Fix off-by-one error

			table_name = `Table ${table_index}`;
			persons_occupiable = "4";

			data1 = {
				hotel_id,
				section_id,
				table_name,
				persons_occupiable
			};

			const response = await fetch("http://localhost:3000/api/hotel/tables/management/add/single", {
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				method: "POST",
				body: JSON.stringify(data1)
			});
			
			// Check if the response is OK
			if (!response.ok) {
				const errorMsg = await response.text();
				return {
					returncode: response.status,
					message: `Failed to add table ${table_name}: ${errorMsg}`,
					output: []
				}
			}
		}

		return {
			returncode: 200,
			message: "Tables Added",
			output: []
		};

	} catch (error: any) {
		console.error("Error adding tables:", error);
		return {
			returncode: 500,
			message: error.message || 'Internal Server Error',
			output: []
		};
	}
}
