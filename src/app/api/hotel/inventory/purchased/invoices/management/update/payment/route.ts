import { update_invoice } from "./controller";

export async function PUT(request: Request) {
	try {
		const data = await request.json();
		const result = await update_invoice(data);
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
				message: `Error Updating Invoice: ${error.message}`,
				output: []
			},
			{
				status: 500
			}
		);
	}
}
