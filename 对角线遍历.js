function getDiagonal(arr) {
  if(!arr.length) return []
  const m = arr.length //行
  const n = arr[0].length //列
  let i = 0, j = 0
  const resArr = []
  for(let l =0; l < m*n ; l++) {
    resArr.push(arr[i][j])
    if ((i+j) % 2 === 0) {
      //偶数行 ，向左上
      if (j === n - 1) { //到达右边界,行+1
        i++
        continue
      }
      else if (i === 0) {// 到达上边界,列+1
        j++
        continue
      } else {
        i--
        j++
      }
      
    } else {
      //奇数行，向右下
      if (i === m-1) {//到达下边界，列+1
        j++
        continue
      }
      else if (j === 0) {//到达左边界，行+1
        i++
        continue
      } else {
        i++
        j--
      }
      
    }
  }

  return resArr
  
}