// vite.config.js
export default {
    build: {
        rollupOptions: {
            input: {
                index: 'index.html',
                feedback: 'feedback.html',
                info: 'info.html',
                planet: 'planet.html',
            },
        },
    },
};
