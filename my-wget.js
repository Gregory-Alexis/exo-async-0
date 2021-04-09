const axios = require("axios")
const fsPromises = require("fs/promises")

const ERR_INVALID_FILE_URL_PATH = { code: "ERR_INVALID_FILE_URL_PATH" }

try {
	if (process.argv.length !== 3) {
		console.log(ERR_INVALID_FILE_URL_PATH)
		process.exit(1)
	}
} catch (e) {
	console.log(e.message)
}

const main = async () => {
	try {
		const response = await axios.get(process.argv[2])
		await fsPromises.writeFile("SimpsonStreaming.html", response.data)
		const stat = await fsPromises.stat("SimpsonStreaming.html")
		console.log(stat)
		console.log(response.headers)
	} catch (e) {
		console.log(e.message)
	}
}
main()
