
1.upto(10) do |i|
  Meeting.create(
    topic: "Meeting #{i}",
    date: Date.today + rand(60).days,
    time: Time.now + rand(1000).minutes,
    location: ["Amsterdam", "Rotterdam", "Haarlem", "Utrecht", "Amstelveen"].sample
  )
end

# Time.now.seconds_since_midnight
# Time.at(t).utc.strftime("%H:%M:%S")
