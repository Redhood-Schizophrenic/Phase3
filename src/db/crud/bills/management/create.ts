import db from "@/db/connector";

interface BillInterface {
	order_id: string,
	total_amount: number,
	gst_amount: number,
	menu_total: number,
	balance_amount: number,
	discount_amount: number,
	payment_mode: string,
	payment_status: string,
	staff_id: string
}

export async function create_bill ({
	order_id,
	total_amount,
	gst_amount,
	menu_total,
	balance_amount,
	discount_amount,
	payment_mode,
	payment_status,
	staff_id
}: BillInterface) {
	try {

		// Inserting the record
		const result = await db.bills.create({
			data: {
				OrderId: order_id,
				TotalAmount: total_amount,
				GSTAmount: gst_amount,
				MenuTotal: menu_total,
				BalanceAmount: balance_amount,
				DiscountPrice: discount_amount,
				PaymentMode: payment_mode,
				Status: payment_status,
				StaffId: staff_id
			}
		});

		// Database is disconnected
		db.$disconnect();

		return {
			returncode: 200,
			message: "Data Inserted",
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
