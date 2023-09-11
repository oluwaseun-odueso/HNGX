const express = require('express')
const cors = require("cors")
const port = 4000

const app = express();
app.use(cors({
   origin: "*"
}))
app.use(express.json())

var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday","Saturday"];

app.get('/api', async(req, res) => {
   let slack_name = req.query.slack_name
   let track = req.query.track

   res.status(200).json({
      slack_name,
      current_day: weekday[new Date().getDay()],
      utc_time: new Date().toISOString().replace(/\.\d+/, '').replace(/(\d{2}:\d{2}:\d{2})Z$/, '$1.00Z'),
      track,
      github_file_url: "https://github.com/oluwaseun-odueso/HNGX/blob/main/server.js",
      github_repo_url: "https://github.com/oluwaseun-odueso/HNGX",
      status_code: 200
   })
});

app.listen(port, () => {
   console.log(`Server running on port ${port}`)
})