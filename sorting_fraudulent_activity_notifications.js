function activityNotifications(expenditure, d) {
  const median = (arr) => {
  arr.sort((a, b) => a - b);
  const mid = Math.floor(arr.length / 2)

  const res = mid % 2 === 0 ? Math.round((arr[mid] + arr[mid + 1]) / 2) : arr[mid]
  return res
}
    // Write your code here
  let notifications = 0
  for (let i = d; i < expenditure.length; i++) {
    const prev = expenditure.slice(i - d, i)
    if (expenditure[i] >= median(prev) * 2) notifications += 1
  }

  return notifications
}

console.log(activityNotifications([10, 20, 30, 40, 50], 3))
console.log(activityNotifications([2, 3 ,4,2 ,3, 6, 8, 4, 5], 5))