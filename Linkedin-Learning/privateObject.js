// use symbols to make variables/properties private

const username = Symbol("username")
const password = Symbol("password")

const User = {
	username: "aakash",
	password: "12345",
	age: 24,
}

// if symbol is not used, values of username and password can be accessable by anyone
console.log({ User: { username: User.username, password: User.password, age: User.age } })

// once username and password are specified to use the Symbol keys
// both can no longer be accessed, hence private
const NewUser = {
	[username]: "aakash",
	[password]: "12345",
	age: 24,
}
console.log({
	NewUser: { username: NewUser.username, password: NewUser.password, age: NewUser.age },
})
