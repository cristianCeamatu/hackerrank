function prioritateaCetatenilor(coada) {
  class MaxHeap {
    heap = []

    size() {
      return this.heap.length
    }

    isEmpty() {
      return this.heap.length === 0
    }

    swap(i, j) {
      ;[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    set(i, value) {
      this.heap[i] = value
    }

    parent(i) {
      return Math.floor((i - 1) / 2)
    }

    leftChildIndex(i) {
      return 2 * i + 1
    }

    rightChildIndex(i) {
      return 2 * i + 2
    }

    heapifyUp(i) {
      const parentI = this.parent(i)
      if (i > 0 && this.heap[i] > this.heap[parentI]) {
        this.swap(i, parentI)

        this.heapifyUp(parentI)
      }
    }

    heapifyDown(i) {
      const leftIndex = this.leftChildIndex(i)
      const rightIndex = this.rightChildIndex(i)

      let largestIndex = i

      if (leftIndex < this.size() && this.heap[leftIndex] > this.heap[i]) {
        largestIndex = leftIndex
      }

      if (
        rightIndex < this.size() &&
        this.heap[rightIndex] > this.heap[largestIndex]
      ) {
        largestIndex = rightIndex
      }

      if (i !== largestIndex) {
        this.swap(i, largestIndex)

        this.heapifyDown(largestIndex)
      }
    }

    add(value) {
      this.heap.push(value)
      this.heapifyUp(this.heap.length - 1)
    }

    peek() {
      return this.isEmpty() ? 'Empty heap' : this.heap[0]
    }

    pool() {
      const res = this.heap[0]

      this.heap[0] = this.heap[this.size() - 1]
      this.heap.pop()

      this.heapifyDown(0)

      return res
    }
  }

  const maxHeap = new MaxHeap()

  if (coada[0] === 'ajutor') return []

  for (let i = 0; i < coada.length; i++) {
    const el = coada[i]
    if (el === 'ajutor') {
      if (maxHeap.isEmpty()) {
        return []
      } else {
        maxHeap.pool()
      }
    } else {
      const grade = el.split(':')[1]
      console.log(grade)
      maxHeap.add(grade)
    }
  }

  const res = []
  if (maxHeap.isEmpty()) {
    return res
  } else {
    while (!maxHeap.isEmpty()) {
      const value = maxHeap.pool()
      const el = coada.filter((el) => el.includes(value))
      console.log(el)
      res.push(el[el.length - 1].split(':')[0])
    }
  }
  return res
}

// // console.log(prioritateaCetatenilor(['Ion:3.2', 'Ana:3.21', 'ajutor', 'ajutor']))
// console.log(
//   prioritateaCetatenilor(['ion:100', 'saveta:200', 'ajutor', 'catrina:150'])
// )
console.log(
  prioritateaCetatenilor([
    'ion:100',
    'ajutor',
    'saveta:200',
    'saveta:200',
    'ajutor',
    'ajutor',
  ])
)
