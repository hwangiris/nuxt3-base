export default defineNuxtPlugin(() => {
    return {
        provide: {
            formatter_timezone: (time) => {
                return new Date(time).toLocaleString('sv', { timeZoneName: 'short' });
            },
        }
    }
})
