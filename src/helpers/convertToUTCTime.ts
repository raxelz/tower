export const convertToUTCTime = (date: string) => {
    let d = new Date(date);
    return d.toUTCString();
};
