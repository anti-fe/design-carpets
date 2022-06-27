export default function countPlus(valueCount) {
    if(+valueCount.value >= 2) {
        valueCount.value = +valueCount.value - 1;
    }
}