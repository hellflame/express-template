import Package from "@/../package.json"

export const {version, name, description, author} = Package
export const compatible_version = version.split(".").slice(0, 2).join(".")

