answer
wait(3000)
record "Please leave your voicemail after the beep."
    {
    :beep => true,
    :timeout => 10,
    :silenceTimeout => 7,
    :maxTime => 60,
    :terminator => "#",
    :recordFormat => "audio/mp3",
    :recordURI => "http://crowdway.com:8199",
    }
