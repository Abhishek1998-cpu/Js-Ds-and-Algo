// Steps for React App Performance Improvement -

// 1. Windowing / Virtualization (List Virtualization)
// Note - React App Lags when we render's a large number of component or List Item on a page, so
// Instead of rendering all the Complete list of Component's or list items
// We only allow a restricted list of item's to be rendered on the DOM as much as visible.
// Mostly this is done with the help of react-window or react-virtualized package.
// This improves the React App Performance and User Experience

// 2. Provide proper key attributes value wherever is required / wherever the list using map or any
// other thing is being rendered.
// Note - It helps react to identify which items have changed, been added, or been removed.
// It uses the key props to efficiently update the virtual DOM during the reconciliation process.
// key={index} is not preferred as if the order of the items in an array changes,  it might result in
// incorrect rendering and unexpected behavior.

// 3. Lazy Loading of Images
// Note - Loading all the images needed to be rendered can cause lag in React App
// Hence we suggest using Lazy loading images, which will wait until the turn of the
// image appears on the user screen and only render that particular image.
// We can implement this using react-lazyload package, Other ways to Implement it -
// Check this

// 4. Implement SSR

// 5. Implement useMemo, useCallback, and React.Memo wherever required.
