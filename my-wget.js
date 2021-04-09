const axios = require("axios")
const fsPromises = require("fs/promises")

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
