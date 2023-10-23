const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb://localhost:27017/contact_form_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const messageSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    company: String,
    phoneNumber: Number,
    message: String,
});

const Message = mongoose.model('Message', messageSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.post('/messages', async (req, res) => {
    try {
      const message = new Message(req.body);
      await message.save();
      res.status(201).json({ message: 'Message saved successfully' });
    } catch (error) {
      console.error('Error saving message:', error);
      res.status(500).json({ error: 'An error occurred while saving the message' });
    }
});

app.post('/tabledata',(req,res)=>{
  const data = req.body;
  console.log(data);
});

app.post("/blooms",(req,res)=>{
  const bloomsLevel = req.body;
  
});


app.listen(3001, () => {
console.log(`Server is running on port`);
}); 