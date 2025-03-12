const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db.config');
const floorplanRoutes = require('./src/routes/floorplanroutes');


const app = express();

app.use(express.json());
app.use(cors());

connectDB();
const PORT = process.env.PORT || 8000;

app.get("/",(req,res)=>{
  res.json("Hello")
})

app.use('/api/floorplan', floorplanRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});