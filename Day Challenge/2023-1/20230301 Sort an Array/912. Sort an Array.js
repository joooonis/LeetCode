const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
};

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    const temp = arr[i];
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
};

const quickSort = (arr) => {
  const sort = (arr, left = 0, right = arr.length - 1) => {
    if (left >= right) {
      return;
    }
    let i = left;
    let j = right;
    const pivot = arr[left];
    while (i < j) {
      while (i < j && arr[j] >= pivot) {
        j--;
      }
      arr[i] = arr[j];
      while (i < j && arr[i] <= pivot) {
        i++;
      }
      arr[j] = arr[i];
    }
    arr[i] = pivot;
    sort(arr, left, i - 1);
    sort(arr, i + 1, right);
  };

  sort(arr);
  return arr;
};

const heapSort = (arr) => {
  const heapify = (arr, i, len) => {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let largest = i;
    if (left < len && arr[left] > arr[largest]) {
      largest = left;
    }
    if (right < len && arr[right] > arr[largest]) {
      largest = right;
    }
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(arr, largest, len);
    }
  };

  for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
    heapify(arr, i, arr.length);
  }

  for (let i = arr.length - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, 0, i);
  }

  return arr;
};

const mergeSort = (arr) => {
  const merge = (left, right) => {
    const res = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        res.push(left.shift());
      } else {
        res.push(right.shift());
      }
    }
    while (left.length) {
      res.push(left.shift());
    }
    while (right.length) {
      res.push(right.shift());
    }
    return res;
  };

  const sort = (arr) => {
    const { length } = arr;
    if (length < 2) {
      return arr;
    }
    const mid = Math.floor(length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, length);
    return merge(sort(left), sort(right));
  };

  return sort(arr);
};
