import { app } from './app';

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`server is running in port: ${PORT}`));
