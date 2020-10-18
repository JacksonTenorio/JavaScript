function maxmin(a, b, c, d, e) {
    var array = [0, 0]
    array[0] = Math.min(a, b, c, d, e)
    array[1] = Math.max(a, b, c, d, e)
    return array
}