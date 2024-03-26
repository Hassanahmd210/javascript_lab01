function printTable(number, limit) {

    for (let i = 1; i <= limit; i++) {
        let result = '';
        let sum = 0;

        for (let j = 1; j <= i; j++) {

            if (j > 1) {
                result += '+';
            }

            result += number;
            sum += number;
        }
        
        console.log(`${number}*${i}=${result}=${sum}`);
    }
}
printTable(3, 10);
