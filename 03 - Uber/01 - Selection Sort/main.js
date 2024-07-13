// Uber Interview Question about Selection Sort Algorithm

// اللي هنرتبها بالكود array دي كدة عبارة عن ال 
const numbersArray = [7, 3, 6, 2, 4, 1];

// parameter هنا احنا بندخل 
// Array Of Number ودا عبارة عن 
function selectionSortAlgorithm(numbers) {
    // Array بتمشي علي كل عناصر ال Loop هنا بنعمل 
    // من اول عنصر لحد العنصر قبل الاخير
    for (let i = 0; i < numbers.length - 1; i++) {
        // هنا احنا بنعمل فرض ان العنصر دا هيكون اصفر عنصر
        let minIndex = i;
        // هنا احنا بنعمل innerLoop
        // ودي هتمشي ع باقي العناصر وهنفضل نقارن كل العناصر بالعنصر الحالي
        for (let j = i + 1; j < numbers.length; j++ ) {
            // وفي حالة ان كان فيه عنصر اصغر من العنصر اللي احنا بنعتبره انه اصغر عنصر
            if (numbers[j] < numbers[minIndex]) {
                // بنبدا نعمل update
                // ونخلي قيمة ال minIndex 
                // تساوي النصر الصغير
                minIndex = j;
            }
        }
        // هنا استخدمت desctructioring
        // علشان نبدا نبدل العناصر بتاعنا ونعيد الترتيب بمعني اصح
        [numbers[i], numbers[minIndex]] = [numbers[minIndex], numbers[i]];
    }
    // بعد الترتيب ARRAY هنا احنا كدة بنرجع ال 
    return numbers
}

console.log(selectionSortAlgorithm(numbersArray));

// Output => [ 1, 2, 3, 4, 6, 7 ]