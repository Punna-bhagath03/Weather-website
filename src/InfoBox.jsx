import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://plus.unsplash.com/premium_photo-1678066986924-120fdbdf3439?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGR1c3R5JTIwc2t5fGVufDB8fDB8fHww";

  let HOT_URL =
    "https://plus.unsplash.com/premium_photo-1666241368300-a1115df75b7c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3VubnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  let COLD_URL =
    "https://media.istockphoto.com/id/186534154/photo/winter-landscape-with-beautiful-reflection-in-the-water.webp?a=1&b=1&s=612x612&w=0&k=20&c=LdfE5uwyjtvhwINlfj6FuIHVRIlYQGp1sYP9uQ5s7js=";
  let RAIN_URL =
    "https://media.istockphoto.com/id/453684353/photo/rain-at-the-fields.webp?a=1&b=1&s=612x612&w=0&k=20&c=KCDXU_ByfExLiAGLA1pp48_HslYQuDsVOUxsKCxnmwA=";

  return (
    <div className="Info-Box">
      <h2>Weather Info</h2>

      <div className="card-container">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            //
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
              <p>
                The weather can be Described as <b>{info.weather}</b> and feels
                like {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
