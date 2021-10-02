const menuItems = [
	{
		name: "Eggplant Parmesan",
		isVeg: true,
	},
	{
		name: "White sauce pasta",
		isVeg: true,
	},
	{
		name: "Spaghetti & Meatballs",
		isVeg: false,
	},
	{
		name: "Rice with soya chumks",
		isVeg: true,
	},
]

// generate a list of all veg items and display in DOM as a ul
// will simply console log veg items for now

const vegItems = menuItems.filter((item) => {
	if (item.isVeg === true) {
		return item.name
	}
})
console.log(vegItems)
