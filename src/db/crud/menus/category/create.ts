import db from "@/db/connector";

interface CategoryInterface {
	category_name: string,
	description: string | null,
	hotel_id: string
}

export async function create_menu_category ({
	category_name,
	description,
	hotel_id
}: CategoryInterface){
	try {

		// Inserting the record
		const result = await db.menuCategory.create({
			data: {
				CategoryName: category_name,
				Description: description,
				HotelId: hotel_id
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
