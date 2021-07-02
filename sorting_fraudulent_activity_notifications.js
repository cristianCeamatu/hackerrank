const median = (arr) => {
  arr.sort((a, b) => a - b);
  console.log(`arr`, arr)
  const mid = Math.floor(arr.length / 2)

  const res = mid % 2 === 0 ? Math.round((arr[mid] + arr[mid + 1]) / 2) : arr[mid]
  console.log(res)
}

function activityNotifications(expenditure, d) {
    // Write your code here
  let notifications = 0
  for (let i = d; i < expenditure.length; i++) {
    console.log(i)
    const prev = expenditure.slice(i - d, i)
    console.log(prev)
    if (expenditure[i] > median(prev) * 2) notifications += 1
  }

  return notifications
}

console.log(activityNotifications([10, 20, 30, 40, 50], 3))