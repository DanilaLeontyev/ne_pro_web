function count(start, end) {
    if (start > end) return;
    console.log(start);
    count(start + 1, end);
    // console.log('end:' + x);
}

count(5, 15);