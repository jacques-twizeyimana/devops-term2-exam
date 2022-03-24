import app from "./utils/app";

const server = app();

server.listen(5000, () => {
	console.log("Server started on port 5000");
});
