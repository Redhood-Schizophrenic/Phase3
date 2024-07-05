import db from "@/db/connector";

interface BillInterface {
	bill_id: string,
	balance_amount: number,
	payment_mode: string,
	payment_status: string,
}

export async function bill_payment({
	bill_id,
	balance_amount,
	payment_mode,
	payment_status
}: BillInterface) {
	try {

		// Updating the Payment
		const result = await db.bills.update({
			where: {
				id: bill_id
			},
			data: {
				BalanceAmount: balance_amount,
				PaymentMode: payment_mode,
				Status: payment_status,
			}
		});

		// Database is disconnected
		db.$disconnect();

		return {
			returncode: 200,
			message: "Data Updated",
			output: result
		};

	} catch (error: any) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};

	}
}
