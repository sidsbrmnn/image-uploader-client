module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: ['src/components/**/*.tsx', 'src/pages/**/*.tsx'],
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [require('@tailwindcss/ui')],
};
