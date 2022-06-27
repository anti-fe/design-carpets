export default function countPlus(valueCount) {
    if(Number(valueCount.value) <= 99) {
        valueCount.value = Number(valueCount.value) + 1;
    }
}