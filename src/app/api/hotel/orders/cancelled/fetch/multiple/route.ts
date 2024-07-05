import { fetch_all_hotel_cancelled_orders } from "./controller";

export async function POST(request: Request) {
	try {
		const data = await request.json();
		const result = await fetch_all_hotel_cancelled_orders(data);
		return Response.json(
			{
				returncode: result.returncode,
				message: result.message,
				output: result.output
			},
			{
				status: result.returncode
			}
		);
	}
	catch (error: any) {
		return Response.json(
			{
				returncode: 500,
				message: `Error Fetching Cancelled Orders: ${error.message}`,
				output: []
			},
			{
				status: 500
			}
		);
	}
}
