const myWeek = [
  { day: "Monday", activity: "Drawing", category: "creative", hoursSpent: 1.5, enjoyment: 3, timeOfDay: "evening" },
  { day: "Tuesday", activity: "Running", category: "physical", hoursSpent: 1, enjoyment: 5, timeOfDay: "morning" },
  { day: "Wednesday", activity: "Gaming", category: "social", hoursSpent: 2, enjoyment: 10, timeOfDay: "evening" },
  { day: "Thursday", activity: "Writing", category: "creative", hoursSpent: 1.25, enjoyment: 6, timeOfDay: "afternoon" },
  { day: "Friday", activity: "Cooking", category: "creative", hoursSpent: 1, enjoyment: 9, timeOfDay: "evening" },
  { day: "Saturday", activity: "Texting", category: "social", hoursSpent: 2.5, enjoyment: 10, timeOfDay: "morning" },
  { day: "Sunday", activity: "Reading", category: "creative", hoursSpent: 1.2, enjoyment: 7, timeOfDay: "afternoon" }
];

/* 
1. The activity with the highest enjoyment is gaming because I love to play videogames to cure boredom. 
2. The dominant category is creative because I like to be creative during my free time. 
3. Time of day patterns: I tend to like evenings more than the rest since I am most free during the evening. 
*/

// First Function counts the total number of time spent on physical activities 
function physicalhours(data) {
  return data
    .filter(entry => entry.category === "physical")
    .reduce((sum, entry) => sum + entry.hoursSpent, 0);
}

// Second function is the avg enjoyment for the activites done in the evening
function avgeveningenjoyment(data) {
  const eveningActivities=data.filter(entry => entry.timeOfDay==="evening");
  const totalEnjoyment=eveningActivities.reduce((sum, entry) => sum + entry.enjoyment, 0);
  return eveningActivities.length ? (totalEnjoyment / eveningActivities.length).toFixed(1):0;
}


//High order function (custom)
function filterByCondition(testFn) {
  return myWeek.filter(testFn);
}
filterByCondition(act => act.hoursSpent < 1.5 && act.enjoyment > 8);
