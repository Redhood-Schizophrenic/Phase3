import { fetch_all_order_menus } from "./controller";

export async function POST(request: Request) {
	try {
		const data = await request.json();
		const result = await fetch_all_order_menus(data);
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
				message: `Error Fetching Order Menus: ${error.message}`,
				output: []
			},
			{
				status: 500
			}
		);
	}
}
