const express = require('express')
const port = 4000

const app = express();
app.use(express.json())

var weekday = new Array(7);
weekday[0]="Monday";
weekday[1]="Tuesday";
weekday[2]="Wednesday";
weekday[3]="Thursday";
weekday[4]="Friday";
weekday[5]="Saturday";
weekday[6]="Sunday";
console.log("Today is " + weekday[3]);

app.get('/', async(req, res) => {
   let slack_name = req.query.slack_name
   let track = req.query.track
   let utc_time = Date.UTC()
   let day = new Date().getDay()

   res.status(200).json({
      slack_name,
      current_day: weekday[day],
      utc_time,
      track,
      github_file_url: "https://github.com/oluwaseun-odueso/HNGX/server.js",
      github_repo_url: "https://github.com/oluwaseun-odueso/HNGX",
      status_code: 200
   })
});

app.listen(port, () => {
   console.log(`Server running on port ${port}`)
})