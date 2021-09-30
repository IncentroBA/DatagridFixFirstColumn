export function waitFor(elementClass, callback, parent) {
    const context = parent || document;

    if (context.querySelector(elementClass)) {
        callback();
    } else {
        const observer = new MutationObserver(() => {
            if (context.querySelector(elementClass)) {
                observer.disconnect();
                callback();
            }
        });

        // Start observing
        observer.observe(context, {
            childList: true, //This is a must have for the observer with subtree
            subtree: true //Set to true if changes must also be observed in descendants.
        });
    }
}
