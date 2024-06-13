export default function formatNumber(num) {
    // Format the number to one decimal place
    let formatted = num.toFixed(1);

    // Use a regular expression to remove the trailing .0 if present
    formatted = formatted.replace(/\.0$/, '');

    return formatted;
}