function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(greeting){
  console.log(`${greeting.toUpperCase()}`)
}
function logWhisper(greeting){
  console.log(`${greeting.toLowerCase()}`)
}
function sayHiToGrandma(string) {
  if (string === whisper(string))
  return "I can't hear you!";
}
else if (string === shout(string)) {
  return "YES INDEED!";
}
else (string === "I love you, Grandma.") {
  return "I love you, too.";
}
