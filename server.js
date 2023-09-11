const express = require('express')
const cors = require("cors")
const port = 4000

const app = express();
app.use(cors({
   origin: "*"
}))
app.use(express.json())

var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday","Saturday"];

function UTC() {
   const currentUTC = new Date().getTime();
   const lowerBound = currentUTC - 2000;
   const upperBound = currentUTC + 2000;
   const actualUTC = new Date().getTime();
 
   if (actualUTC >= lowerBound && actualUTC <= upperBound) {
      const iso8601Time = new Date(actualUTC).toISOString().slice(0, -5) + "Z";
      return iso8601Time;
      // return new Date(actualUTC);
   } else {
     throw new Error('UTC time validation failed');
   }
}
 
app.get('/api', async(req, res) => {
   try {
      const slack_name = req.query.slack_name
      const track = req.query.track
      res.status(200).json({
         slack_name,
         current_day: weekday[new Date().getDay()],
         utc_time: UTC(),
         track,
         github_file_url: "https://github.com/oluwaseun-odueso/HNGX/blob/main/server.js",
         github_repo_url: "https://github.com/oluwaseun-odueso/HNGX",
         status_code: 200
      })
   } catch (error) {
      res.status(500).json({message: error.message})
   }
});

app.listen(port, () => {
   console.log(`Server running on port ${port}`)
})