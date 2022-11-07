/*
Создайте функцию mock, которая принимает на вход аргумент number (количество миллисекунд) и возвращает Promise,
который завершится через заданное количество миллисекунд со значением, переданным в аргумент.
 */
export function mock(ms: number): Promise<number> {
    const promise1 = new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
    return promise1;
}

/*
Перепишите функцию getData так, чтобы она выполнялась быстрее.
 */
export function getData(): Promise<number[]> {
    const result: number[] = [];

    return Promise.all([mock(100), mock(200), mock(300)]).then((data1) => {
        for (let i = 0; i < data1.length; i++) {
            result.push(data1[i]);
        }
        return result;
    });
}

/*
Исправьте функцию catchException так, чтобы блок try/catch обрабатывал
завершенный с ошибкой Promise и возвращал текст ошибки.
 */
export async function catchException(): Promise<string | undefined> {
    try {
        await Promise.reject(new Error('my error'));
    } catch (err) {
        let mess = '';
        if (err instanceof Error) {
            mess = err.message;
        }
        return mess;
    }
}
