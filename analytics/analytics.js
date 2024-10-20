// Sample data for five users
let userData = [
    { name: 'User 1', timeSpent: 200 },
    { name: 'User 2', timeSpent: 300 },
    { name: 'User 3', timeSpent: 400 },
    { name: 'User 4', timeSpent: 250 },
    { name: 'User 5', timeSpent: 350 }
  ];
  
  // Function to generate user stats
  function generateUserStats() {
    const userStatsElement = document.getElementById('userStats');
  
    // Clear previous stats
    userStatsElement.innerHTML = '';
  
    // Loop through each user and create a user card
    userData.forEach(user => {
      const userElement = document.createElement('div');
      userElement.classList.add('user');
      userElement.innerHTML = `
        <h2>${user.name}</h2>
        <p>Time Spent: ${user.timeSpent} minutes</p>
      `;
      userStatsElement.appendChild(userElement);
    });
  }
  
  // Function to update user data
  function updateUserData() {
    // Simulating data update (add 1 minute to each user's time spent)
    userData = userData.map(user => ({ ...user, timeSpent: user.timeSpent + 1 }));
  
    // Update user stats
    generateUserStats();
  
    // Update charts
    updateCharts();
  }
  
  // Function to update charts
  function updateCharts() {
    // Pie chart
    const pieChartData = userData.map(user => user.timeSpent);
    updatePieChart(pieChartData);
  
    // Line chart
    const labels = userData.map(user => user.name);
    const lineChartData = userData.map(user => user.timeSpent);
    updateLineChart(labels, lineChartData);
  }
  
  // Function to update pie chart
  function updatePieChart(data) {
    const ctx = document.getElementById('pieChart').getContext('2d');
    const pieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: userData.map(user => user.name),
        datasets: [{
          label: 'Time Spent',
          data: data,
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#4BC0C0',
            '#9966FF'
          ]
        }]
      }
    });
  }
  
  // Function to update line chart
  function updateLineChart(labels, data) {
    const ctx = document.getElementById('lineChart').getContext('2d');
    const lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Time Spent',
          data: data,
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)'
        }]
      }
    });
  }
  
  // Call the function to generate initial user stats and charts
  generateUserStats();
  updateCharts();
  
  // Update dashboard automatically every 5 seconds
  setInterval(updateUserData, 5000);
  