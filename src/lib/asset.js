// Files in public/ — resolved against the deploy base so they also work when the
// site is served from a project subpath (GitHub Pages).
export const asset = (file) => `${import.meta.env.BASE_URL}${file}`
