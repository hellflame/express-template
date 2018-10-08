import Package from "@/../package.json"

export const version = Package.version
export const name = Package.name
export const description = Package.description
export const compatible_version = version.split(".").slice(0, 2).join(".")

