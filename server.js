const express = require('express')
const port = 4000

const app = express();
app.use(express.json())

var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday","Saturday"];

app.get('/hng', async(req, res) => {
   let slack_name = req.query.slack_name
   let track = req.query.track

   res.status(200).json({
      slack_name,
      current_day: weekday[new Date().getDay()],
      utc_time: new Date(),
      track,
      github_file_url: "https://github.com/oluwaseun-odueso/HNGX/blob/main/server.js",
      github_repo_url: "https://github.com/oluwaseun-odueso/HNGX",
      status_code: 200
   })
});

app.listen(port, () => {
   console.log(`Server running on port ${port}`)
})