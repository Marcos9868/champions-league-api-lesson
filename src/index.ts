import { createApp } from "./app";
import playersRoute from "./routes/PlayersRoute";

const app = createApp();

app.use(playersRoute);

app.listen(process.env.PORT, () => console.log("Server running"))