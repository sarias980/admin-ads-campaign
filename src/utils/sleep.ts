export function waitForOneSecond(): Promise<void> {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}
