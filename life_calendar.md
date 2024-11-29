# Life Calendar Project

## Repository Structure

### README.md
```
# life_calendar
```

### index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Week Visualization</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="week-visualization"></div>
    <script src="script.js"></script>
</body>
</html>
```

### script.js
A JavaScript implementation of a life calendar visualization with the following key features:
- Calculates weeks lived based on a birthdate (set to 1978-07-23)
- Spans 80 years
- Uses emoji to represent:
  - Past weeks: ◻️ 
  - Future weeks: 🟢
- Calculates and displays:
  - Total weeks left
  - Percentage of life completed

Key functions:
- `getWeekNumber()`: Calculates the week number for a given date
- `isPastWeek()`: Determines if a week is in the past
- `getString()`: Generates the visual representation of life weeks

### styles.css
Styling details:
- Simple, clean layout
- Color coding:
  - Past weeks: Grayish color
  - Future weeks: Bright green
- Responsive design with proper spacing and line height

## Project Description
This is a personal life calendar that visualizes one's life in weeks. It provides a visual representation of life progression, showing past and future weeks using a simple, emoji-based approach.

## Configuration
- Birthdate: July 23, 1978
- Expected lifespan: 80 years
